import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';

function UserProfileView(props) {
    return (
        <div class="adminCard statusview fm-area">
            <div class="table-layout1">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-center">image</th>
                                <th class="text-center">User name</th>
                                <th class="text-center">Email ID</th>
                                <th class="text-center">Mobile Number</th>
                                <th class="text-center">community</th>
                                <th class="text-center">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <div class="tbleimg">
                                    {props.CurrentUserInfo && props.CurrentUserInfo.profilePic != '' ?
                                                    <img src={`${config.Url}images/users/` + props.CurrentUserInfo.profilePic} class="img-fluid" alt="Manage User Icon" />
                                                    :
                                                    <img src={require('../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" /> }
                                    </div>
                                </td>
                                <td class="text-center">
                                    {props.CurrentUserInfo && props.CurrentUserInfo.Fullname}
                                </td>
                                <td class="text-center">
                                {props.CurrentUserInfo && props.CurrentUserInfo.email}
                                </td>
                                <td class="text-center">
                                {props.CurrentUserInfo && props.CurrentUserInfo.mobileNo}
                                </td>
                                <td class="text-center">
                                {props.CurrentUserInfo.communityType == "0" ? "---" : master.CommunityType.find(e => e.id == props.CurrentUserInfo.communityType)?.name}
                                </td>
                                <td class="text-center">
                                {props.CurrentUserInfo && props.CurrentUserInfo.province}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="profileform px-2 py-3 mt-4">
                <div class="verHead">
                    <h4>Verification Details</h4>
                </div>
                <div class="row g-4 mt-2">
                    <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Date of Birth</label>
                            <input type="text" name="dob" value={''} placeholder="" readonly />
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Gender</label>
                            <input type="text" name="gender" value="Male" placeholder="" readonly />
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div class="form-group statuslabel">
                            <label>ID proof</label>
                            <input type="text" name="idproof" value="driverslicense.jpg" placeholder="" readonly />
                            <div class="eyestatus">
                                <div class="viewid" data-bs-toggle="modal" data-bs-target="#viewID">
                                    <i class="fa fa-solid fa-eye"></i>
                                </div>
                                <div class="badge">
                                    <img src={require('../../img/icons/bluecheck.png')} class="img-fluid" alt="Check Img" />
                                    <label>Verified</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Permanent Address</label>
                            <input type="text" name="address" value="Idcard.jpg" placeholder="" readonly />
                        </div>
                    </div>
                    <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>University Details</label>
                            <input type="text" name="university" value="Male" placeholder="" readonly />
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div class="form-group statuslabel">
                            <label>University ID Proof</label>
                            <input type="text" name="idproof" value="Idcard.jpg" placeholder="" readonly />
                            <div class="eyestatus">
                                <div class="viewid">
                                    <i class="fa fa-solid fa-eye"></i>
                                </div>
                                <div class="badge">
                                    <img src={require('../../img/icons/bluecheck.png')} class="img-fluid" alt="Check Img" />
                                    <label>Verified</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-start">
                        <div class="form-group">
                            <button class="btn btn-secondary text-uppercase">View more Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileView;