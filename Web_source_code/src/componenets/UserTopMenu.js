import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const UserTopMenu = () => {
    const [userinfo, setUserinfo] = useState('');
    const [userType, setUserType] = useState(0);


    useEffect(()=> {
		if(localStorage.getItem("username") != null){
			setUserinfo(localStorage.getItem("username"));
		}
        if(localStorage.getItem("userType") != null){
            setUserType(localStorage.getItem("username"));
        }
	})
    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-5">
                            <div class="logo">
                                <a href="/">
                                    <img src={require('./../../src/img/logo.png')} alt="Co-living logo missing" title="Co-living" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-2 col-sm-2 col-2">
                            <div class="mobileSearch">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div class="headSearch">
                                <input type="text" name="search" placeholder="Search For Coliving" />
                                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-5 d-flex justify-content-end">
                            <div class="mblemnu">
                                <div class="mobileMenuBtn">
                                    <i class="fa fa-solid fa-bars hamburger"></i>
                                    <i class="fa fa-solid fa-xmark closeham"></i>
                                </div>
                                <div class="postuser">
                                    <i class="fa fa-solid  fa-circle-user"></i>
                                    <span>{userinfo}</span>
                                    <i class="fa fa-solid fa-caret-down"></i>
                                    <div class="userdropdown">
                                        <ul>
                                            {userType == "1" ? 
                                            <>
                                                <li class=""><a href="/user/profile">Profile</a></li>
                                                <li><a href="/user/my-stay">My Stay</a></li>
                                                <li><a href="/user/events">Event</a></li>
                                                <li><a href="/user/meal-plan">Meal Plan</a></li>
                                                <li><a href="/user/messages">Message</a></li>
                                                <li><a href="/user/wishlist">Wishlist</a></li>
                                                <li><a href="/user/notifications">Notification</a></li>
                                                <li><a href="/logout">Logout</a></li>
                                            </> 
                                            :
                                            <>
                                                <li class=""><a href="/owner/profile">Profile</a></li>
                                                <li><a href="/owner/stay-request">Stay Request</a></li>
                                                <li><a href="/owner/events">Event</a></li>
                                                <li><a href="/owner/meals">Meals</a></li>
                                                <li><a href="/owner/property">Property</a></li>
                                                <li><a href="/owner/messages">Message</a></li>
                                                <li><a href="/owner/payments">Payments</a></li>
                                                <li><a href="/owner/notifications">Notification</a></li>
                                                <li><a href="/logout">Logout</a></li>
                                            </>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}
export default UserTopMenu;