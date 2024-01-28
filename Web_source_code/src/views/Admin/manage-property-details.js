import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

function PropertyDetails() {
    const history = useNavigate();
    const [ConnectedHostName, SetConnectedHostName] = useState('');
    const params = useParams();
    const [MyPropertyList, setMyPropertyList] = useState({});
    const [connectWithHost, SetConnectWIthHost] = useState(false);
    const SetConnectWIthHostClick = (id, name) => (e) => {
        SetConnectedHostName(name);
        if(id == 1){
            SetConnectWIthHost(true);
        }
        if(id == 0){
            SetConnectWIthHost(false);
        }
    }
    useEffect(() => {
        if (params.id != "0") {
            getUserInfo(params.id);
        }
    }, [])
    const checkPropertyDetail = (e) => {
        history("/admin/Property-details-approve-reject/"+params.id);
    }
    function getUserInfo(property_id) {
        let formData = JSON.stringify({
            "property_id": property_id
        });
        const apiUrl = `${config.Url}api/admin/PropertyDetailByPropertyId`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === 200) {
                    setMyPropertyList(data.property);
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
                <h4 class="content-title backitem">
                    <span>Manage Property {">"} Property Detail</span>
                    <span><a href="manage-property.html"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>

            <div class="adminCard statusview fm-area">
                <div class="profileform p-0">
                    <div class="table-layout1">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center">image</th>
                                        <th class="text-center">Host name</th>
                                        <th class="text-center">Email ID</th>
                                        <th class="text-center">Mobile Number</th>
                                        <th class="text-center">property type</th>
                                        <th class="text-center">property name</th>
                                        <th class="text-center">location</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {MyPropertyList.length > 0 && MyPropertyList.map((property, index) => (
                                    <tr key={index}>
                                        <td class="text-center">
                                            <div class="tbleimg">
                                                <img src={require('./../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" />
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            {property.host_name}
                                        </td>
                                        <td class="text-center">
                                        {property.host_emailid}
                                        </td>
                                        <td class="text-center">
                                        {property.host_mobileno}
                                        </td>
                                        <td class="text-center">
                                            Apartment
                                        </td>
                                        <td class="text-center">
                                            Urban Styled
                                        </td>
                                        <td class="text-center">
                                        {property.host_location}
                                        </td>
                                        <td class="text-center">
                                            <div class="tablebtngrp">
                                                <div class="dropdown">
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                        <i class="fa fa fa-solid fa-ellipsis-vertical"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu onClick={SetConnectWIthHostClick(1, property.host_name)}>
                                                            <Dropdown.Item href="#/action-1">Connect</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                            </div>
                                        </td>
                                    </tr>
                                )) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="profileform px-2 py-3 mt-4">
                        <div class="verHead">
                            <h4>Property Details</h4>
                        </div>
                        <div class="row g-4 mt-2">
                            <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <label>Property Address</label>
                                    <input type="text" name="dob" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].address} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group statuslabel">
                                    <label>Address Proof</label>
                                    <input type="text" name="idproof" value="propertydeed.pdf" placeholder="" readonly />
                                        <div class="eyestatus">
                                            <div class="viewid" data-bs-toggle="modal" data-bs-target="#viewID">
                                                <i class="fa-solid fa-eye"></i>
                                            </div>
                                            <div class="badge">
                                                <img src="../img/icons/bluecheck.png" class="img-fluid" alt="Check Img" />
                                                    <label>Verified</label>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Property name</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyname} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>House type</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].housetype != 0 ? master.HouseType.find(e => e.id == MyPropertyList[0].housetype)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Area covered</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].apartmentsize != 0 ? master.ApartmentSize.find(e => e.id == MyPropertyList[0].apartmentsize)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Bedrooms</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].totalrooms != 0 ? master.NumbersUpto15.find(e => e.id == MyPropertyList[0].totalrooms)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Bathrooms </label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].bathroom != 0 ? master.NumbersUpto15.find(e => e.id == MyPropertyList[0].bathroom)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No of Living Room</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].livingroom != 0 ? master.NumbersUpto15.find(e => e.id == MyPropertyList[0].livingroom)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>


                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Is Kitchen available ?</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].kitchen != 0 ? master.YesNo.find(e => e.id == MyPropertyList[0].kitchen)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Residents</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].residants != 0 ? master.NumbersUpto15.find(e => e.id == MyPropertyList[0].residants)?.name : ""} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Is EV Charger available ?</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].evcharger != 0 ? master.YesNo.find(e => e.id == MyPropertyList[0].evcharger)?.name : "---"} placeholder="" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Is Fire Extinguisher available ?</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].fireextinguisher != 0 ? master.YesNo.find(e => e.id == MyPropertyList[0].fireextinguisher)?.name : "---"} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Travel Guide</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].travelguide != 0 ? master.YesNo.find(e => e.id == MyPropertyList[0].travelguide)?.name : "---"} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Events</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].events != 0 ? master.YesNo.find(e => e.id == MyPropertyList[0].events)?.name : "---"} placeholder="" readonly />
                                </div>
                            </div>


                            <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="cardsec mb-2  mt-4" id="amenities">
                                    <h4>Community Amenities</h4>
                                    <ul class="amiitems">
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].communityamenities && MyPropertyList[0].communityamenities.split(',').map((item, index)=> (
                                        <li>
                                            <img src={(item < 20 && item != "") && require(`./../../img/icons/` + master.CommunityAmenities.find(e => e.id == item).icon)} class="img-fluid" alt="" />
                                            {item < 20 && item != "" && master.CommunityAmenities.find(e => e.id == item).name}
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="cardsec" id="amenities">
                                    <h4>Apartment Amenities</h4>
                                    <ul class="amiitems">
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].apartmentamenities && MyPropertyList[0].apartmentamenities.split(',').map((item, index)=> (
                                        <li>
                                            <img src={(item < 20 && item != "") && require(`./../../img/icons/` + master.ApartmentAmeneties.find(e => e.id == item).icon)} class="img-fluid" alt="" />
                                            {item < 20 && item != "" && master.ApartmentAmeneties.find(e => e.id == item).name}
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-start">
                                <div class="form-group">
                                    <button class="btn btn-secondary text-uppercase" onClick={checkPropertyDetail}>View more Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal id="contacthost" show={connectWithHost} onHide={()=> SetConnectWIthHost(false)} className="modal-xl">
                <div>
                    <div class="">
                        <div class="closeBtn" onClick={()=> SetConnectWIthHost(false)}>
                            <i class="fa fa-solid fa-xmark"></i>
                        </div>
                        <h4 id="hostModalLabel">Connect with {ConnectedHostName}</h4>
                        <div class="to mb-4">
                            <label>To:</label>
                            <div class="hostimg">
                            {/* {PropertyInfo.profilepic == null || PropertyInfo.profilepic == "" ? null :
                                        <img src={`${config.ImageUrl}images/users/` + PropertyInfo.profilepic} class="img-fluid" alt="User uploaded image" />
                                    } */}
                                    <label>{ConnectedHostName}</label>
                                    <div class="badge3 text-uppercase">
                                        <img src={require('../../img/icons/verified.png')} class="img-fluid" alt="Verified" />
                                            Verified host
                                    </div>
                            </div>
                        </div>
                        <div class="to messgebx">
                            <label>Message:</label>
                            <textarea></textarea>
                        </div>
                        <div class="mt-4 buttonGrp text-end">
                            <button class="btn btn-secondary me-2" onClick={()=> SetConnectWIthHost(false)}>Cancel</button>
                            <button class="btn btn-primary" onClick={()=> SetConnectWIthHost(false)}>Send</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default PropertyDetails;