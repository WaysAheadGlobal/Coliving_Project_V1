import './../../../src/assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import BlogsAPI from '../../data/blogs.json'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {
	const history = useNavigate();
	const [province, SetProvince] = useState('');
	const SaveProvince = (e) => {
		const {name, value} = e.target;
		SetProvince(value);
	}

	const GotoSearch = (e) => {
		if(province){
			history("/listing/"+province.toLowerCase())
		}
		else{
			toast.error("Please enter Province to search", {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	}

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
				items: 2,
			},
			1000: {
				items: 3,
	
			}
		},
	};
	return (
		<>
		<ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
			<section className="banner homeBanner">
				<img src={require('../../../src/img/banner.png')} className="img-fluid" alt="Banner" />
				<div className="highlights">
					<h1>Sharing a living space is <br />more beneficial.</h1>
					<p>Find flexible, convenient, and affordable coliving homes with <br />friends included</p>
					<div className="searchForm">
						<input type="text" placeholder="Search by Province.." value={province} onChange={SaveProvince} />
						{/* <select>
							<option value="0">Select</option>
						</select> */}
						<div className="bannBtn" onClick={GotoSearch}>
							<img src={require('../../../src/img/searchBtn.png')} className="img-fluid" alt="search btn" />
						</div>
					</div>
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
						<p className="mt-3">Discover the Difference: Our Co-Living Experience <br/>a Unique Blend of Comfort, Community, and Convenience.
</p>
					</div>

					<OwlCarousel {...options} className="whyBlocks owl-carousel" >
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={'/assets/img/housing.svg'} className="img-fluid" alt="why icon missing"/> */}
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Smart Matching</h4>
							<p style={{width: '135px;'}}>Our advanced AI algorithm ensures compatibility based on shared interests and lifestyles, fostering genuine connections among co-living residents.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={require('../../../src/img/checks.svg')} className="img-fluid" alt="why icon missing"/> */}
								<svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M33 0.25C19.25 0.25 8.25 11.25 8.25 25C8.25 38.75 19.25 49.75 33 49.75C46.75 49.75 57.75 38.75 57.75 25C57.75 11.25 46.75 0.25 33 0.25ZM33 44.25C22.275 44.25 13.75 35.725 13.75 25C13.75 14.275 22.275 5.75 33 5.75C43.725 5.75 52.25 14.275 52.25 25C52.25 35.725 43.725 44.25 33 44.25ZM56.375 48.375C62.425 42.325 66 34.075 66 25C66 15.925 62.425 7.675 56.375 1.625L53.35 4.65C58.575 9.875 61.875 17.025 61.875 25C61.875 32.975 58.575 40.125 53.35 45.35L56.375 48.375ZM12.65 45.35C7.425 40.125 4.125 32.975 4.125 25C4.125 17.025 7.425 9.875 12.65 4.65L9.625 1.625C3.575 7.675 0 15.925 0 25C0 34.075 3.575 42.325 9.625 48.375L12.65 45.35ZM26.125 11.25V38.75H31.625V27.75H37.125C38.5837 27.75 39.9826 27.1705 41.0141 26.1391C42.0455 25.1076 42.625 23.7087 42.625 22.25V16.75C42.625 15.2913 42.0455 13.8924 41.0141 12.8609C39.9826 11.8295 38.5837 11.25 37.125 11.25H26.125ZM31.625 16.75H37.125V22.25H31.625V16.75Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Comprehensive Listings</h4>
							<p style={{width: '135px;'}}>Landlords showcase properties with vivid photos, videos, and detailed descriptions, empowering users to make informed decisions about their potential living spaces.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								{/* <img src={require('../../../src/img/mealPlan.svg')} className="img-fluid" alt="why icon missing"/> */}
								<svg width="63" height="57" viewBox="0 0 63 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M50.25 0.375H12.75C5.84375 0.375 0.25 5.96875 0.25 12.875C0.25 17.5 2.78125 21.4687 6.5 23.6562V50.375C6.5 53.8125 9.3125 56.625 12.75 56.625H50.25C53.6875 56.625 56.5 53.8125 56.5 50.375V23.6562C60.2188 21.5 62.75 17.5 62.75 12.875C62.75 5.96875 57.1563 0.375 50.25 0.375V0.375ZM53.375 18.25L50.25 20.0625V50.375H12.75V20.0938L9.65625 18.2812C7.6875 17.0937 6.5 15.0937 6.5 12.875C6.5 9.4375 9.3125 6.625 12.75 6.625H50.25C53.6875 6.625 56.5 9.4375 56.5 12.875C56.5 15.0937 55.3125 17.125 53.375 18.25V18.25Z" fill="#FAB54E" />
									<path d="M33.7186 20.0312C33.0936 19.4375 32.3123 19.125 31.4998 19.125C30.6873 19.125 29.9061 19.4375 29.2811 20.0312L19.9061 29.4062C19.6164 29.6954 19.3865 30.0388 19.2297 30.4168C19.0729 30.7948 18.9922 31.2001 18.9922 31.6094C18.9922 32.0187 19.0729 32.4239 19.2297 32.802C19.3865 33.18 19.6164 33.5234 19.9061 33.8125L29.2811 43.1875C29.9061 43.8125 30.6873 44.125 31.4998 44.125C32.3123 44.125 33.0936 43.8125 33.7186 43.2187L43.0936 33.8438C43.3833 33.5546 43.6131 33.2112 43.7699 32.8332C43.9267 32.4552 44.0075 32.0499 44.0075 31.6406C44.0075 31.2313 43.9267 30.8261 43.7699 30.448C43.6131 30.07 43.3833 29.7266 43.0936 29.4375L33.7186 20.0312V20.0312ZM31.4998 36.5625L26.5311 31.625L31.4998 26.6562L36.4686 31.625L31.4998 36.5625Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Seamless User Experience</h4>
							<p style={{width: '135px;'}}>A user-centric design simplifies the housing search process with an intuitive interface, supported by a responsive team dedicated to ensuring a stress-free experience.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Personalized Profiles</h4>
							<p style={{width: '135px;'}}>Users create profiles highlighting preferences and interests, aiding our matching algorithm and allowing authentic connections with like-minded co-livers.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Waitlist Efficiency</h4>
							<p style={{width: '135px;'}}>In a high-demand market, our waitlist feature keeps users informed about upcoming availability, enabling proactive planning for the ideal living situation.</p>
						</div>
						<div className="whyItem text-center">
							<div className="icon">
								<svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" alt="why icon missing">
									<path d="M4.85495 0.324707H54.0628C56.7782 0.324707 59 2.43485 59 5.11311V36.116C59 38.7943 56.7782 41.0667 54.0628 41.0667H34.8898V49.1015H48.8787C50.9358 49.1015 51.1004 55.7566 51.3473 56.0001H7.65272C7.65272 56.0001 7.65272 49.1015 10.1213 49.1015H24.1102V41.0667H4.85495C2.13947 41.0667 0 38.7943 0 36.116V5.11311C0 2.43485 2.13947 0.324707 4.85495 0.324707ZM4.85495 36.116H54.0628V5.11311H4.85495V36.116Z" fill="#FAB54E" />
								</svg>

							</div>
							<h4>Precision Search Filters</h4>
							<p style={{width: '135px;'}}>Tailor your search with advanced filters – location, room size, amenities, and compatibility preferences – ensuring you find a co-living space that suits your lifestyle perfectly.</p>
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
					{
						BlogsAPI && BlogsAPI.length > 0 && BlogsAPI.map((blog, index) => {
							return(
								<div className="blogItem">
									<div className="img">
										<img src={require(`../../../src/img/`+blog.Image)} className="img-fluid" alt="blog img missing" />
									</div>
									<div className="b-body">
										<div className="date">
											<i className="fa fa-regular fa-clock"></i>&nbsp;&nbsp;
											{blog.BlogDate}
										</div>
										<h4>{blog.Title}</h4>
										<p>{blog.ShortDescription}</p>
										<a href={`/blog-details/`+ blog.Slug} className="readmore">Read More &nbsp;<i className="fa fa-solid fa-arrow-right"></i></a>
									</div>
								</div>
							)})
					}
					</OwlCarousel>
				</div>
			</section>
			<section className="faq padd80" id="faq">
				<div className="container">
					<div className="heading1 mb-5 text-center">
						<h2>Frequently Asked Questions</h2>
						<p className="mt-3">Answers to Common Queries: Frequently Asked Questions <br />Find Quick Solutions to Your Inquiries Here.
