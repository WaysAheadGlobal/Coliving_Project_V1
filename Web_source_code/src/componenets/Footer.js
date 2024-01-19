import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer padd80 pb-0">
	<div className="container">
		<div className="row mb-5">
			<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-5 mb-3">
				<div className="foot">
					<h4>Co living</h4>
					<ul className="connectinfo">
						<li>
							<i className="fa fa-solid fa fa-envelope"></i>
							<a href="mailto:coliving@company.ca">coliving@company.ca</a>
						</li>
						<li>
							<i className="fa fa-solid fa fa-phone"></i>
							<a href="tel:+1-416-839-6023">+1-416-839-6023</a>
						</li>
						<li>
							<i className="fa fa-solid fa fa-map-marker"></i>
							2366 Merton Street, Toronto <br />Canada
						</li>
					</ul>
				</div>
			</div>
			<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
				<div className="foot">
					<h4>Our Service</h4>
					<ul className="links">
						<li>
						<Link to={"/#aboutus"}>About Us</Link>
						</li>
						<li>
							<a href="#/">Feature</a>
						</li>
						<li>
							<a href="#/">Why Us</a>
						</li>
						<li>
							<a href="#/">Blog</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
				<div className="foot">
					<h4>More Links</h4>
					<ul className="links">
						<li>
							<a href="#/">FAQs</a>
						</li>
						<li>
							<a href="#/">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-3">
				<div className="foot">
					<h4>Platform Connect</h4>
					<p>Join a community of individuals who share your interests and enjoy the advantages of co-living. Join a community of individuals who share your interests and enjoy the advantages of co-living....</p>
					<div className="socialmedia">
						<a href="#/" target="_blank"><i className="fa-brands fa fa-instagram"></i></a>
						<a href="#/" target="_blank"><i className="fa-brands fa fa-youtube"></i></a>
						<a href="#/" target="_blank"><i className="fa-brands fa fa-square-twitter"></i></a>
						<a href="#/" target="_blank"><i className="fa-brands fa fa-facebook"></i></a>
					</div>
				</div>
			</div>
		</div>
		<div className="row copy">
			<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
				<a href="/">
					<img src={require('./../../src/img/footerLogo.png')} className="img-fluid mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3" alt="footer logo" />
				</a>
			</div>
			<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-xxl-end text-xl-end text-lg-end text-md-end text-sm-start text-start">
				<p className="mb-0 text-white">© Co living 2023 all rights reserved</p>
			</div>
		</div>
	</div>
</footer>
    );
}

export default Footer;