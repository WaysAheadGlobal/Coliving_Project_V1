import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function UserProfileView(props) {
    const [showIdProof, SetShowIDProof] = useState(false);
    const [showUniversityID, SetshowUniversityID] = useState(false);
    const ShowHideIdProof = (id) => (e) => {
        if (id == 1) {
            SetShowIDProof(true);
        }
        else {
            SetShowIDProof(false);
        }
    }
    const ShowHideUniversityId = (id) => (e) => {
        if (id == 1) {
            SetshowUniversityID(true);
        }
        else {
            SetshowUniversityID(false);
        }
    }
    return (
        <>
            {console.log('asd', props.Detail)}
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
                                                <img src={`${config.ImageUrl}images/users/` + props.CurrentUserInfo.profilePic} class="img-fluid" alt="Manage User Icon" />
                                                :
                                                <img src={require('../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" />}
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
                                <input type="text" name="dob" value={props.Detail && props.Detail.DateOfBirth} placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Gender</label>
                                <input type="text" name="gender" value={props.Detail && props.Detail.gender > 0 && (master.Gender.find(e => e.id == props.Detail.gender)?.name)} placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                            <div class="form-group statuslabel">
                                <label>ID proof</label>
                                <input type="text" name="idproof" value={props.Detail && props.Detail.idproof} placeholder="" readonly />
                                <div class="eyestatus">
                                    <div class="viewid" onClick={ShowHideIdProof(1)}>
                                        <i class="fa fa-solid fa-eye"></i>
                                    </div>
                                    {(props.IdDocument && props.IdDocument.status == 1) || (props.Detail && props.Detail.idproofstatus == 1)?
                                    <div class="badge">
                                        <img src={require('../../img/icons/bluecheck.png')} class="img-fluid" alt="Check Img" />
                                        <label>Verified</label>
                                    </div>
                                    :
                                    null }
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-6 col-sm-12 col-12">
                            <div class="form-group">
                                <label>Permanent Address</label>
                                <input type="text" name="address" value={props.CurrentUserInfo && (props.CurrentUserInfo.address + ', ' + props.CurrentUserInfo.city + ', ' + props.CurrentUserInfo.province)} placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-6 col-sm-12 col-12">
                            <div class="form-group">
                                <label>University Details</label>
                                <input type="text" name="university" value={props.Detail && props.Detail.universitydetails} placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                            <div class="form-group statuslabel">
                                <label>University ID Proof</label>
                                <input type="text" name="idproof" value={props.Detail && props.Detail.universityidproof} placeholder="" readonly />
                                <div class="eyestatus">
                                    <div class="viewid" onClick={ShowHideUniversityId(1)}>
                                        <i class="fa fa-solid fa-eye"></i>
                                    </div>
                                    {(props.UnivrsityIDDocument && props.UnivrsityIDDocument.status == 1) || (props.Detail && props.Detail.universityidstatus == 1)?
                                    <div class="badge">
                                        <img src={require('../../img/icons/bluecheck.png')} class="img-fluid" alt="Check Img" />
                                        <label>Verified</label>
                                    </div>
                                    :
                                    null }
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-start">
                            <div class="form-group">
                                <button class="btn btn-secondary text-uppercase" onClick={props.HandleViewPage(3, props.currentUserId)}>View more Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showIdProof} onHide={ShowHideIdProof(0)} className='modal-lg'>
                <div class="">
                    <div class="modal-content">
                        <div class="idmodal">
                            <div class="closebtn" onClick={ShowHideIdProof(0)}>
                                <i class="fa fa-solid fa-circle-xmark"></i>
                            </div>
                            <div class="adminTitle">
                                <h4 class="content-title justify-content-center backitem">
                                    <span>Id Proof</span>
                                </h4>
                            </div>
                            <div class="idpreview">
                                <img src={props.Detail && props.Detail.idproof != '' ? `${config.Url}images/documents/` + props.Detail.idproof : ''} class="img-fluid" alt="ID Image missing" />
                                    {/* <div class="magnifier">
                                        <i class="fa fa-solid fa-magnifying-glass-plus"></i>
                                    </div> */}
                            </div>
                            <div class="selectionbtn text-center">
                                <button class="btn btn-default" style={{marginRight: '15px'}} onClick={props.updateIDProofStatus(1)}>Approve</button>
                                <button class="btn btn-primary" onClick={props.updateIDProofStatus(0)}>Disapprove</button>
                            </div>
                            <div class="fm-area py-5 px-0">
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Remarks</label>
                                        <textarea name="remarks" value={props.IdDocument.remarks} onChange={props.handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3">
                                    <div class="form-group">
                                        <button class="btn btn-primary" onClick={props.updateIdProof}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal show={showUniversityID} onHide={ShowHideUniversityId(0)} className='modal-lg'>
                <div class="">
                    <div class="modal-content">
                        <div class="idmodal">
                            <div class="closebtn" onClick={ShowHideUniversityId(0)}>
                                <i class="fa fa-solid fa-circle-xmark"></i>
                            </div>
                            <div class="adminTitle">
                                <h4 class="content-title justify-content-center backitem">
                                    <span>University Id Proof</span>
                                </h4>
                            </div>
                            <div class="idpreview">
                                <img src={props.Detail && props.Detail.universityidproof != '' ? `${config.Url}images/documents/` + props.Detail.universityidproof : ''} class="img-fluid" alt="ID Image missing" />
                                    <div class="magnifier">
                                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                                    </div>
                            </div>
                            <div class="selectionbtn text-center">
                                <button class="btn btn-secondary" onClick={props.updateUniversityProofStatus(1)}>Approve</button>
                                <button class="btn btn-primary" onClick={props.updateUniversityProofStatus(0)}>Disapprove</button>
                            </div>
                            <div class="fm-area py-5 px-0">
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Remarks</label>
                                        <textarea name="remarks" value={props.UnivrsityIDDocument.remarks} onChange={props.handleUniversityInputChange}></textarea>
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3">
                                    <div class="form-group">
                                        <button class="btn btn-primary" onClick={props.updateUniversityProof}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default UserProfileView;