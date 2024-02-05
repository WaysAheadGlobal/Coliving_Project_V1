import React, { useEffect, useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import config from "../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import master from '../data/masterData.json';


const TopMenu = () => {
	const Ref = useRef(null);
	const history = useNavigate();
	const intialValues = { Fullname: "", email: "", mobileNo: "", communityType: 0, otp1: "", otp2: "", otp3: "", otp4: "", userType: "0" };
	const intialLoginValues = { email: "", Lotp1: "", Lotp2: "", Lotp3: "", Lotp4: "", userType: "0" };
	const [formValues, setFormValues] = useState(intialValues);
	const [formLoginValues, setFormLoginValues] = useState(intialLoginValues);
	const [formErrors, setFormErrors] = useState({});
	const [formLoginErrors, setFormLoginErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false)
	const [isErrorAvailable, SetErrorAvailable] = useState(false)
	const [isLoginErrorAvailable, SetLoginErrorAvailable] = useState(false)
	const [timer, setTimer] = useState("00:00");
	const [Registertimer, setRegisterTimer] = useState("00:00");
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	const Rref = useRef(null);
	const Rref2 = useRef(null);
	const Rref3 = useRef(null);
	const Rref4 = useRef(null);
	const getTimeRemaining = (e) => {
		const total =
			Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor(
			(total / 1000 / 60) % 60
		);
		const hours = Math.floor(
			(total / 1000 / 60 / 60) % 24
		);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};
	const startTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};
	const startRegisterTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setRegisterTimer(
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};
	const clearTimer = (e) => {
		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		setTimer("00:30");

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};
	const clearRegisterTimer = (e) => {
		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		setRegisterTimer("00:30");

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};
	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 30);
		return deadline;
	};
	const [show, setShow] = useState(false);
	const [SignUpshow, setSignUpshow] = useState(false);
	const [userSelection, setuserSelection] = useState(false);
	const [showLoginOTP, setLoginOTP] = useState(false);
	const [showRegisterOTP, setRegisterOTP] = useState(false);
	const [RegisterOTPSent, setRegisterOTPSent] = useState(false);
	const [LoginOTPSent, setLoginOTPSent] = useState(false);
	const [SelectedUserType, SetSelectedUserType] = useState(0);
	const wrapperRef = useRef(null);
	function useOutsideAlerter(ref) {
		useEffect(() => {
		  /**
		   * Alert if clicked on outside of element
		   */
		  function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				SetshowSideMenu(false)
			}
		  }
		  // Bind the event listener
		  document.addEventListener("mousedown", handleClickOutside);
		  return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		  };
		}, [ref]);
	  }
	// const [userName, setUserName] = useState('');
	const gotoListing = (e) => {
		history("/listing");
		// if (localStorage.getItem("usertoken") != "" && localStorage.getItem("usertoken") != null) {
		// 	history("/listing");
		// }
		// else {
		// 	setuserSelection(true);
		// }
	}

	const modalClose = () => setShow(false);
	const modalShow = (e) => {
		e.preventDefault();
		setShow(true);
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		}
	}, [])


	// useEffect(()=> {
	// 	if(localStorage.getItem("username") != null){
	// 		setUserName(localStorage.getItem("username"));
	// 	}
	// })

	const modalSignUpClose = () => setSignUpshow(false);
	const modalUserSelectionClose = () => setuserSelection(false);
	const [showSideMenu, SetshowSideMenu] = useState(false);
	const SetshowSideMenuToggle = (e) => {
		e.preventDefault();
		if(showSideMenu){
			SetshowSideMenu(false)
		}
		else{
			SetshowSideMenu(true)
		}
	};
	const modalUserSelectionShow = (e) => {
		e.preventDefault();
		setuserSelection(true);
	};
	const modalSignUpShow = (e) => {
		e.preventDefault();
		setSignUpshow(true);
	};
	const getUserSelection = id => e => {
		e.preventDefault();
		localStorage.setItem("userType", id);
		setSignUpshow(false);
		setuserSelection(false);
		SetSelectedUserType(id);
		setShow(true);
	}
	const showLoginPopup = (e) => {
		e.preventDefault();
		setSignUpshow(false);
		setuserSelection(false);
		setShow(true);
	}

	const showRegisterPopup = (e) => {
		e.preventDefault();
		setShow(false);
		setSignUpshow(true);
	}

	const handleInputChange = (e) => {

		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });

		if (name == "otp1") {
			Rref2.current.focus();
		}
		if (name == "otp2") {
			Rref3.current.focus();
		}
		if (name == "otp3") {
			Rref4.current.focus();
		}

	}
	const handleLoginInputChange = (e) => {

		const { name, value } = e.target;
		setFormLoginValues({ ...formLoginValues, [name]: value });
		if (name == "Lotp1") {
			ref2.current.focus();
		}
		if (name == "Lotp2") {
			ref3.current.focus();
		}
		if (name == "Lotp3") {
			ref4.current.focus();
		}
	}
	const CheckUserSignUp = (e) => {
		e.preventDefault();
		if (!RegisterOTPSent) {
			const errors = {};
		const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
		SetErrorAvailable(false);
		var isValid = true;

		if (!formValues.Fullname) {
			errors.Fullname = "FullName is required!";
			SetErrorAvailable(true);
			isValid = false;
		}

		if (!formValues.email) {
			errors.email = "Email is required!";
			SetErrorAvailable(true);
			isValid = false;
		}
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
			errors.email = 'Invalid email address';
			SetErrorAvailable(true);
			isValid = false;
		}
		//  else if(!regex.test(values.email)){
		//     errors.email = "This is not a valid email format!";
		// }

		if (!formValues.mobileNo) {
			errors.mobileNo = "Mobile Number is required!";
			SetErrorAvailable(true);
			isValid = false;
		}

		if (formValues.communityType == "0") {
			errors.communityType = "Community Type is required!";
			SetErrorAvailable(true);
			isValid = false;
		}
			setFormErrors(errors);
			setIsSubmit(true);

			if (isValid) {
				const val = localStorage.getItem("userType")
				let formData = JSON.stringify({
					"Fullname": formValues.Fullname,
					"email": formValues.email,
					"mobileNo": formValues.mobileNo,
					"communityType": formValues.communityType,
					"userType": val
				});
				const apiUrl = `${config.Url}api/auth/signup`;
				fetch(apiUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: formData,
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.status === 200) {
							//localStorage.setItem("token", data.token);
							setRegisterOTP(true);
							setTimeout(() => {
								setRegisterOTPSent(true);
								localStorage.setItem("userid", data.users.insertId)
							}, 300);
							clearRegisterTimer(getDeadTime());

							//this.setState({ postData: data.data });
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
		else {
			const val = localStorage.getItem("userid");
			let formData = JSON.stringify({
				"userid": val,
				"userotp": formValues.otp1 + '' + formValues.otp2 + '' + formValues.otp3 + '' + formValues.otp4
			});
			const apiUrl = `${config.Url}api/auth/signup-verifyotp`;
			fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.status === 200) {
						localStorage.setItem("usertoken", data.user1.token)
						localStorage.setItem("username", data.user1.Fullname)
						if (localStorage.getItem("userType") == "1") {
							if (!data.IsDetailsFill) {
								history("/user/personalDetail");
							}
							else {
								history("/Listing");
							}
						}
						else {
							if (!data.IsPropertyFill) {
								history("/owner/filldetails");
							}
							else {
								history("/owner/profile");
							}

						}
					} else {
						toast.error("data.message", {
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
	const ClickGetUserOTP = (e) => {
		e.preventDefault();
		getOTP();
	}

	const ClickGetRegisterUserOTP = (e) => {
		e.preventDefault();
		// const val = localStorage.getItem("userType")
		// 		let formData = JSON.stringify({
		// 			"Fullname": formValues.Fullname,
		// 			"email": formValues.email,
		// 			"mobileNo": formValues.mobileNo,
		// 			"communityType": formValues.communityType,
		// 			"userType": val
		// 		});
		// 		const apiUrl = `${config.Url}api/auth/signup`;
		// 		fetch(apiUrl, {
		// 			method: "POST",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},
		// 			body: formData,
		// 		})
		// 			.then((response) => response.json())
		// 			.then((data) => {
		// 				if (data.status === 200) {
		// 					//localStorage.setItem("token", data.token);
		// 					setRegisterOTP(true);
		// 					setTimeout(() => {
		// 						setRegisterOTPSent(true);
		// 						localStorage.setItem("userid", data.users.insertId)
		// 					}, 300);
		// 					clearRegisterTimer(getDeadTime());

		// 					//this.setState({ postData: data.data });
		// 				} else {
		// 					toast.error(data.message, {
		// 						position: toast.POSITION.TOP_RIGHT,
		// 					});
		// 					console.error("Error fetching user data");
		// 				}
		// 			})
		// 			.catch((error) => {
		// 				console.error("Error fetching user data:", error);
		// 			});	
		clearRegisterTimer(getDeadTime());
	}

	function getOTP() {
		const val = localStorage.getItem("userType")
		let formData = JSON.stringify({
			"email": formLoginValues.email,
			"usertype": val
		});
		const apiUrl = `${config.Url}api/auth/checkuser`;
		fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 200) {
					setTimeout(() => {
						setLoginOTPSent(true);
						localStorage.setItem("userid", data.user.user_id)
					}, 300);
					clearTimer(getDeadTime());
				}
				else if (data.status === 401) {
					const errors = {};

					errors.email = "Account is not active. Please check with admin.";
					setFormLoginErrors(errors)
				}
				else {
					const errors = {};

					errors.email = "Email not found!!";
					setFormLoginErrors(errors)
				}
			})
			.catch((error) => {
				console.error("Error fetching user data:", error);
			});
	}

	const CheckUserLogin = (e) => {
		e.preventDefault();
		if (!LoginOTPSent) {
			setFormLoginErrors(validateLogin(formLoginValues));
			if (!isLoginErrorAvailable) {
				getOTP();
			}

		}
		else {
			let formData = JSON.stringify({
				"email": formLoginValues.email,
				"otp": formLoginValues.Lotp1 + '' + formLoginValues.Lotp2 + '' + formLoginValues.Lotp3 + '' + formLoginValues.Lotp4
			});
			const apiUrl = `${config.Url}api/auth/login`;
			fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.status === 200) {
						localStorage.setItem("usertoken", data.user1.token)
						localStorage.setItem("username", data.user1.Fullname)
						if (localStorage.getItem("userType") == "1") {
							if (!data.IsDetailsFill) {
								history("/user/personalDetail");
							}
							else {
								// history("/Listing");
								window.location.href="/Listing";
							}
						}
						else {
							if (!data.IsPropertyFill) {
								history("/owner/filldetails");
							}
							else {
								history("/owner/profile");
							}

						}
					} else {
						toast.error("data.message", {
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

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
		SetErrorAvailable(false);
		if (!values.Fullname) {
			errors.Fullname = "FullName is required!";
			SetErrorAvailable(true);
		}

		if (!values.email) {
			errors.email = "Email is required!";
			SetErrorAvailable(true);

		}
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
			SetErrorAvailable(true);
		}
		//  else if(!regex.test(values.email)){
		//     errors.email = "This is not a valid email format!";
		// }

		if (!values.mobileNo) {
			errors.mobileNo = "Mobile Number is required!";
			SetErrorAvailable(true);

		}

		if (values.communityType == "0") {
			errors.communityType = "Community Type is required!";
			SetErrorAvailable(true);

		}
		return errors;
	}

	const validateLogin = (values) => {
		const errors = {};
		const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
		SetErrorAvailable(false);

		if (!values.email) {
			errors.email = "Email is required!";
			SetLoginErrorAvailable(true);
		}
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
			SetLoginErrorAvailable(true);
		}
		return errors;
	}
	useOutsideAlerter(wrapperRef);
	return (
		<>
		
			<header className="header">
				<ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-7">
							<div className="logo">
								<a href="/">
									<img src={require('./../../src/img/logo.png')} alt="Co-living logo missing" title="Co-living" className="img-fluid" />
								</a>
							</div>
						</div>
						<div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-5 d-flex justify-content-end">
							<div className="userloginbtn" onClick={modalUserSelectionShow}>
								<i className="fa fa-solid fa-user"></i>
							</div>
							<div className="mobileIcon" onClick={SetshowSideMenuToggle}>
								<svg class="svg-inline--fa fa-bars-staggered" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars-staggered" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
							</div>
							<div ref={wrapperRef} className={showSideMenu ? "mobileMenus mobileMenusShow": "mobileMenus"}>
								<div className="logo-m">
									<a href="/">
										<img src={require('./../../src/img/logo.png')} alt="Co-living logo missing" title="Co-living" />
									</a>
								</div>
								<ul className="nav-menu">
									<li>
										<Link ref={wrapperRef} to={"/#aboutus"}>
											About Us
										</Link>
									</li>
									<li><a href="#whyus">Why Us</a></li>
									<li><a href="javascript:(0);" onClick={gotoListing}>
										Find my Home
									</a></li>
									<li><Link to={"/blogs"}>
										Blogs
									</Link></li>
									<li><a href="#team">Team</a></li>
									<li><a href="#faq">Faq</a></li>
									<li><a href="#cta">Contact</a></li>

								</ul>
								<div className="connect">
									<ul>
										<li>
											<i className="fa fa-solid fa-envelope"></i>
											<a href="mailto:hello@coliving.ca">hello@coliving.ca</a>
										</li>
										<li>
											<i className="fa fa-solid fa-phone"></i>
											<a href="tel:+1-416-839-6023">+1-416-839-6023</a>
										</li>
										<li>
											<i className="fa fa-solid fa fa-map-marker"></i>
											2366 Merton Street, Toronto Canada
										</li>
									</ul>

								</div>
							</div>
							<nav className="navigation">
								<ul>
									<li><a href="/#aboutus">About Us</a></li>
									<li><a href="/#whyus">Why Us</a></li>
									<li><a href="javascript:(0);" onClick={gotoListing}>
										Find my Home
									</a></li>
									<li><a href="/blogs">Blogs</a></li>
									<li><a href="/#team">Team</a></li>
									<li><a href="/#faq">Faq</a></li>
									<li><a href="/#cta">Contact</a></li>
									
										{localStorage.getItem("username") == "" || localStorage.getItem("username") == null ?
											<li className="lastnavbtn">
											<a href="javascript:void(0);" onClick={modalUserSelectionShow}><span>Login/Signup</span></a>
											</li> :
											<li className="lastnavbtn2">
											<div class="postuser">
												<i class="fa fa-solid  fa-circle-user"></i>
												<span>{localStorage.getItem("username")}</span>
												<i class="fa fa-solid fa-caret-down"></i>
												<div class="userdropdown">
													<ul>
														{localStorage.getItem("userType") == 1 ?
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
															</>}

													</ul>
												</div>
											</div>
											</li>
										}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>


			<Modal show={show} onHide={modalClose} className="modal-xl">
				<div class="">
					<div class="modal-content">
						<div class="row">
							<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
								<div class="modalImg">
									<img src={require('./../../src/img/onboard/login.png')} class="img-fluid" alt="Sign up" />
								</div>
							</div>
							<div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
								<div class="modalForms">
									<a href="/" class="redirectBtn">Home</a>
									<div class="formArea">
										<h4 id="loginModalLabel">Welcome Back</h4>
										<div>
											<div class="form-group mb-4">
												<label>Email ID <span className="mandatory">*</span></label>
												<input type="text" name="email" value={formLoginValues.email} id="email" placeholder="john.mark@gmail.com" class="form-control" onChange={handleLoginInputChange} />
												<span className="error">{formLoginErrors.email}</span>
											</div>
											<div class="form-group mb-4">
												<div class="optSec" style={{ display: LoginOTPSent ? "block" : "none" }}>
													<div class="otpValue">
														<input type="text" ref={ref} name="Lotp1" id="Lotp1" value={formLoginValues.Lotp1} maxlength="1" minlength="1" onChange={handleLoginInputChange} />
														<input type="text" ref={ref2} name="Lotp2" id="Lotp2" value={formLoginValues.Lotp2} maxlength="1" minlength="1" onChange={handleLoginInputChange} />
														<input type="text" ref={ref3} name="Lotp3" id="Lotp3" value={formLoginValues.Lotp3} maxlength="1" minlength="1" onChange={handleLoginInputChange} />
														<input type="text" ref={ref4} name="Lotp4" id="Lotp4" value={formLoginValues.Lotp4} maxlength="1" minlength="1" onChange={handleLoginInputChange} />
														<div class="countdowntime">
															<span>{timer}</span>
															{timer == "00:00" ?
																<a href="#/" onClick={ClickGetUserOTP}>Resend OTP</a> : null}
														</div>
													</div>

												</div>
											</div>
											<div class="form-group mb-3">
												<button class="btn btn-primary text-uppercase w-100" onClick={CheckUserLogin}>Login</button>
											</div>
											<div class="form-group loginOption">
												<p class="mb-0">Enter login details or <a href="javascript:void(0);" onClick={showRegisterPopup}>Create an account.</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>

			<Modal show={SignUpshow} onHide={modalSignUpClose} className="modal-xl">
				<div class="">
					<div class="modal-content">
						<div class="row">
							<div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-6 col-12 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
								<div class="modalImg">
									<img src={require('./../../src/img/onboard/signup.png')} class="img-fluid" alt="Sign up" />
								</div>
							</div>
							<div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="modalForms">
									<a href="/" class="redirectBtn">Home</a>
									<div class="formArea">
										<h4 id="signupModalLabel">Create Your Account</h4>
										{RegisterOTPSent ?
											<div style={{ color: "green" }}>OTP Sent to registered EmailId</div>
											:
											null
										}

										<div>
											<div class="form-group mb-3">
												<label>Full Name <span className="mandatory">*</span></label>
												<input type="text" name="Fullname" placeholder="John Mark" class="form-control" id="Fullname" value={formValues.Fullname} onChange={handleInputChange} />
												<span className="error">{formErrors.Fullname}</span>
											</div>
											<div class="form-group mb-3">
												<label>Email ID <span className="mandatory">*</span></label>
												<input type="text" name="email" placeholder="john.mark@gmail.com" class="form-control" id="email" value={formValues.email} onChange={handleInputChange} />
												<span className="error">{formErrors.email}</span>
											</div>
											<div class="form-group mb-3">
												<label>Mobile Number <span className="mandatory">*</span></label>
												<input type="text" name="mobileNo" maxLength={10} placeholder="Mobile Number" class="form-control" id="mobileNo" value={formValues.mobileNo} onChange={handleInputChange} />
												<span className="error">{formErrors.mobileNo}</span>
											</div>
											{SelectedUserType == 1 ?
												<div class="form-group mb-4">
													<label>Community Type <span className="mandatory">*</span></label>
													<select name="communityType" value={formValues.communityType} onChange={handleInputChange}>
														<option value={0}>Select</option>
														{master.CommunityType.map((result) => (<option value={result.id}>{result.name}</option>))}
													</select>
													<span className="error">{formErrors.communityType}</span>
												</div> :
												<div class="form-group mb-4">
													<label>Community Type</label>
													<select name="communityType" value={formValues.communityType} onChange={handleInputChange}>
														<option value={0}>Select</option>
														{master.PropertyCommunityType.map((result) => (<option value={result.id}>{result.name}</option>))}
													</select>
													<span className="error">{formErrors.communityType}</span>
												</div>}
											<div class="form-group mb-4">
												<div class="optSec" style={{ display: showRegisterOTP ? "block" : "none" }}>
													<div class="otpValue">
														<input type="text" name="otp1" id="otp1" ref={Rref} value={formValues.otp1} maxlength="1" minlength="1" onChange={handleInputChange} />
														<input type="text" name="otp2" id="otp2" ref={Rref2} value={formValues.otp2} maxlength="1" minlength="1" onChange={handleInputChange} />
														<input type="text" name="otp3" id="otp3" ref={Rref3} value={formValues.otp3} maxlength="1" minlength="1" onChange={handleInputChange} />
														<input type="text" name="otp4" id="otp4" ref={Rref4} value={formValues.otp4} maxlength="1" minlength="1" onChange={handleInputChange} />
														<div class="countdowntime">
															<span>{Registertimer}</span>
															{Registertimer == "00:00" ?
																<a href="#/" onClick={ClickGetRegisterUserOTP}>Resend OTP</a> : null}
														</div>
													</div>
												</div>
											</div>
											<div class="form-group mb-3">
												<button class="btn btn-primary text-uppercase w-100" onClick={CheckUserSignUp}>Signup</button>
											</div>
											<div class="form-group loginOption">
												<p class="mb-0">Already have an account? <a href="javascript:void(0);" onClick={showLoginPopup}>Login</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<Modal show={userSelection} onHide={modalUserSelectionClose}>
				<div class="">
					<div class="modal-content">
						<div class="row">
							<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
								<div class="modalForms">
									<a href="#" class="redirectBtn" onClick={modalUserSelectionClose}>X</a>
									<div class="formArea">
										<h4 id="selectionModal">Select Your Profile</h4>
										<div>
											<div class="row">
												<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
													<div class="logintype" onClick={getUserSelection(1)}>
														<div class="imgtype">
															<img src={require('./../../src/img/onboard/userself.png')} class="img-fluid" alt="Username" />
														</div>
														<h4>Home Seeker</h4>
													</div>
												</div>
												<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
													<div class="logintype" onClick={getUserSelection(2)}>
														<div class="imgtype">
															<img src={require('./../../src/img/onboard/propowner.png')} class="img-fluid" alt="Username" />
														</div>
														<h4>Home Owner</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
export default TopMenu;