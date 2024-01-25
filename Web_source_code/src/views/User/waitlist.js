

function WaitList() {
    return(
        <div class="content-area">
				<h4 class="content-title backitem">
					<span>my stay {">"} waitlist for this property</span>
					<span><a href="/user/my-stay"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
				</h4>
				<div class="profileform myStayPage">
					<div class="row g-4">
						<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="waititem">
								<div class="usrnme">
									<img src={require("../../img/user4.png" )} />
									<div class="nmepos">
										<h4>Michael Gordon,</h4>
										<span>26,</span>
										<span>Lawyer</span>
									</div>
								</div>
								<div class="matchedprof">
									<img src={require('../../img/icons/Speed.png')} alt="Spped Icons" class="img-fluid" />
									<span>71%</span>
									<div class="profstatus">profile matched</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="waititem">
								<div class="usrnme">
									<img src={require("../../img/user5.png" )} />
									<div class="nmepos">
										<h4>Annalise Keating,</h4>
										<span>29,</span>
										<span>Entrepreneur</span>
									</div>
								</div>
								<div class="matchedprof">
									<img src={require('../../img/icons/Speed.png')} alt="Spped Icons" class="img-fluid" />
									<span>57%</span>
									<div class="profstatus">profile matched</div>
								</div>
							</div>
						</div>
						<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="waititem">
								<div class="usrnme">
									<img src={require("../../img/user6.png" )} />
									<div class="nmepos">
										<h4>Alex Kepner,</h4>
										<span>21,</span>
										<span>Student</span>
									</div>
								</div>
								<div class="matchedprof">
									<img src={require('../../img/icons/Speed.png')} alt="Spped Icons" class="img-fluid" />
									<span>44%</span>
									<div class="profstatus">profile matched</div>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div class="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 my-5">
                        <div class="loyalnote mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-3">
                            <img src={require('../../img/icons/exclamination.png')} class="img-fluid" alt="VETO power" />
                            Take a look at your Loyalty Points and check your power to VETO.
                        </div>
                    </div>
</div>
    );
}
export default WaitList;