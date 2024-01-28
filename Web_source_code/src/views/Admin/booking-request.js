import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../Home/ListingItem';
import master from './../../data/masterData.json';

function BookingRequest() {
    const history = useNavigate();
    const [MyStayRequest, SetMyStayRequest] = useState([]);
    const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


    const currentRecords = MyStayRequest && MyStayRequest.length > 0 && MyStayRequest.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages = Math.ceil(MyStayRequest && MyStayRequest.length / recordsPerPage)

    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }
    const viewRequest = (id) => (e) => {
        history("/admin/bookingRequestview/" + id);
    }
    useEffect(() => {
        getListing()
    }, [])

    function getListing() {
        const apiUrl = `${config.Url}api/admin/getPropertyStayRequest`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    SetMyStayRequest(data.res);
                } else {
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    console.error("Error fetching user data");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title">
                    Booking Requests
                </h4>
            </div>
            <div class="adminCard">
                <div class="profileform">
                    <div class="table-layout1">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center">image</th>
                                        <th class="text-center">name</th>
                                        <th class="text-center">Community</th>
                                        <th class="text-center">property name</th>
                                        <th class="text-center">location</th>
                                        <th class="text-center">Charges ($)</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRecords && currentRecords.length > 0 && currentRecords.map((item, index) => (
                                        <tr>
                                            <td class="text-center">
                                                <div class="tbleimg">
                                                    <img src={`${config.ImageUrl}images/users/` + item.profilePic} alt="My Stay" class="img-fluid" />
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                {item.Fullname}
                                            </td>
                                            <td class="text-center">
                                                {item.propertyname}
                                            </td>
                                            <td class="text-center">
                                                {item.province}
                                            </td>
                                            <td class="text-center">
                                                Student
                                            </td>
                                            <td class="text-center">
                                                ${item.monthlyrent}
                                            </td>
                                            <td class="text-center">
                                                <div class="tablebtngrp">
                                                    <button class="eye" onClick={viewRequest(item.id)}><i class="fa fa-regular fa-eye"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingRequest;