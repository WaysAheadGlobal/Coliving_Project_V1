import React, { useEffect, useState, useRef  } from "react";
import master from '../../data/masterData.json'
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function AdminUsersMoreDetails(props) {
    
    return(
        <>
        <ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
            <div class="content-area">
                
                <div class="profileform">
                <h4>Personal Details</h4>
                    <div class="row g-4 mt-3">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Language Spoken</label>
                                    <input type="text" name="email" id="email" value={props.Detail.language}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Sleeping Habits</label>
                                    <input type="text" name="email" id="email"  value={(props.Detail && props.Detail.sleepinghabits_from == 0 ? "---" : master.SleepingHabitsTime.find(e => e.id == props.Detail.sleepinghabits_from).name) + ' - ' + (props.Detail && props.Detail.sleepinghabits_to == 0 ? "---" : master.SleepingHabitsTime.find(e => e.id == props.Detail.sleepinghabits_to).name)} readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Dietary Preference</label>
                                    <input type="text" name="email" id="email" value={props.Detail.dietarypreference == "0" ? "---" : master.DietPreference.find(e => e.id == props.Detail.dietarypreference).name}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Willing to share household chores</label>
                                    <input type="text" name="email" id="email" value={props.Detail.householdchores == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.householdchores).name} readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Cooking</label>
                                    <input type="text" name="email" id="email" value={props.Detail.doyoucook == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.doyoucook).name}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Smoking</label>
                                    <input type="text" name="email" id="email" value={props.Detail.smoke == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.smoke).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Drinking</label>
                                    <input type="text" name="email" value={props.Detail.drink == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.drink).name}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Use of cannabis</label>
                                    <input type="text" name="email" value={props.Detail.cannabits == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.cannabits).name}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Reason of moving</label>
                                    <textarea type="text" name="email" className="form-control" style={{'rows': 5}} value={props.Detail.telluswhymoving} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <h4>Apartment Preferences</h4>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Size of room</label>
                                    <input type="text" name="email" value={props.Detail.sizeofroom == "0" ? "---" : master.ApartmentSize.find(e => e.id == props.Detail.sizeofroom).name}  placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Bedroom</label>
                                    <input type="text" name="email"  value={props.Detail.bedroom == "0" ? "---" : master.NumbersUpto15.find(e => e.id == props.Detail.bedroom).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Bathroom</label>
                                    <input type="text" name="email" value={props.Detail.bathroom == "0" ? "---" : master.NumbersUpto15.find(e => e.id == props.Detail.bathroom).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Closet Inside</label>
                                    <input type="text" name="email" value={props.Detail.closetinside == "0" ? "---" : master.NumbersUpto15.find(e => e.id == props.Detail.closetinside).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Full Furnished</label>
                                    <input type="text" name="email" value={props.Detail.fullyfurnished == "0" ? "---" : master.Furniture.find(e => e.id == props.Detail.fullyfurnished).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>How Many Fans</label>
                                    <input type="text" name="email" value={props.Detail.howmanyfan == "0" ? "---" : master.NumbersUpto15.find(e => e.id == props.Detail.howmanyfan).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>How many Lights</label>
                                    <input type="text" name="email" value={props.Detail.howmanylights == "0" ? "---" : master.NumbersUpto15.find(e => e.id == props.Detail.howmanylights).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Outside locks</label>
                                    <input type="text" name="email" value={props.Detail.outsidelocks == "0" ? "---" : master.LockType.find(e => e.id == props.Detail.outsidelocks).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Parking</label>
                                    <input type="text" name="email" value={props.Detail.parking == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.parking).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Back patio</label>
                                    <input type="text" name="email" value={props.Detail.backpatio == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.backpatio).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Front patio</label>
                                    <input type="text" name="email" value={props.Detail.frontpatio == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.frontpatio).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>EV charger available</label>
                                    <input type="text" name="email" value={props.Detail.evchargeravailable == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.evchargeravailable).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Swimming pool</label>
                                    <input type="text" name="email" value={props.Detail.swimmingpool == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.swimmingpool).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Budget</label>
                                    <input type="text" name="email" value={props.Detail.budget} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <h4>Roommate Preferences</h4>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Language preferences</label>
                                    <input type="text" name="email" value={props.Detail.languagepreference == "0" ? "---" : master.LanguagePreference.find(e => e.id == props.Detail.languagepreference).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Co-ed</label>
                                    <input type="text" name="email" value={props.Detail.coed == "0" ? "---" : master.CoEdTypes.find(e => e.id == props.Detail.coed).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Age group preference</label>
                                    <input type="text" name="email" value={props.Detail.agegrouppreference == "0" ? "---" : master.AgePreference.find(e => e.id == props.Detail.agegrouppreference).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Communication</label>
                                    <input type="text" name="email" value={props.Detail.communication == "0" ? "---" : master.CommunicationType.find(e => e.id == props.Detail.communication).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Dietary preferences</label>
                                    <input type="text" name="email" value={props.Detail.roommate_dietarypreference == "0" ? "---" : master.DietPreference.find(e => e.id == props.Detail.roommate_dietarypreference).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Willing to share household chores</label>
                                    <input type="text" name="email" value={props.Detail.roommate_sharehouseholdchores == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.roommate_sharehouseholdchores).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Drinking comfort level</label>
                                    <input type="text" name="email" value={props.Detail.roommate_drinkingcomfort == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.roommate_drinkingcomfort).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Smoking comfort level</label>
                                    <input type="text" name="email" value={props.Detail.roommate_smokingcomfort == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.roommate_smokingcomfort).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Cannabis comfort level</label>
                                    <input type="text" name="email" value={props.Detail.roommate_cannabitscomfort == "0" ? "---" : master.YesNo.find(e => e.id == props.Detail.roommate_cannabitscomfort).name} placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="buttonGrp text-center mt-4">
                                <button class="btn btn-danger" onClick={props.updateUserStatus(0)}>Reject</button>
                                <button class="btn btn-secondary ms-2" onClick={props.updateUserStatus(1)}>Approve</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsersMoreDetails;