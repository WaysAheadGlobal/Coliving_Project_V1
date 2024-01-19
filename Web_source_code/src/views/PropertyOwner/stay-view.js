
function StayView() {
    return (
        <div class="content-area proppage">
            <h4 class="content-title backitem">
                <span>Stay request View</span>
                <span><a href="stay-request.html"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
            </h4>
            <div class="fm-area stayview">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal detail</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Apartment detail</button>
                    </li>
                </ul>
                <div class="tab-content mt-5" id="myTabContent">
                    <div class="tab-pane profileform p-0 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row g-4">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="userimglg">
                                    <img src="../img/userimg.png" class="img-fluid" alt="User uploaded image" />
                                </div>
                            </div>
                            <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 ps-xxl-5 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-2 ps-2 ">
                                <div class="form-group">
                                    <label>Bio</label>
                                    <textarea class="bio">Abc</textarea>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="propname" value="John Mark" placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Email Id</label>
                                    <input type="text" name="propname" value="john.mark@gmail.com" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Mobile No.</label>
                                    <input type="text" name="propname" value="60 7234 4327" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>ID proof</label>
                                    <input type="text" name="propname" value="Idcard.jpg" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" name="propname" value="1090 Adelaide St" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="text" name="propname" value="Toronto" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Province</label>
                                    <input type="text" name="propname" value="Ontario" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Zip code</label>
                                    <input type="text" name="propname" value="M1L 3K7" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Country</label>
                                    <input type="text" name="propname" value="Canada" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Date of Birth</label>
                                    <input type="text" name="propname" value="01-Jan-1999" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Age group preference</label>
                                    <input type="text" name="propname" value="20 - 30" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Sleeping habits</label>
                                    <input type="text" name="propname" value="11:00 - 12:00 PM" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Your marital status</label>
                                    <input type="text" name="propname" value="Unmarried" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Language preferences</label>
                                    <input type="text" name="propname" value="English" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Communication</label>
                                    <input type="text" name="propname" value="Introverts" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Willing to share household chores</label>
                                    <input type="text" name="propname" value="Yes" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Co-ed</label>
                                    <input type="text" name="propname" value="Uncomfortable" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Drinking comfort level</label>
                                    <input type="text" name="propname" value="No" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Smoking comfort level</label>
                                    <input type="text" name="propname" value="No" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Cannabis comfort level</label>
                                    <input type="text" name="propname" value="No" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Dietary preferences</label>
                                    <input type="text" name="propname" value="Vegan" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane  profileform p-0 fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row g-4">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="userimglg">
                                    <img src="../img/mystay.png" class="img-fluid" alt="User uploaded image" />
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Apartment Name</label>
                                    <input type="text" name="propname" value="Urban Styled Apt." placeholder="" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="propname" value="#101 Twin Bedroom" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Monthly Rent</label>
                                    <input type="text" name="propname" value="$2,156" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Security Deposit</label>
                                    <input type="text" name="propname" value="50%" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move In</label>
                                    <input type="text" name="propname" value="Fri, Dec 01 2024" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Move Out</label>
                                    <input type="text" name="propname" value="Thu, Feb 01 2024" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="propname" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Location</label>
                                    <input type="text" name="propname" value="Ontario" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="buttonGrp text-center mt-4">
                                    <button class="btn btn-secondary text-uppercase">reject</button>
                                    <button class="btn btn-primary text-uppercase">Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayView;