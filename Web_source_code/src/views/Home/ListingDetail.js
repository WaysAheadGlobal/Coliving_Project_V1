import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import master from '../../data/masterData.json'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListItem from './ListingItem';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ListingDetail = () => {
    const [PropertyInfo, SetPropertyListing] = useState({});
    const [RoomInfo, SetRoomInfo] = useState([]);
    const params = useParams();
    const history = useNavigate();
    useEffect(() => {
        if (params.id != "0") {
            getpropertyInfo();
        }
        else {
            history("/");
        }
    }, []);
    function getpropertyInfo() {
        let formData = JSON.stringify({
            "property_id": params.id
        });
        const apiUrl = `${config.Url}api/listing/getListingDetail`;
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
                    SetPropertyListing(data.listing);
                    SetRoomInfo(data.roominfo);
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
        <section class="page articledesc padd80 mt-5" id="photos">
            {console.log('PropertyInfo', RoomInfo)}
            <div class="container">
                <div class="artical-gal">
                    <div class="row g-3">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="artImgGal">
                                <img src={`${config.Url}images/Property/` + PropertyInfo.propertyphoto1} alt="Article img" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="row g-3">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="artImgGal">
                                        {PropertyInfo.propertyphoto2 ?
                                            <img src={`${config.Url}api/images/Property/` + PropertyInfo.propertyphoto2} alt="Article img" class="img-fluid" />
                                            : null}
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="artImgGal">
                                        {PropertyInfo.propertyphoto3 ?
                                            <img src={`${config.Url}api/images/Property/` + PropertyInfo.propertyphoto3} alt="Article img" class="img-fluid" />
                                            : null}
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="artImgGal">
                                        {PropertyInfo.propertyphoto4 ?
                                            <img src={`${config.Url}api/images/Property/` + PropertyInfo.propertyphoto4} alt="Article img" class="img-fluid" />
                                            : null}
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="artImgGal">
                                        {PropertyInfo.propertyphoto5 ?
                                            <img src={`${config.Url}api/images/Property/` + PropertyInfo.propertyphoto5} alt="Article img" class="img-fluid" />
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="#/" class="seeall">See all photos &nbsp;<i class="fa fa-solid fa-arrow-right"></i></a> */}
                </div>
                <ul class="detailMenu">
                    <li><a href="#photos">Photos</a></li>
                    <li><a href="#details">Details</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#roomtype">Room types</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#mealplan">Meal Plan</a></li>
                    <li><a href="#things">Things to Do</a></li>
                    <li><a href="#hostinfo">Host information</a></li>
                </ul>
                <div class="row mt-5">
                    <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="roomdetails">
                            <div class="cardsec artdet mb-4" id="details">
                                <div class="imgOvertext">
                                    <div class="d-flex align-items-center">
                                        <div class="rating me-2">
                                            <i class="fa fa-solid fa-star"></i>
                                            5.0
                                        </div>
                                        <div class="status d-flex">
                                            <div class="badge1  me-2">New</div>
                                            <div class="badge2">House</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="whishlist me-2">
                                            <i class="fa fa-regular fa-heart"></i>
                                        </div>
                                        Save
                                    </div>
                                </div>
                                <ul class="breadcrume">
                                    <li>{PropertyInfo && PropertyInfo.country && master.Country.find(e => e.id == PropertyInfo.country).name}</li>
                                    <li>{PropertyInfo.province}</li>
                                </ul>
                                <h2 class="maintitle mb-4">
                                    {PropertyInfo.propertyname}
                                </h2>
                                <div class="hostimg mb-4">
                                    <img src={require('./../../img/icons/user.png')} class="img-fluid" alt="Host" />
                                    <label>{PropertyInfo.host_name}</label>
                                    <div class="badge3 text-uppercase">
                                        <img src={require('./../../img/icons/verified.png')} class="img-fluid" alt="Verified" />
                                        Verified host
                                    </div>
                                </div>
                                <ul class="amiitems aminities1" id="aminities1">
                                    <li>
                                        <img src={require('./../../img/icons/bed.png')} class="img-fluid" alt="bedrooms" />
                                        {PropertyInfo.totalrooms} bedrooms
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/bath.png')} class="img-fluid" alt="Bathroom" />
                                        {PropertyInfo.bathroom} Bathroom
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/resi.png')} class="img-fluid" alt="Residents" />
                                        {PropertyInfo.bathroom} Residents
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/living.png')} class="img-fluid" alt="living room" />
                                        {PropertyInfo.bathroom} living room
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/calmnt.png')} class="img-fluid" alt="1 month min." />
                                        {PropertyInfo.bathroom} month min.
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/hme.png')} class="img-fluid" alt="687 sqft" />
                                        {/* {master.Country.find(e => e.id == PropertyInfo.country).name}sq ft */}
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/ktch.png')} class="img-fluid" alt="1 kitchen" />
                                        {PropertyInfo.kitchen} kitchen
                                    </li>
                                </ul>
                                <p class="mb-0">{PropertyInfo.description}</p>
                            </div>
                            <div class="cardsec mb-4" id="community">
                                <h4>Community</h4>
                                <p class="mb-0">Our residents are primarily local and international students and young professionals in their twenties who see their homes as a safe space to unwind from the daily grind. If you're looking for an environment where relaxation comes first, these are your people. And remember, some flatmate friendships last forever!</p>
                            </div>
                            <div class="cardsec mb-4" id="amenities">
                                <h4>Amenities</h4>
                                <ul class="amiitems">
                                    <li>
                                        <img src={require('./../../img/icons/tv.png')} class="img-fluid" alt="tv" />
                                        Cable TV
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/diswahser.png')} class="img-fluid" alt="Dishwasher" />
                                        Dishwasher
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/dryer.png')} class="img-fluid" alt="Dryer" />
                                        Dryer
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/wifi.png')} class="img-fluid" alt="Fast WiFi" />
                                        Fast WiFi
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/heater.png')} class="img-fluid" alt="Heating" />
                                        Heating
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/parking.png')} class="img-fluid" alt="Parking (free on street)" />
                                        Parking (free on street)
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/washer.png')} class="img-fluid" alt="Washer" />
                                        Washer
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/ac.png')} class="img-fluid" alt="Cooling" />
                                        Cooling
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/fridge.png')} class="img-fluid" alt="Refrigerator" />
                                        Refrigerator
                                    </li>
                                </ul>
                            </div>
                            <div class="cardsec mb-4" id="roomtype">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4 class="mb-0">Room types</h4>
                                    {/* <!-- <button class="btn btn-primary">Add your dates</button> --> */}
                                </div>
                                <div class="typelist mt-4">
                                    {RoomInfo && RoomInfo.length > 0 && RoomInfo.map((item, index) => (
                                        <div class="articleItem mb-4">
                                            <div class="row">
                                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                                                    <div class="aImg">
                                                        <img src={`${config.Url}images/Property/` + item.roomphoto1} alt="artical img" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                                    <div class="typerommi">
                                                        <div class="tleft">
                                                            <h3>{item.roomname}</h3>
                                                            <ul class="aminew">
                                                                <li>Shared room</li>
                                                                <li>74 sqft</li>
                                                                <li>Twin bed</li>
                                                                <li>Shared Bathroom</li>
                                                            </ul>
                                                            <ul class="aminew aminew1 mt-2">
                                                                <li>Full Furnished</li>
                                                                <li>WiFi</li>
                                                            </ul>
                                                        </div>
                                                        <div class="tright">
                                                            <div class="d-block">
                                                                <div class="artPrice mb-2">
                                                                    <span>${item.roomrent}</span> /month
                                                                </div>
                                                                <div class="availItem mb-3">
                                                                    Available now
                                                                </div>
                                                                <button class="btn btn-secondary" onclick="window.location.href='payment.html'">Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="cardsec mb-4" id="reviews">
                                <h4>Reviews</h4>
                                <div class="row">
                                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div class="ratingStar text-center">
                                            <span>5.0</span>
                                            <div class="star-rating">
                                                <span class="fa fa-solid fa-star" data-rating="1"></span>
                                                <span class="fa fa-solid fa-star" data-rating="2"></span>
                                                <span class="fa fa-solid fa-star" data-rating="3"></span>
                                                <span class="fa fa-solid fa-star" data-rating="4"></span>
                                                <span class="fa fa-solid fa-star" data-rating="5"></span>
                                                <input type="hidden" name="whatever1" class="rating-value" value="2.56" />
                                            </div>
                                            <label class="mt-2"><strong>Excellent!</strong></label>
                                            <p>Based on 45 reviews</p>
                                        </div>
                                    </div>
                                    <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ps-lg-4">
                                        <div>
                                            <div class="reviewItem">
                                                <div class="hostimg mb-3">
                                                    <img src={require('./../../img/user2.png')} class="img-fluid" alt="Host" />
                                                    <label>
                                                        Anusha H <br />
                                                        <small>Oct 2023</small>
                                                    </label>
                                                    <div class="rating">
                                                        <i class="fa fa-solid fa-star"></i>
                                                        5.0
                                                    </div>
                                                </div>
                                                <p>Easy living in a lively area of Ontario. Worth the cost! All amenities provided with reliable security and customer service. Just be aware that street parking in North End</p>
                                                <a href="#/" class="showmore">Show more</a>
                                            </div>
                                            <div class="reviewItem">
                                                <div class="hostimg mb-3">
                                                    <img src={require('./../../img/user2.png')} class="img-fluid" alt="Host" />
                                                    <label>
                                                        Anusha H <br />
                                                        <small>Oct 2023</small>
                                                    </label>
                                                    <div class="rating">
                                                        <i class="da fa-solid fa-star"></i>
                                                        5.0
                                                    </div>
                                                </div>
                                                <p>Easy living in a lively area of Ontario. Worth the cost! All amenities provided with reliable security and customer service. Just be aware that street parking in North End</p>
                                                <a href="#/" class="showmore">Show more</a>
                                            </div>
                                        </div>
                                        <button class="hostbtn mt-4">Show more reviews</button>
                                    </div>
                                </div>
                            </div>
                            <div class="cardsec mb-4" id="location">
                                <h4>Location</h4>
                                <h5>West 109th Street Ontario</h5>
                                <p>The exact location is provided after the booking is confirmed.</p>
                                <div class="maploc">
                                    <img src={require('./../../img/detailmap.png')} class="img-fluid" alt="Detail Map" />
                                </div>
                            </div>
                            <div class="cardsec mb-4" id="mealplan">
                                <h4>Meal Plan</h4>
                                <ul class="amiitems">
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Breakfast" />
                                        Breakfast
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Lunch" />
                                        Lunch
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Snack" />
                                        Snack
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Dinner" />
                                        Dinner
                                    </li>
                                </ul>
                            </div>
                            <div class="cardsec mb-4" id="things">
                                <h4>Things to know</h4>
                                <ul class="amiitems">
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Pet Friendly" />
                                        Pet Friendly
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Meal Plan Included" />
                                        Meal Plan Included
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Event Organised" />
                                        Event Organised
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Smoke Detectors" />
                                        Smoke Detectors
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Fire extinguisher" />
                                        Fire extinguisher
                                    </li>
                                    <li>
                                        <img src={require('./../../img/icons/check.png')} class="img-fluid" alt="Hire Travel guide " />
                                        Hire Travel guide
                                    </li>
                                </ul>
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
                            </div>
                            <div class="cardsec mb-4" id="hostinfo">
                                <h4>Host information</h4>
                                <div class="hostinfo">
                                    <div class="hostimg mb-4">
                                        <img src={require('./../../img/icons/user.png')} class="img-fluid" alt="Host" />
                                        <label>David Oliver</label>
                                        <div class="badge3 text-uppercase">
                                            <img src={require('./../../img/icons/verified.png')} class="img-fluid" alt="Verified" />
                                            Verified host
                                        </div>
                                    </div>
                                    <p>David Oliver manages this listing in agreement with Coliving.com. Every property is vetted for quality, and hosts are pre-qualified to meet Coliving.com's standards. They are open to any questions anytime before and during your stay.</p>
                                    <ul class="amiitems" id="hosttime">
                                        <li>
                                            <img src={require('./../../img/icons/calend.png')} class="img-fluid" alt="Calender" />
                                            Joined in <span>August 2019</span>
                                        </li>
                                        <li>
                                            <img src={require('./../../img/icons/response.png')} class="img-fluid" alt="Calender" />
                                            Response rate: <span>92%</span>
                                        </li>
                                        <li>
                                            <img src={require('./../../img/icons/time.png')} class="img-fluid" alt="Calender" />
                                            Response time: <span>11 hours</span>
                                        </li>
                                    </ul>
                                    <button class="hostbtn" data-bs-toggle="modal" data-bs-target="#contacthost">Contact host</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="checkInOut">
                            <div class="checkprice d-flex align-items-center justify-content-between">
                                <div class="price">
                                    From <span>$2,156</span>
                                </div>
                                <div class="rating">
                                    <i class="fa fa-solid fa-star"></i>
                                    5.0
                                </div>
                            </div>
                            <div class="row g-4 mb-3">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Move in</label>
                                        <input type="date" name="" placeholder="move in" />
                                        {/* <div>
                                            <img src={require('./../../img/icons/calender1.png')} class="img-fluid" alt="Calender" />
                                        </div> */}
                                    </div>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Move out</label>
                                        <input type="date" name="" placeholder="move out" />
                                        {/* <div>
                                            <img src={require('./../../img/icons/calender1.png')} class="img-fluid" alt="Calender" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label>Room Type</label>
                                <select>
                                    <option value={0}>Select</option>
                                    {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                </select>
                            </div>
                            <ul class="secrutiydep mb-4">
                                <li>
                                    <label>Monthly Rent</label>
                                    <span>$2,156</span>
                                </li>
                                <li>
                                    <label>Security Deposit</label>
                                    <span>50% </span>
                                </li>
                            </ul>
                            <button class="btn btn-primary w-100 text-uppercase">Reserve</button>
                            <p class="mb-0 mt-3 text-center">You won't be charged yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingDetail;
