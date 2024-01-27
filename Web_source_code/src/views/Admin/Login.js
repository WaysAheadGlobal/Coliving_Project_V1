import './../../../src/assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import master from '../../data/masterData.json';

function AdminLogin() {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
	const history = useNavigate();
	const options = {
		margin: 30,
		responsiveClass: true,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		// navText: ["Prev", "Next"],
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 2,
			},
			700: {
				items: 3,
			},
			1000: {
				items: 3,

			}
		},
	};
	const init = { email: '', otp1: '', otp2: '', otp3: '', otp4: '' }
	const [formValues, SetFormValues] = useState(init);
	const [formErrors, SetFormErrors] = useState({});
	const modalUserSelectionClose = () => setuserSelection(false);
	const modalUserSelectionOpen = () => setuserSelection(true);
	const [userSelection, setuserSelection] = useState(false);
	const [ShowOTP, SetShowOTP] = useState(false);
	
	const getUserSelection = id => e => {
		e.preventDefault();
		setuserSelection(false);
	}
	const handleInputChange = (e) => {
		console.log(e.keyCode);
		const { name, value } = e.target;
		SetFormValues({ ...formValues, [name]: value });
		console.log(formValues);
		if(value != ""){
		if(name == "otp1"){
			ref2.current.focus();
		}
		if(name == "otp2"){
			ref3.current.focus();
		}
		if(name == "otp3"){
			ref4.current.focus();
		}
	}
	}

	const CheckLogin = (e) => {
		if (formValues.email == "") {
			SetFormErrors({ email: "Email is Required" })
		}
		else {
			SetFormErrors({ email: "" })
			if (ShowOTP == false) {
				if (formValues.email == "admin@coliving.ca") {
					SetShowOTP(true);
				}
				else {
					SetFormErrors({ email: "Invalid Email" })
				}
			}
			else {
				var otp = formValues.otp1+ "" +formValues.otp2+ "" +formValues.otp3+ "" +formValues.otp4;
				if(otp == "1122"){
					localStorage.setItem("userid", 1);
					localStorage.setItem("usertype", "0");
					history("/admin/dashboard");
				}
				else
				{
					SetFormErrors({ otp1: "Wrong OTP!!" })
				}
			}
		}
	}

	return (
		<>
			<header class="header">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-7">
							<div class="logo">
								<a href="/">
									<img src={require('../../img/logo.png')} alt="Co-living logo missing" title="Co-living" class="img-fluid" />
								</a>
							</div>
						</div>
						<div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-5 d-flex justify-content-end">
							<div class="userloginbtn" data-bs-toggle="modal" data-bs-target="#login">
								<i class="fa fa-solid fa-user"></i>
							</div>
							<div class="mobileIcon">
								<i class="fa fa-solid fa-bars-staggered"></i>
							</div>
							<div class="mobileMenus">
								<div class="logo-m">
									<a href="/">
										<img src="../img/logo.png" alt="Co-living logo missing" title="Co-living" />
									</a>
								</div>
								<ul class="nav-menu">
									<li><a href="#aboutus">About Us</a></li>
									<li><a href="#whyus">Why Us</a></li>
									<li><a href="../blogs.html">Blogs</a></li>
									<li><a href="#team">Team</a></li>
									<li><a href="#faq">Faq</a></li>
									<li><a href="#cta">Contact</a></li>

								</ul>
								<div class="connect">
									<ul>
										<li>
											<i class="fa fa-solid fa-envelope"></i>
											<a href="mailto:coliving@company.ca">coliving@company.ca</a>
										</li>
										<li>
											<i class="fa fa-solid fa-phone"></i>
											<a href="tel:+1-416-839-6023">+1-416-839-6023</a>
										</li>
										<li>
											<i class="fa fa-solid fa-location-dot"></i>
											2366 Merton Street, Toronto Canada
										</li>
									</ul>

								</div>
							</div>
							<nav class="navigation">
								<ul>
									<li><a href="#aboutus">About Us</a></li>
									<li><a href="#whyus">Why Us</a></li>
									<li><a href="../blogs.html">Blogs</a></li>
									<li><a href="#team">Team</a></li>
									<li><a href="#faq">Faq</a></li>
									<li><a href="#cta">Contact</a></li>
									<li class="lastnavbtn"><a href="#/" onClick={modalUserSelectionOpen}>Admin Login</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<section className="banner homeBanner">
				<img src={require('../../../src/img/banner.png')} className="img-fluid" alt="Banner" />
				<div className="highlights">
					<h1>Sharing a living space is <br />more beneficial.</h1>
					<p>Find flexible, convenient, and affordable coliving homes with <br />friends included</p>
					{/* <div className="searchForm">
						<input type="text" placeholder="Search by Province.." />
						<div className="bannBtn">
							<img src={require('../../../src/img/searchBtn.png')} className="img-fluid" alt="search btn" />
						</div>
					</div> */}
				</div>
			</section>
			<section className="aboutus padd80 pb-0" id="aboutus">
				<div className="container">
					<div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-0 g-sm-4 g-4 align-items-center">
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-xxl-5 pe-xl-5 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-block d-block">
							<div className="halfImg">
								<img src={require('../../../src/img/aboutus.png')} alt="About Missing" className="img-fluid" />
							</div>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<div className="heading1 mb-3">
								<h2>About Us</h2>
							</div>
							<p className="mb-0">Join a community of individuals who share your interests and enjoy the advantages of co-living. Our fully furnished and well-equipped spaces come with all utilities and essentials included in a single monthly payment. The primary benefit of co-living lies in the feeling of connectivity and inclusion it offers. We provide services to make it easy for everyone to book a room online through our application platform which is ready to provide the best features for easy access.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="whyus padd80" id="whyus">
				<div className="container">
					<div className="heading1 mb-5 text-center">
						<h2>Why stay with us</h2>
						<p className="mt-3">Discover the Difference: Our Co-Living Experience Experience a Unique <br />Blend of Comfort, Community, and Convenience.</p>
					</div>

					<OwlCarousel {...options} className="whyBlocks owl-carousel" >
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={'/assets/img/housing.svg'} className="img-fluid" alt="why icon missing"/> */}
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Affordable Housing 1</h4>
							<p>Accessible Living, Sensible Prices: Affordable Co-Living Solutions Unlock Affordable Housing Without Compromising Comfort or Community.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={require('../../../src/img/checks.svg')} className="img-fluid" alt="why icon missing"/> */}
								<svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M33 0.25C19.25 0.25 8.25 11.25 8.25 25C8.25 38.75 19.25 49.75 33 49.75C46.75 49.75 57.75 38.75 57.75 25C57.75 11.25 46.75 0.25 33 0.25ZM33 44.25C22.275 44.25 13.75 35.725 13.75 25C13.75 14.275 22.275 5.75 33 5.75C43.725 5.75 52.25 14.275 52.25 25C52.25 35.725 43.725 44.25 33 44.25ZM56.375 48.375C62.425 42.325 66 34.075 66 25C66 15.925 62.425 7.675 56.375 1.625L53.35 4.65C58.575 9.875 61.875 17.025 61.875 25C61.875 32.975 58.575 40.125 53.35 45.35L56.375 48.375ZM12.65 45.35C7.425 40.125 4.125 32.975 4.125 25C4.125 17.025 7.425 9.875 12.65 4.65L9.625 1.625C3.575 7.675 0 15.925 0 25C0 34.075 3.575 42.325 9.625 48.375L12.65 45.35ZM26.125 11.25V38.75H31.625V27.75H37.125C38.5837 27.75 39.9826 27.1705 41.0141 26.1391C42.0455 25.1076 42.625 23.7087 42.625 22.25V16.75C42.625 15.2913 42.0455 13.8924 41.0141 12.8609C39.9826 11.8295 38.5837 11.25 37.125 11.25H26.125ZM31.625 16.75H37.125V22.25H31.625V16.75Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Affordable Housing 2</h4>
							<p>Accessible Living, Sensible Prices: Affordable Co-Living Solutions Unlock Affordable Housing Without Compromising Comfort or Community.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={require('../../../src/img/mealPlan.svg')} className="img-fluid" alt="why icon missing"/> */}
								<svg width="63" height="57" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M50.25 0.375H12.75C5.84375 0.375 0.25 5.96875 0.25 12.875C0.25 17.5 2.78125 21.4687 6.5 23.6562V50.375C6.5 53.8125 9.3125 56.625 12.75 56.625H50.25C53.6875 56.625 56.5 53.8125 56.5 50.375V23.6562C60.2188 21.5 62.75 17.5 62.75 12.875C62.75 5.96875 57.1563 0.375 50.25 0.375V0.375ZM53.375 18.25L50.25 20.0625V50.375H12.75V20.0938L9.65625 18.2812C7.6875 17.0937 6.5 15.0937 6.5 12.875C6.5 9.4375 9.3125 6.625 12.75 6.625H50.25C53.6875 6.625 56.5 9.4375 56.5 12.875C56.5 15.0937 55.3125 17.125 53.375 18.25V18.25Z" fill="#FAB54E" />
									<path d="M33.7186 20.0312C33.0936 19.4375 32.3123 19.125 31.4998 19.125C30.6873 19.125 29.9061 19.4375 29.2811 20.0312L19.9061 29.4062C19.6164 29.6954 19.3865 30.0388 19.2297 30.4168C19.0729 30.7948 18.9922 31.2001 18.9922 31.6094C18.9922 32.0187 19.0729 32.4239 19.2297 32.802C19.3865 33.18 19.6164 33.5234 19.9061 33.8125L29.2811 43.1875C29.9061 43.8125 30.6873 44.125 31.4998 44.125C32.3123 44.125 33.0936 43.8125 33.7186 43.2187L43.0936 33.8438C43.3833 33.5546 43.6131 33.2112 43.7699 32.8332C43.9267 32.4552 44.0075 32.0499 44.0075 31.6406C44.0075 31.2313 43.9267 30.8261 43.7699 30.448C43.6131 30.07 43.3833 29.7266 43.0936 29.4375L33.7186 20.0312V20.0312ZM31.4998 36.5625L26.5311 31.625L31.4998 26.6562L36.4686 31.625L31.4998 36.5625Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Affordable Housing 3</h4>
							<p>Accessible Living, Sensible Prices: Affordable Co-Living Solutions Unlock Affordable Housing Without Compromising Comfort or Community.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Affordable Housing 4</h4>
							<p>Accessible Living, Sensible Prices: Affordable Co-Living Solutions Unlock Affordable Housing Without Compromising Comfort or Community.</p>
						</div>
					</OwlCarousel>

				</div>
			</section>
			<section className="blogs padd80">
				<div className="container">
					<div className="heading1 mb-5 text-center">
						<h2>Our Blogs</h2>
						<p className="mt-3">Dive into a wealth of knowledge, trends, and stories that enhance <br />your co-living experience.</p>
					</div>

					<OwlCarousel {...options} className="homeBlogs owl-carousel" >
						<div className="blogItem">
							<div className="img">
								<img src={require('../../../src/img/b1.png')} className="img-fluid" alt="blog img missing" />
							</div>
							<div className="b-body">
								<div className="date">
									<i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
									16, Aug 2023
								</div>
								<h4>The Benefits of Co-Living for Young Professionals</h4>
								<p>Discuss how co-living can provide affordable and convenient housing solutions for young professionals, emphasizing the sense of community and shared amenities.</p>
								<a href="#/" className="readmore">Read More &nbsp;<i className="fa fa-solid fa-arrow-right"></i></a>
							</div>
						</div>
						<div className="blogItem">
							<div className="img">
								<img src={require('../../../src/img/b2.png')} className="img-fluid" alt="blog img missing" />
							</div>
							<div className="b-body">
								<div className="date">
									<i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
									16, Aug 2023
								</div>
								<h4>How to Foster a Positive Co-Living Community</h4>
								<p>Share strategies for building a supportive and friendly co-living environment, including communication, social events, and conflict resolution.</p>
								<a href="#/" className="readmore">Read More &nbsp;<i className="fa fa-solid fa-arrow-right"></i></a>
							</div>
						</div>
						<div className="blogItem">
							<div className="img">
								<img src={require('../../../src/img/b3.png')} className="img-fluid" alt="blog img missing" />
							</div>
							<div className="b-body">
								<div className="date">
									<i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
									16, Aug 2023
								</div>
								<h4>Financial Benefits of Co-Living for Property Owners</h4>
								<p>Target property owners and investors by explaining how they can benefit from converting properties into co-living spaces.</p>
								<a href="#/" className="readmore">Read More &nbsp;<i className="fa fa-solid fa-arrow-right"></i></a>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</section>
			<section className="faq padd80" id="faq">
				<div className="container">
					<div className="heading1 mb-5 text-center">
						<h2>Frequently Asked Questions</h2>
						<p className="mt-3">Answers to Common Queries: Frequently Asked Questions <br />Find Quick Solutions to Your Inquiries Here.</p>
					</div>
					<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 mx-auto">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
										aria-expanded="true" aria-controls="collapseOne">
										How do I find roommates or housemates?
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Alutric Technologies Inc. communities often handle roommate matching, ensuring compatibility among residents based on preferences and lifestyle.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										What security measures are in place?
									</button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Alutric Technologies Inc. communities often handle roommate matching, ensuring compatibility among residents based on preferences and lifestyle.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Can I choose my location and roommates?
									</button>
								</h2>
								<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Alutric Technologies Inc. communities often handle roommate matching, ensuring compatibility among residents based on preferences and lifestyle.
									</div>
								</div>
							</div>


							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFour">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#headingFour" aria-expanded="false" aria-controls="headingFour">
										Are alutric technologies Inc. spaces pet-friendly?
									</button>
								</h2>
								<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Alutric Technologies Inc. communities often handle roommate matching, ensuring compatibility among residents based on preferences and lifestyle.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFive">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#headingFive" aria-expanded="false" aria-controls="headingFive">
										Are alutric technologies Inc. spaces furnished?
									</button>
								</h2>
								<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Alutric Technologies Inc. communities often handle roommate matching, ensuring compatibility among residents based on preferences and lifestyle.
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			<section className="padd80 ourteam" id="team">
				<div className="container">
					<div className="row">
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="heading1 mb-5 text-start">
								<h2>Our Team</h2>
								<p className="mt-3">Get Acquainted with the Passionate Individuals Dedicated to Enhancing Your Co-Living Experience.</p>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

							<OwlCarousel {...options} className="teamSlides owl-carousel" >
								<div className="teamItem">
									<img src={require('../../../src/img/t1.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>John H. Doe</h4>
										<label>Chief Executive Officer</label>
										<p className="mb-0">Highest-ranking in company, Managed all of segmen in company and making big decisionfor company.</p>
									</div>
								</div>
								<div className="teamItem">
									<img src={require('../../../src/img/t2.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>Emma Russel</h4>
										<label>Senior Director</label>
										<p className="mb-0">Highest-ranking in company, Managed all of segmen in company and making big decisionfor company.</p>
									</div>
								</div>
								<div className="teamItem">
									<img src={require('../../../src/img/t3.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>Michael Angelo</h4>
										<label>Director</label>
										<p className="mb-0">Highest-ranking in company, Managed all of segmen in company and making big decisionfor company.</p>
									</div>
								</div>
								<div className="teamItem">
									<img src={require('../../../src/img/t1.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>John H. Doe</h4>
										<label>Chief Executive Officer</label>
										<p className="mb-0">Highest-ranking in company, Managed all of segmen in company and making big decisionfor company.</p>
									</div>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</div>
			</section>
			<section className="cta padd80" id="cta">
				<div className="container">
					<div className="ctaarea">
						<h2>Find your best <span>apartment</span> <br />for deals</h2>
						<p>Explore a Variety of Affordable and Attractive Apartments That Fit <br />Your Budget and Lifestyle. Start Your Search Today.</p>
						<button className="btn btn-primary text-uppercase">Get Started</button>
					</div>
				</div>
			</section>

			<Modal show={userSelection} onHide={modalUserSelectionClose} className="modal-xl">
				<div class="">
					<div class="modal-content">
						<div class="row">
							<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
								<div class="modalImg">
									<img src={require('../../img/login-property1.png')} class="img-fluid" alt="Sign up" />
								</div>
							</div>
							<div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
								<div class="modalForms">
									<a href="/admin" class="redirectBtn">Home</a>
									<div class="formArea">
										<h4 id="loginModalLabel">Admin Login</h4>
										<div>
											<div class="form-group mb-4">
												<label>Email ID</label>
												<input type="text" name="email" placeholder="admin@gmail.com" class="form-control" value={formValues.formValues} onChange={handleInputChange} />
												<span className='error'>{formErrors.email}</span>
											</div>
											<div class="form-group mb-4">
												<div class="optSec" style={{ display: ShowOTP ? "block" : "none" }}>
													<div class="otpValue">
														<input type="text" name="otp1" ref={ref} maxlength="1" minlength="1" value={formValues.otp1} onChange={handleInputChange} />
														<input type="text" name="otp2" ref={ref2} maxlength="1" minlength="1" value={formValues.otp2} onChange={handleInputChange} />
														<input type="text" name="otp3" ref={ref3} maxlength="1" minlength="1" value={formValues.otp3} onChange={handleInputChange} />
														<input type="text" name="otp4" ref={ref4} maxlength="1" minlength="1" value={formValues.otp4} onChange={handleInputChange} />
													</div>
													<span className='error'>{formErrors.otp1}</span>
													<div class="countdowntime">
														<span>00:00</span>
														<a href="#/">Resend OTP</a>
													</div>
												</div>
											</div>
											<div class="form-group mb-3">
												<button class="btn btn-primary text-uppercase w-100" onClick={CheckLogin}>Login</button>
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

export default AdminLogin;