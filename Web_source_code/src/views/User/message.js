import {Link, useNavigate} from 'react-router-dom';

function Messages() {
    const history = useNavigate();
    const gotoMessageDetail = (e) => {
        history("/user/messagechat");
    }
    return (
        <div class="content-area">
				<h4 class="content-title">Message</h4>
				<div class="profileform msgpage">
					<div class="messageItem">
						<div class="detleft">
							<div class="msgimg">
								<img src={require('../../img/user3.png')} class="img-fluid" alt="User img" />
							</div>
							<h5>David Oliver </h5>
							<div class="verifiedhost">
								<img src={require('../../img/icons/check-curve-blank.png')} class="img-fluid" alt="Check" />
								Verified host
							</div>
						</div>
						<div class="dettime">
							9:54 PM
						</div>
					</div>
					<div class="row">
						<div class="col-xxl-11 col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-4">
							<div class="msghead">
								<img src={require('../../img/icons/ideabulb.png')} class="img-fluid" alt="Idea Bulb" />
								<h4>Make a Special Request</h4>
							</div>
						</div>
						<div class="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-5">
							<div class="row g-5">
								<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
									<ul class="catitems">
										<li>
											<a href="javascript:void(0)" onClick={gotoMessageDetail}>
												pair-up
											</a>
										</li>
										<li>
											<a href="javascript:void(0)" onClick={gotoMessageDetail}>
												UTILITY
											</a>
										</li>
										<li>
											<a href="javascript:void(0)" onClick={gotoMessageDetail}>
												APPLIANCE
											</a>
										</li>
										<li>
											<a href="javascript:void(0)" onClick={gotoMessageDetail}>
												OTHER
											</a>
										</li>
									</ul>
								</div>
								<div class="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
									<ul class="textlist">
										<li>Want to PAIR-UP and live in the same space with someone you already know ?</li>
										<li>Discussing the use of utilities, especially if you anticipate using them differently than the other tenants.</li>
										<li>Asking for specific furniture or appliances that might be missing or necessary for your comfort.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
</div>
    );
}
export default Messages;