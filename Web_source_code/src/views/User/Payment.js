import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import master from '../../data/masterData.json'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import svg from "../../img/icons/bankGrey.svg";

const Payments = () => {

    const [PropertyInfo, SetPropertyListing] = useState({});
    const [ErrorInfo, SetErrorInfo] = useState({});
    const [stepCount, SetStep] = useState(1);
    const [RoomInfo, SetRoomInfo] = useState([]);
    const [connectWithHost, SetConnectWIthHost] = useState(false);
    const [BookingInfo, SetBookingInfo] = useState({ MoveInDate: '', MoveOutDate: '', RoomType: 0, MonthlyRent: 0, property_id: 0, IsConfirmed : 0 });
    const [PaymentInfo, SetPaymentInfo] = useState({ CardNumber: '4111111111111111', CardHolderName: 'Test Card', cvvno: 258, expmonth: 11, expyear: 2025 });

    const params = useParams();
    const history = useNavigate();


    const BackToListing =(e) => {
        let userObj = JSON.parse(localStorage.getItem("myBooking"));
        history("/ListingDetail/"+userObj.property_id);
    }

    const HandleInputChange = (e) => {
		const { name, value } = e.target;
        SetPaymentInfo({ ...PaymentInfo, [name]: value });
        console.log(PaymentInfo)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        let userObj = JSON.parse(localStorage.getItem("myBooking"));
        console.log(userObj.MoveInDate)
        SetBookingInfo(prevState => ({
            ...BookingInfo,
            MoveInDate: userObj.MoveInDate, 
            MoveOutDate: userObj.MoveOutDate, 
            RoomType: userObj.RoomType, 
            MonthlyRent: userObj.MonthlyRent, 
            property_id: userObj.property_id, 
            IsConfirmed: userObj.IsConfirmed
        }));
        
        getpropertyInfo(userObj.property_id, userObj.RoomType);
    }, []);


    function getpropertyInfo(property_id, RoomType) {
        let formData = JSON.stringify({
            "property_id": property_id
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
                    SetRoomInfo(data.roominfo.filter(x => x.id == RoomType)[0]);
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

    function MakePayment() {
        var error = {};
        var isValid = true;
        if(PaymentInfo.CardNumber == ""){
            error.CardNumber = "Card No is required.";
            isValid=false;
        }
        if(PaymentInfo.CardNumber.length != "16"){
            error.CardNumber = "Card No is invalid.";
            isValid=false;
        }
        if(PaymentInfo.CardHolderName == ""){
            error.CardHolderName = "CardHolder Name is required.";
            isValid=false;
        }
        if(PaymentInfo.cvvno == ""){
            error.cvvno = "Cvv no is required.";
            isValid=false;
        }
        if(PaymentInfo.expmonth == ""){
            error.expmonth = "Exp. month is required.";
            isValid=false;
        }
        if(PaymentInfo.expyear == ""){
            error.expyear = "Exp. year is required.";
            isValid=false;
        }
        SetErrorInfo(error);

        if(isValid){
        let userObj = JSON.parse(localStorage.getItem("myBooking"));
        let formData = JSON.stringify({
            "property_id": userObj.property_id,
            "room_id": userObj.RoomType,
            "amount": BookingInfo.MonthlyRent,
            "monthlyrent": BookingInfo.MonthlyRent,
            "bookingfrom": userObj.MoveInDate,
            "bookingto": userObj.MoveOutDate,
            "bookingconfirmed": userObj.IsConfirmed
        });
        const apiUrl = `${config.Url}api/user/saveBookingInfo`;
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
                    toast.success("Booking confirmed.", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    localStorage.setItem("myBooking", "");
                    setTimeout(() => {
                        history("/user/my-stay");
                    }, 3000);
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
    }

    return (
        <section class="paymentSec padd80 mt-5">
            <div class="container">
                <ul class="steps mb-4">
                    <li class={stepCount >= 1 ? "is-active": "" }><span></span></li>
                    <li class={stepCount == 2 ? "is-active": "" }><span></span></li>
                </ul>
                <div class="form-wrapper">
                    <fieldset className={stepCount == 1 ? "section is-active" : "section"}>
                        <div class="row g-4">
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                <div class="articleItem">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                                            <div class="aImg">
                                                <img src={require('../../img/article/type1.png')} alt="artical img" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="typerommi">
                                                <div class="tleft text-start">
                                                    <h3>{RoomInfo && RoomInfo.roomname}</h3>
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
                                            </div>
                                        </div>
                                    </div>
                                    <div class="daterow d-flex align-items-center justify-content-between">
                                        <p class="mb-0">{BookingInfo.MoveInDate} to {BookingInfo.MoveOutDate}</p>
                                        <a href="javascript:void(0);" onClick={BackToListing}><u>Change</u></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <div class="rigthroom">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                                            <div class="aImg">
                                                {PropertyInfo.propertyphoto1 != "" ?
                                                <img src={`${config.ImageUrl}images/Property/` + PropertyInfo.propertyphoto1} alt="artical img" class="img-fluid" />
                                                :
                                                null }
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="typerommi">
                                                <div class="tleft text-start">
                                                    <h3>{PropertyInfo && PropertyInfo.propertyname}</h3>
                                                    <div class="rating d-inline">
                                                        <i class="fa fa-solid fa-star"></i>
                                                        5.0
                                                    </div>
                                                    <p class="mb-0 mt-3">{PropertyInfo && PropertyInfo.province}</p>
                                                    <p class="mb-0">{RoomInfo && RoomInfo.roomname}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="secrutiydep chkindate">
                                        <li>
                                            <label>Move In</label>
                                            <span>{BookingInfo.MoveInDate}</span>
                                        </li>
                                        <li>
                                            <label>Move Out</label>
                                            <span>{BookingInfo.MoveOutDate}</span>
                                        </li>
                                    </ul>
                                    <ul class="secrutiydep">
                                        <li>
                                            <label>{BookingInfo.IsConfirmed == 0 ? "Waiting Security Token" : "Monthly Rent" }</label>
                                            <span>${BookingInfo.MonthlyRent}</span>
                                        </li>
                                        <li>
                                            <label>Security Deposit</label>
                                            <span>100% </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary mt-3 mb-5" onClick={()=> SetStep(2)}>Continue</button>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={stepCount == 2 ? "section is-active" : "section"}>
                        <div class="payment-method">
                            <div class="heading1 mb-4">
                                <h2>Payment Method</h2>
                                <p class="fs-6">You reservation won't be confirmed until the host accepts your request (within 48 hours) <br />You won't be charged until then.</p>
                            </div>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link" id="nav-home-tab" disabled data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                        <img src={svg} class="cardicon" alt="Card" />
                                        net banking
                                    </button>
                                    <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                        <img src={svg} class="cardicon" alt="Card" />
                                        credit/debit card
                                    </button>
                                    <button class="nav-link" id="nav-contact-tab" disabled data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                        <img src={svg} class="cardicon" alt="Card" />
                                        Add New Card
                                    </button>
                                </div>
                            </nav>
                            <div class="tab-content mt-5" id="nav-tabContent">
                                <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <br /><br /><br /><br /><h4>No Data Found in Figma</h4>
                                </div>
                                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="row g-5">
                                        <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="card-form">
                                                <div class="form-group mb-4">
                                                    <label>Card Number</label>
                                                    <small>Enter the 16- digit card number</small>
                                                    <input type="text" name="CardNumber" value={PaymentInfo.CardNumber} onChange={HandleInputChange} maxLength={16} placeholder="xxxx xxxx xxxx xxxx" />
                                                    <div class="checkover">
                                                    {PaymentInfo.CardNumber && PaymentInfo.CardNumber.length == 16 ?
                                                    <>
                                                        <img src={require('../../img/icons/visa.png')} class="img-fluid" alt="visa" />
                                                        <img src={require('../../img/icons/check-curve.png')} class="img-fluid" alt="check" />
                                                        </>
                                                        :
                                                        null }
                                                    </div>
                                                    <span className="error">{ErrorInfo.CardNumber}</span>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <label>Card Holder Name</label>
                                                    <small>Enter Card holder name</small>
                                                    <input type="text" name="CardHolderName" value={PaymentInfo.CardHolderName} onChange={HandleInputChange} placeholder="" />
                                                    <div class="checkover">
                                                    {PaymentInfo.CardHolderName && PaymentInfo.CardHolderName != '' ?
                                                        <img src={require('../../img/icons/check-curve.png')} class="img-fluid" alt="check" />
                                                        :
                                                        null }
                                                    </div>
                                                    <span className="error">{ErrorInfo.CardHolderName}</span>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <div class="d-flex flex-wrap align-items-center justfy-content-between cvvnumber">
                                                        <div class="w-50">
                                                            <label>CVV Number</label>
                                                            <small>Enter the 4- digit number</small>
                                                        </div>
                                                        <input type="text" name="cvvno" value={PaymentInfo.cvvno} maxLength={3} onChange={HandleInputChange} class="w-50" placeholder="" />
                                                    </div>
                                                    <span className="error">{ErrorInfo.cvvno}</span>
                                                </div>
                                                <div class="form-group">
                                                    <div class="d-flex flex-wrap align-items-center justfy-content-between expdate">
                                                        <div class="w-50">
                                                            <label>Expiry Date</label>
                                                            <small>Enter the Expiration date of the card</small>
                                                        </div>
                                                        <div class="d-flex align-items-center justfy-content-between w-50">
                                                            <input type="text" name="expmonth" class="" placeholder="" maxLength={2} value={PaymentInfo.expmonth} onChange={HandleInputChange} />
                                                            <span class="px-3">/</span>
                                                            <input type="text" name="expyear" class="" placeholder="" maxLength={4} value={PaymentInfo.expyear} onChange={HandleInputChange} />
                                                        </div>
                                                        <span className="error">{ErrorInfo.expmonth} / </span>
                                                        <span className="error">{ErrorInfo.expyear}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                                            <div class="cardpreview">
                                                <div class="card-pre">
                                                    <img src={require('../../img/cardprebg.png')} class="img-fluid d-block mx-auto" alt="Card Bg" />
                                                    <div class="carddet">
                                                        <label>{PaymentInfo && PaymentInfo.CardHolderName}</label>
                                                        <div class="carddigit">
                                                        {PaymentInfo && PaymentInfo.CardNumber}
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <label>{PaymentInfo && PaymentInfo.expmonth}/{PaymentInfo && PaymentInfo.expyear}</label>
                                                            <div>
                                                                <img src={require('../../img/icons/visa.png')} class="img-fluid" alt="Visa" />
                                                                <p>Visa Card</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cardfees">
                                                    <ul>
                                                        <li>
                                                            <label>{BookingInfo.IsConfirmed == 0 ? "Waiting Security Token" : "Monthly Rent" }</label>
                                                            <span>${BookingInfo.MonthlyRent}</span>
                                                        </li>
                                                        <li>
                                                            <label>Security Deposit</label>
                                                            <span>100%</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mt-5 buttonGrp">
                                            <button class="btn btn-secondary" onClick={()=> {
                                                window.scrollTo(0, 0)
                                                SetStep(1)}} style={{marginRight: '20px'}}>Skip for Now</button>
                                            <button class="btn btn-primary" onClick={MakePayment}>Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <br /><br /><br /><br /><h4>No Data Found in Figma</h4>
                                </div>
                            </div>
                        </div>

                    </fieldset>
                </div>
            </div>
        </section>
    )
}

export default Payments;