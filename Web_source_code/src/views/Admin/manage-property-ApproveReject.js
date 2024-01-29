import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

function ManagePropertyView() {
    const history = useNavigate();
    const [ConnectedHostName, SetConnectedHostName] = useState('');
    const params = useParams();
    const [MyPropertyList, setMyPropertyList] = useState({});
    const [RoomsInfo, SetRoomsInfo] = useState({});
    const [connectWithHost, SetConnectWIthHost] = useState(false);
    const SetConnectWIthHostClick = (id, name) => (e) => {
        SetConnectedHostName(name);
        if (id == 1) {
            SetConnectWIthHost(true);
        }
        if (id == 0) {
            SetConnectWIthHost(false);
        }
    }
    const updatePropertyStatus = (id) => (e) => {
        const apiUrl = `${config.Url}api/admin/updatePropertyStatus`;
        let formData = JSON.stringify({
            "property_id": params.id,
            "status": id
        });
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    if (id == 1) {
                        toast.success("Property Approved Successfully", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                    else {
                        toast.success("Property Rejected Successfully", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
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
    useEffect(() => {
        if (params.id != "0") {
            getUserInfo(params.id);
        }
    }, [])
    const checkPropertyDetail = (e) => {
        history("/admin/Property-details/" + params.id);
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
                if (data.status === 200) {
                    setMyPropertyList(data.property);
                    SetRoomsInfo(data.rooms[0]);
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
        <ToastContainer />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
            ></link>
            <div class="adminTitle">
                <h4 class="content-title  backitem">
                    Manage Property {" > "} Property Details {" > "} More Details
                    <span><a href="/admin/manage-property"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>

            <div class="adminCard statusview fm-area">
                <div class="profileform p-0">
                    <div class="profileform px-2 py-3 mt-4">
                        <div class="verHead">
                            <h4>Property Details</h4>
                        </div>
                        <div class="row g-4 mt-2">
                            <div class="form-group">
                                <div class="imgupblocks">
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto1 ?
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto1 && `${config.ImageUrl}images/Property/` + MyPropertyList[0].propertyphoto1} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        :
                                        null}
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto2 ?
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto2 && `${config.ImageUrl}images/Property/` + MyPropertyList[0].propertyphoto2} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        : null}
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto3 ?
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto3 && `${config.ImageUrl}images/Property/` + MyPropertyList[0].propertyphoto3} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        : null}
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto4 ?
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto4 && `${config.ImageUrl}images/Property/` + MyPropertyList[0].propertyphoto4} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        : null}
                                    {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto5 ?
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].propertyphoto5 && `${config.ImageUrl}images/Property/` + MyPropertyList[0].propertyphoto5} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        : null}
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
                                    <label>Total Rooms</label>
                                    <input type="text" name="pname" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].totalrooms != 0 ? master.NumbersUpto15.find(e => e.id == MyPropertyList[0].totalrooms)?.name : ""} placeholder="" readonly />
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
                        </div>

                        {RoomsInfo && RoomsInfo.length > 0 && RoomsInfo.map((result, index) => (
                            <>
                                <div class="verHead mt-4">
                                    <h4>{(index + 1)}. Room detail</h4>
                                </div>

                                <div class="row g-4 mt-2">
                                    <div class="form-group">
                                        <div class="imgupblocks">
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {result.roomphoto1 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + result.roomphoto1} alt="Room pic" class="img-fluid" />
                                                    }
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {result.roomphoto2 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + result.roomphoto2} alt="Room pic" class="img-fluid" />
                                                    }
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {result.roomphoto3 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + result.roomphoto3} alt="Room pic" class="img-fluid" />
                                                    }
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {result.roomphoto4 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + result.roomphoto4} alt="Room pic" class="img-fluid" />
                                                    }
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {result.roomphoto5 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + result.roomphoto5} alt="Room pic" class="img-fluid" />
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Room Name </label>
                                            <input type="text" value={result && result.roomname} readonly placeholder="#101 Twin Bedroom" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Room type </label>
                                            <input type="text" value={result && result.roomtype != 0 ? master.HouseType.find(e => e.id == result.roomtype)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Room size (Sq ft) </label>
                                            <input type="text" value={result && result.roomsize != 0 ? master.ApartmentSize.find(e => e.id == result.roomsize)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>No. of Bed </label>
                                            <input type="text" value={result && result.noOfBed != 0 ? master.NumbersUpto15.find(e => e.id == result.noOfBed)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Bedroom Type </label>
                                            <input type="text" value={result && result.bedroomtype != 0 ? master.BedroomType.find(e => e.id == result.bedroomtype)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Furniture </label>
                                            <input type="text" value={result && result.furniture != 0 ? master.Furniture.find(e => e.id == result.furniture)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Room rent ($) </label>
                                            <input type="text" value={result && result.roomrent} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Current status of rooms </label>
                                            <input type="text" value={result && result.currentstatus != 0 ? master.AvailableNotAvailable.find(e => e.id == result.currentstatus)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Pet friendly</label>
                                            <input type="text" value={result && result.petfriendly != 0 ? master.YesNo.find(e => e.id == result.petfriendly)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Dietary preferences</label>
                                            <input type="text" value={result && result.dietarypreference != 0 ? master.DietPreference.find(e => e.id == result.dietarypreference)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Smoking</label>
                                            <input type="text" value={result && result.smoking != 0 ? master.AllowNotAllow.find(e => e.id == result.smoking)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Drinking</label>
                                            <input type="text" value={result && result.drinking != 0 ? master.AllowNotAllow.find(e => e.id == result.drinking)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Cannabis</label>
                                            <input type="text" value={result && result.cannabits != 0 ? master.AllowNotAllow.find(e => e.id == result.cannabits)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Age group preference </label>
                                            <input type="text" value={result && result.agegrouppreference != 0 ? master.AgePreference.find(e => e.id == result.agegrouppreference)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Community Type</label>
                                            <input type="text" value={result && result.communitytype != 0 ? master.CommunityType.find(e => e.id == result.communitytype)?.name : "---"} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Max. Residents </label>
                                            <input type="text" value={result && result.maxresidants != 0 ? master.NumbersUpto15.find(e => e.id == result.maxresidants)?.name : "---"} readonly />
                                        </div>
                                    </div>

                                </div>
                            </>
                        ))}
                        <div class="">
                            <div class="verHead mt-4 mt-4 mt-4">
                                <h4>Location</h4>
                            </div>

                            <div class="fm-area1">
                                <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Country </label>
                                            <input type="text" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].country != 0 ? master.Country.find(e => e.id == MyPropertyList[0].country)?.name : ""} placeholder="West 109th Street Ontario" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Province </label>
                                            {/* <input type="text" name="province" value={propertyValues.province} placeholder="Province" /> */}
                                            <input type="text" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].province} placeholder="West 109th Street Ontario" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Address </label>
                                            <input type="text" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].address} placeholder="West 109th Street Ontario" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Landmark </label>
                                            <input type="text" name="landmark" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].landmark} placeholder="Morningside Park" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Zip Code </label>
                                            <input type="text" name="zipcode" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].zipcode} placeholder="K2H 5B6" />
                                        </div>
                                    </div>
                                    <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label>Mark on google </label>
                                            <input type="text" name="markongoogle" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].markongoogle} placeholder="Enter google map link" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].cancellantionpolicy == 2 ? 
                                    <div class="cancellation">
                                        <h5>Cancellation policy: Non-refundable</h5>
                                        <div>
                                            <img src={require('./../../img/icons/close-c.png')} class="img-fluid" alt="Cancellation" />
                                            <div>
                                                <label>After booking</label>
                                                <p class="m-0">No refund</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null }
                             <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label>Descriptopm </label>
                                            <textarea type="text" value={MyPropertyList && MyPropertyList.length > 0 && MyPropertyList[0].description} rows={6} />
                                        </div>
                                    </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="buttonGrp text-center mt-4">
                                <button class="btn btn-danger" onClick={updatePropertyStatus(0)}>Reject</button>
                                <button class="btn btn-secondary ms-2" onClick={updatePropertyStatus(1)}>Approve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal id="contacthost" show={connectWithHost} onHide={() => SetConnectWIthHost(false)} className="modal-xl">
                <div>
                    <div class="">
                        <div class="closeBtn" onClick={() => SetConnectWIthHost(false)}>
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
                            <button class="btn btn-secondary me-2" onClick={() => SetConnectWIthHost(false)}>Cancel</button>
                            <button class="btn btn-primary" onClick={() => SetConnectWIthHost(false)}>Send</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ManagePropertyView;