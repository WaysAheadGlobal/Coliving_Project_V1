import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams  } from 'react-router-dom';

function BookingView() {
    const params = useParams();
    const [CurrentUserInfo, SetCurrentUserInfo] = useState({});
    const [CurrentUserDetail, SetCurrentUserDetail] = useState({});
    const [PropertyInfo, SetPropertyInfo] = useState({});
    const [StayUsersList, SetStayUsersList] = useState([]);

    useEffect(()=> {
        if(params.id != "0"){
            getUserInfo(params.id);
        }
    }, [])
    function getUserInfo(booking_id) {
        const apiUrl = `${config.Url}api/admin/getUserInfoForPropertyOwnerForAdmin`;
        let formData = JSON.stringify({
            "booking_id": booking_id
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
                    SetCurrentUserInfo(data.res);
                    SetCurrentUserDetail(data.detail);
                    SetPropertyInfo(data.propInfo);
                    SetStayUsersList(data.usersInfo);
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

    const ApproveReject = (id) => (e) => {
        const apiUrl = `${config.Url}api/user/ApproveRejectStayRequest`;
        let formData = JSON.stringify({
            "booking_id": params.id,
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
                    SetCurrentUserInfo(data.res);
                    SetCurrentUserDetail(data.detail);
                    SetPropertyInfo(data.propInfo);
                    SetStayUsersList(data.usersInfo);
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
                    <span>Booking Requests View</span>
                    <span><a href="/admin/booking-request"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>
            <div class="adminCard stayview">
                <div class="fm-area editmeal addevent profileform">
                    <div class="row g-4">
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="userimglg">
                                {PropertyInfo.propertyphoto1 == null || PropertyInfo.propertyphoto1 == "" ? null :
                                <img src={`${config.ImageUrl}images/property/` + PropertyInfo.propertyphoto1} class="img-fluid" alt="User uploaded image" />
                                }
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.Fullname} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Email Id</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.email} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Mobile No.</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.mobileNo} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Gender</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.gender == "0" ? "---" : master.Gender.find(e => e.id == CurrentUserDetail.gender)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Marital Status</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.maritalstatus == "0" ? "---" : master.MaritalStatus.find(e => e.id == CurrentUserDetail.maritalstatus)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.city} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Province</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.province} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Zip Code</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.ZipCode} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Country</label>
                                    <input type="text" name="propname" value={CurrentUserInfo.country == "0" ? "---" : master.Country.find(e => e.id == CurrentUserInfo.country)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Apartment Name</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.propertyname} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.roomname} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Monthly Rent</label>
                                    <input type="text" name="propname" value={PropertyInfo && "$"+ PropertyInfo.monthlyrent} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move In</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.bookingfrom} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move Out</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.bookingto} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.roomtype == "0" ? "---" : master.RoomType.find(e => e.id == PropertyInfo.roomtype)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Location</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.province} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="buttonGrp text-center mt-4">
                                    <button class="btn btn-secondary text-uppercase">reject</button>
                                    <button class="btn btn-primary text-uppercase">Approve</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingView;