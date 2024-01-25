import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Property() {
    const history = useNavigate();

    const [MyProperty, setProperty] = useState({});
    useEffect(()=> {
        getUserpropertyInfo()
    }, []);

    const gotopropertyView = (id) => (e) => {
        e.preventDefault();
        history("/owner/propertyAddEdit/"+id);
    }
    function getUserpropertyInfo() {
        const apiUrl = `${config.Url}api/property/getOwnerProperty`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === 200) {
                    //this.setState({ postData: data.data });
                    setProperty(data.properties);
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
            <h4 class="content-title">property</h4>
            <div class="profileform">
                <div class="row">
                    <div class="col-12 text-end mb-2">
                        <button class="btn btn-primary text-capitalize" onClick={() => history("/owner/propertyAddEdit/0")}><i class="fa fa-solid fa-plus"></i>&nbsp; add property</button>
                    </div>
                </div>
                <div class="table-layout1">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">image</th>
                                    <th class="text-center">Property name</th>
                                    <th class="text-center">House type</th>
                                    <th class="text-center">Country</th>
                                    <th class="text-center">Province</th>
                                    <th class="text-center">action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {MyProperty && MyProperty.length > 0 &&  MyProperty.map((result, index)=> (
                                <tr key={index}>
                                <td class="text-center">
                                    <div class="tbleimg">
                                        <img src={`${config.ImageUrl}images/Property/` + result.propertyphoto1} class="img-fluid" alt="Meal Image" />
                                    </div>
                                </td>
                                <td class="text-center">
                                    {result.propertyname}
                                </td>
                                <td class="text-center">
                                    {result.housetype == 0 ? "---" : master.HouseType.find(e => e.id == result.housetype).name}
                                </td>
                                <td class="text-center">
                                {result.country == 0 ? "---" : master.Country.find(e => e.id == result.country).name}
                                </td>
                                <td class="text-center">
                                {result.province}
                                </td>
                                <td class="text-center">
                                    <div class="tablebtngrp">
                                        <button class="delete" onClick={gotopropertyView(result.id)}><i class="fa fa-solid fa-pencil"></i></button>
                                        <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
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
    )
}

export default Property;