</p>
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
									Utilize our advanced AI matching algorithm to connect with compatible individuals based on shared interests, lifestyles, and preferences.
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
										We prioritize your safety with robust security measures, including secure user profiles, encrypted communication, and thorough vetting processes for both landlords and tenants.
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
									Yes, our platform offers personalized choices. You can refine your search based on location, room size, amenities, and compatibility preferences, ensuring you find the perfect co-living space with the right roommates.
									</div>
								</div>
							</div>


							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFour">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										Are Alutric Technologies Inc. spaces pet-friendly?
									</button>
								</h2>
								<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
									Yes, we understand the importance of furry companions. Many of our spaces are pet-friendly, providing a welcoming environment for you and your pets.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingFive">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										Are Alutric Technologies Inc. spaces furnished?
									</button>
								</h2>
								<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
									data-bs-parent="#accordionExample">
									<div className="accordion-body">
									Absolutely. Our co-living spaces come fully furnished, offering convenience and comfort so you can move in hassle-free and focus on building meaningful connections with your housemates.
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
									<img src={require('../../../src/img/team1.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>John H. Doe</h4>
										<label>Chief Executive Officer</label>
										<p className="mb-0">Forward-thinking CEO, guiding the company with a visionary approach, driving innovation, and ensuring overall success.</p>
									</div>
								</div>
								<div className="teamItem">
									<img src={require('../../../src/img/team2.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>Emma Russel</h4>
										<label>Senior Director</label>
										<p className="mb-0">Seasoned Senior Director, orchestrating strategic initiatives, fostering collaboration across teams, and contributing to the company's long-term goals.</p>
									</div>
								</div>
								<div className="teamItem">
									<img src={require('../../../src/img/team3.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>Michael Angelo</h4>
										<label>Director</label>
										<p className="mb-0">Diligent Director, managing and optimizing operational functions, implementing efficiency measures, and playing a key role in the organization's day-to-day success.</p>
									</div>
								</div>
								{/* <div className="teamItem">
									<img src={require('../../../src/img/t1.png')} className="img-fluid" alt="team img missing" />
									<div className="teambody text-center">
										<h4>John H. Doe</h4>
										<label>Chief Executive Officer</label>
										<p className="mb-0">Highest-ranking in company, Managed all of segmen in company and making big decisionfor company.</p>
									</div>
								</div> */}
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

		</>
	);
}

export default Home;
