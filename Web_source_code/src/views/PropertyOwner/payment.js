import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../Home/ListingItem';
import master from './../../data/masterData.json';

function Payments() {
    const [MyPayments, SetMyPayments] = useState([]);
	const [filterValues, SetFilterValues]= useState({country: 0, moveInDate: '', apartment: 0, roomtype: 0, kitchen: 0, evcharger: 0, 
	agepreference: 0, furniture: 0});
	const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	

    const currentRecords = MyPayments && MyPayments.length > 0 && MyPayments.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages = Math.ceil(MyPayments && MyPayments.length / recordsPerPage)

    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }

    useEffect(()=> {
        getPaymentsInfo()
    }, [])

    function getPaymentsInfo() {
		const apiUrl = `${config.Url}api/user/getPaymentsInfo`;
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
                    SetMyPayments(data.res);
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
        <div class="content-area">
            <h4 class="content-title">Payment</h4>
            <div class="profileform">
                <div class="table-layout1">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">S.NO.</th>
                                    <th class="text-center">User name</th>
                                    <th class="text-center">Booking From</th>
                                    <th class="text-center">Booking To</th>
                                    <th class="text-center">Security Deposit</th>
                                    <th class="text-center">Payment Mode</th>
                                    <th class="text-center">Monthly Rent</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentRecords && currentRecords.length > 0 && currentRecords.map((item, index)=> (
                                <tr>
                                    <td class="text-center">
                                        {index+1}
                                    </td>
                                    <td class="text-center">
                                        {item.Fullname}
                                    </td>
                                    <td class="text-center">
                                        {item.bookingfrom}
                                    </td>
                                    <td class="text-center">
                                        {item.bookingto}
                                    </td>
                                    <td class="text-center">
                                        {item.isbookingconfirmed == 0 ? "2": "50"}%
                                    </td>
                                    <td class="text-center">
                                        {item.paymentmode}
                                    </td>
                                    <td class="text-center">
                                        ${item.monthlyrent}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments;