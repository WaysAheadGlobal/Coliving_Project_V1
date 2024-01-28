import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';

function AllUsers(props) {
    return (
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
                                        <th class="text-center">Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.currentRecords.length > 0 && props.currentRecords.map((user, index) => (
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
                                                {user.email}
                                            </td>
                                            <td class="text-center">
                                                {user.mobileNo}
                                            </td>
                                            <td class="text-center">
                                                {user.communityType == "0" ? "---" : master.CommunityType.find(e => e.id == user.communityType).name}
                                            </td>
                                            <td class="text-center">
                                                {user.province}
                                            </td>
                                            <td class="text-center">
                                                {user.status == 1 ? "Approved" : "Pending"}
                                            </td>
                                            <td class="text-center">
                                                <div class="tablebtngrp">
                                                    <button class="eye" onClick={props.HandleViewPage(2, user.user_id)}><i class="fa fa-regular fa-eye"></i></button>
                                                    <button class="delete" onClick={props.handleDeleteProfile(user.user_id)}><i class="fa fa-regular fa-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-center">
                            <div class="pagi">
                              
                                {props.nPages > 1 && props.currentPage > 1 ?
                                <div class="prev" onClick={props.SetPage(props.currentPage - 1)}><i class="fa fa-solid fa-angles-left"></i> <label>Previous</label></div>
                                : null}
                                <div class="nums">
                                {(function (rows, i, len) {
                                    while (++i <= len) {
                                    rows.push(<a onClick={props.SetPage(i)} class={i == props.currentPage ? "active": ""} href="javascript:void(0)">{i}</a>)
                                    }
                                    return rows;
                                })([], 0, props.nPages)}
                                    {/* <a class="active" href="javascript:void(0)">1</a>
                                    <a href="javascript:void(0)">2</a>
                                    <a href="javascript:void(0)">3</a>
                                    <a href="javascript:void(0)">4</a> */}
                                </div>
                                {props.nPages > props.currentPage ?
                                <div class="next" onClick={props.SetPage(props.currentPage + 1)}><label>Next</label> <i class="fa fa-solid fa-angles-right"></i></div>
                                : null}
                                
                            </div>
                        </div>
                    </div>
    )
}

export default AllUsers;