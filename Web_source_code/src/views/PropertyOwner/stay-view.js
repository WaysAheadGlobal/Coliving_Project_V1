import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams  } from 'react-router-dom';

function StayView() {

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
        const apiUrl = `${config.Url}api/user/getUserInfoForPropertyOwner`;
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
                console.log(data);
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
        <div class="content-area proppage">
            <h4 class="content-title backitem">
                <span>Stay request View</span>
                <span><a href="/owner/stay-request"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
            </h4>
            <div class="fm-area stayview">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal detail</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Apartment detail</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="stayuser-tab" data-bs-toggle="tab" data-bs-target="#stayuser" type="button" role="tab" aria-controls="stayuser" aria-selected="false">Current Stay Users ({StayUsersList && StayUsersList.length})</button>
                    </li>
                </ul>
                <div class="tab-content mt-5" id="myTabContent">
                    <div class="tab-pane profileform p-0 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row g-4">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="userimglg">
                                {CurrentUserInfo.profilePic == null || CurrentUserInfo.profilePic == "" ? null :
                                <img src={`${config.ImageUrl}images/users/` + CurrentUserInfo.profilePic} class="img-fluid" alt="User uploaded image" />
                                }
                                </div>
                            </div>
                            <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 ps-xxl-5 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-2 ps-2 ">
                                
                            </div>
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
                                    <label>Date of Birth</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.DateOfBirth} readonly />
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
                                    <label>Address</label>
                                    <input type="text" name="propname" value={CurrentUserInfo && CurrentUserInfo.address} readonly />
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
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>ID Proof</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.idproof} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>University Detail</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.universitydetails} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>University Id Proof</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.universityidproof} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Language Spoken</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.language} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Sleeping Habits</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.sleepinghabits_from} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Dietary Preferences</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.dietarypreference} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Willing to share household chores</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.householdchores} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Cooking</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.doyoucook} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Smoking</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.smoke} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Drinking</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.drink} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Use of cannabis</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name.cannabits} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <label>Reason for moving</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.telluswhymoving} readonly />
                                </div>
                            </div>
                            <h4>Apartment Preferences</h4>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Size of room</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.sizeofroom == "0" ? "---" : master.RoomType.find(e => e.id == CurrentUserDetail.sizeofroom)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Bedroom</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.bedroom == "0" ? "---" : master.NumbersUpto15.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Bathroom</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.bathroom == "0" ? "---" : master.NumbersUpto15.find(e => e.id == CurrentUserDetail.bathroom)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Closet Inside</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.closetinside == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.closetinside)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Full Furnished</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.fullyfurnished == "0" ? "---" : master.Furniture.find(e => e.id == CurrentUserDetail.fullyfurnished)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>How many Fans</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.howmanyfan == "0" ? "---" : master.NumbersUpto15.find(e => e.id == CurrentUserDetail.howmanyfan)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>How many Lights</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.howmanylights == "0" ? "---" : master.NumbersUpto15.find(e => e.id == CurrentUserDetail.howmanylights)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Outside Locks</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.outsidelocks == "0" ? "---" : master.LockType.find(e => e.id == CurrentUserDetail.outsidelocks)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Parking</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.parking == "0" ? "---" : master.Parking.find(e => e.id == CurrentUserDetail.parking)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Back patio</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.backpatio == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.backpatio)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Front patio</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.frontpatio == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.frontpatio)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>EV charger available</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.evchargeravailable == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.evchargeravailable)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Swimming pool</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.swimmingpool == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.swimmingpool)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Budget</label>
                                    <input type="text" name="propname" value={CurrentUserDetail && CurrentUserDetail.budget} readonly />
                                </div>
                            </div>
                            <h4>Roommate Preferences</h4>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Language preferences</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.languagepreference == "0" ? "---" : master.LanguagePreference.find(e => e.id == CurrentUserDetail.languagepreference)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Co-ed</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.coed == "0" ? "---" : master.CoEdTypes.find(e => e.id == CurrentUserDetail.coed)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Age group preference</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.agegrouppreference == "0" ? "---" : master.AgePreference.find(e => e.id == CurrentUserDetail.agegrouppreference)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Communication</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.communication == "0" ? "---" : master.CommunicationType.find(e => e.id == CurrentUserDetail.communication)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Dietary preferences</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_dietarypreference == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_dietarypreference)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Willing to share household chores</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_sharehouseholdchores == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_sharehouseholdchores)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Drinking comfort level</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_drinkingcomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_drinkingcomfort)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Smoking comfort level</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_smokingcomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_smokingcomfort)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label>Cannabis comfort level</label>
                                    <input type="text" name="propname" value={CurrentUserDetail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == CurrentUserDetail.roommate_cannabitscomfort)?.name} readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane  profileform p-0 fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row g-4">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="userimglg">
                                {PropertyInfo.propertyphoto1 == null || PropertyInfo.propertyphoto1 == "" ? null :
                                <img src={`${config.ImageUrl}images/property/` + PropertyInfo.propertyphoto1} class="img-fluid" alt="User uploaded image" />
                                }
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Apartment Name</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.propertyname} placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.roomname} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Monthly Rent</label>
                                    <input type="text" name="propname" value={PropertyInfo && "$"+ PropertyInfo.monthlyrent} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Security Deposit</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.securitydeposit} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move In</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.bookingfrom} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move Out</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.bookingto} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="propname" value={PropertyInfo && PropertyInfo.roomtype == "0" ? "---" : master.RoomType.find(e => e.id == PropertyInfo.roomtype)?.name} readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
                    <div class="tab-pane  profileform p-0 fade" id="stayuser" role="tabpanel" aria-labelledby="stayuser-tab">
                        <div class="row g-4">
                        <div class="table-layout1">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center">image</th>
                                        <th class="text-center">User name</th>
                                        <th class="text-center">Move In</th>
                                        <th class="text-center">Move Out</th>
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Language</th>
                                        <th class="text-center">Co-Ed</th>
                                        <th class="text-center">Age Preference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {StayUsersList && StayUsersList.length > 0 && StayUsersList.map((user, index) => (
                                        <tr key={index}>
                                            <td class="text-center">
                                                <div class="tbleimg">
                                                    {(user.profilePic != '') && (user.profilePic != null) ?
                                                    <img src={`${config.ImageUrl}images/users/` + user.profilePic} class="img-fluid" alt="Manage User Icon" />
                                                    :
                                                    <img src={require('../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" /> }
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                {user.Fullname}
                                            </td>
                                            <td class="text-center">
                                                {user.bookingfrom}
                                            </td>
                                            <td class="text-center">
                                                {user.bookingto}
                                            </td>
                                            <td class="text-center">
                                                {user.isbookingconfirmed == "1" ? "Confirmed" : "Waiting List"}
                                            </td>
                                            <td class="text-center">
                                                {user.languagepreference == "0" ? "---" : master.LanguagePreference.find(e => e.id == user.languagepreference)?.name}
                                            </td>
                                            <td class="text-center">
                                                {user.coed == "0" ? "---" : master.CoEdTypes.find(e => e.id == user.coed)?.name}
                                            </td>
                                            <td class="text-center">
                                                {user.agegrouppreference == "0" ? "---" : master.AgePreference.find(e => e.id == user.agegrouppreference)?.name}
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayView;