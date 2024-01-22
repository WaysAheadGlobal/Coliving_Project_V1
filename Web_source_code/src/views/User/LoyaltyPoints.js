

function LoyaltyPoints() {
    return(
        <div class="content-area">
            <h4 class="content-title">loyalty points</h4>
            <div class="profileform">
                <div class="row g-4">
                    <div class="col-12 mb-3 text-center">
                        <div class="pointstatus">
                            my reward points : <span>350</span>
                        </div>
                        <div class="perkheading">
                            <img src={require('../../img/icons/rewards.png')} alt="Unlock Perks" class="img-fluid" />
                                Accumulate Points and Unlock Perks
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                        <div class="pointitem">
                            <div class="catlabel">
                                <img  src={require('../../img/icons/car.png')} class="img-fluid" alt="Car Pooling" />
                                    <label>Car Pooling</label>
                            </div>
                            <div class="collectpoint">
                                50 Points
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                        <div class="pointitem">
                            <div class="catlabel">
                                <img src={require('../../img/icons/voulenterr.png')} class="img-fluid" alt="Volunteering" />
                                    <label>Volunteering</label>
                            </div>
                            <div class="collectpoint">
                                40 Points
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                        <div class="pointitem">
                            <div class="catlabel">
                                <img src={require('../../img/icons/voulenterr.png')} class="img-fluid" alt="Referrals" />
                                    <label>Referrals</label>
                            </div>
                            <div class="collectpoint">
                                30 Points
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                        <div class="pointitem">
                            <div class="catlabel">
                                <img src={require('../../img/icons/common.png')} class="img-fluid" alt="Common Chores" />
                                    <label>Common Chores</label>
                            </div>
                            <div class="collectpoint">
                                50 Points
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-12 my-5">
                        <div class="loyalnote mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-3">
                            <img src={require('../../img/icons/exclamination.png')} class="img-fluid" alt="VETO power" />
                                You need to have a minimum  of 1500 Reward Points to use your VETO power.
                        </div>
                    </div>
                    <div class="col-xxl-10 col-xl-10 col-lg-10 col-sm-12 col-12 mx-auto text-xxl-end text-xl-end text-lg-end text-md-end text-sm-center text-center">
                        <a class="btn btn-primary text-uppercase" href="/user/reward-history">my reward history</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoyaltyPoints;