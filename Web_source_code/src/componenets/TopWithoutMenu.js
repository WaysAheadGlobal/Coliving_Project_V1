import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import config from "../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TopWithoutMenu = () => {
	const history = useNavigate();
	const intialValues = { Fullname: "", email: "", mobileNo: "", communityType: "0", otp1: "", otp2: "", otp3: "", otp4: "", userType: "0" };
	const intialLoginValues = { email: "", Lotp1: "", Lotp2: "", Lotp3: "", Lotp4: "", userType: "0" };
	const [formValues, setFormValues] = useState(intialValues);
	const [formLoginValues, setFormLoginValues] = useState(intialLoginValues);
	const [formErrors, setFormErrors] = useState({});
	const [formLoginErrors, setFormLoginErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false)
	const [isErrorAvailable, SetErrorAvailable] = useState(false)
	const [isLoginErrorAvailable, SetLoginErrorAvailable] = useState(false)

	const [show, setShow] = useState(false);
	const [SignUpshow, setSignUpshow] = useState(false);
	const [userSelection, setuserSelection] = useState(false);
	const [showLoginOTP, setLoginOTP] = useState(false);
	const [showRegisterOTP, setRegisterOTP] = useState(false);
	const [RegisterOTPSent, setRegisterOTPSent] = useState(false);
	const [LoginOTPSent, setLoginOTPSent] = useState(false);
	// const [userName, setUserName] = useState('');
	

	const modalClose = () => setShow(false);
	const modalShow = (e) => {
		e.preventDefault();
		setShow(true);
	};

	// useEffect(() => {
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 	}
	// }, [])


	// useEffect(()=> {
	// 	if(localStorage.getItem("username") != null){
	// 		setUserName(localStorage.getItem("username"));
	// 	}
	// })

	const modalSignUpClose = () => setSignUpshow(false);
	const modalUserSelectionClose = () => setuserSelection(false);
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
	}
	const handleLoginInputChange = (e) => {

		const { name, value } = e.target;
		setFormLoginValues({ ...formLoginValues, [name]: value });
	}
	const CheckUserSignUp = (e) => {
		e.preventDefault();
		if (!RegisterOTPSent) {
			setFormErrors(validate(formValues));
			setIsSubmit(true);

			if (!isErrorAvailable) {
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
						history("/user/profile");
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


	const CheckUserLogin = (e) => {
		e.preventDefault();
		if (!LoginOTPSent) {
			setFormLoginErrors(validateLogin(formLoginValues));
			if (!isLoginErrorAvailable) {
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
							//localStorage.setItem("token", data.token);
							setTimeout(() => {
								setLoginOTPSent(true);
								localStorage.setItem("userid", data.user.user_id)
							}, 300);


							//this.setState({ postData: data.data });
						} else {
							// toast.error(data.message, {
							// 	position: toast.POSITION.TOP_RIGHT,
							// });
							// console.error("Error fetching user data");
							// alert('1')
							const errors = {};

							errors.email = "Email not found!!";
							setFormLoginErrors(errors)
						}
					})
					.catch((error) => {
						console.error("Error fetching user data:", error);
					});
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
						history("/user/profile");
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
		//  else if(!regex.test(values.email)){
		//     errors.email = "This is not a valid email format!";
		// }

		if (!values.mobileNo) {
			errors.mobileNo = "Mobile Number is required!";
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

		return errors;
	}
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
						<div class="mblemnu">
                                <div class="mobileMenuBtn">
                                    <i class="fa fa-solid fa-bars hamburger"></i>
                                    <i class="fa fa-solid fa-xmark closeham"></i>
                                </div>
                                <div class="postuser">
                                    <i class="fa fa-solid  fa-circle-user"></i>
                                    <span>{localStorage.getItem("username")}</span>
                                    <i class="fa fa-solid fa-caret-down"></i>
                                    <div class="userdropdown">
                                        <ul>
                                                <li><a href="/logout">Logout</a></li>
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
export default TopWithoutMenu;