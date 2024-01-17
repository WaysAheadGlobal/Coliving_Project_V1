
function ManageUserView() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title backitem">
                    <span>Manage User View</span>
                    <span><a href="manager-user.html"><i class="fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>
            <div class="adminCard stayview fm-area">
                <div class="profileform p-xxl-5 p-xl-0 p-lg-0 p-md-0 p-sm-0 p-0">
                    <div class="row g-4">
                        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-5 col-sm-6 col-12">
                            <div class="userimglg">
                                <img src={require('./../../img/userimg.png')} class="img-fluid" alt="User uploaded image" />
                            </div>
                        </div>
                        <div class="col-xxl-9 col-xl-8 col-lg-7 col-md-7 col-sm-12 col-12 ps-xxl-5 ps-xl-0 ps-lg-0 ps-md-0 ps-sm-3 ps-3 ">
                            <div class="form-group">
                                <label>Bio</label>
                                <textarea class="bio">Abc</textarea>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="propname" value="John Mark" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Email Id</label>
                                <input type="text" name="propname" value="john.mark@gmail.com" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Mobile No.</label>
                                <input type="text" name="propname" value="60 7234 4327" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>ID proof</label>
                                <input type="text" name="propname" value="Idcard.jpg" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Gender</label>
                                <input type="text" name="propname" value="Male" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Community</label>
                                <input type="text" name="propname" value="Student" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" name="propname" value="1090 Adelaide St" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" name="propname" value="Toronto" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Province</label>
                                <input type="text" name="propname" value="Ontario" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Zip code</label>
                                <input type="text" name="propname" value="M1L 3K7" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Country</label>
                                <input type="text" name="propname" value="Canada" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Date of Birth</label>
                                <input type="text" name="propname" value="01-Jan-1999" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Age group preference</label>
                                <input type="text" name="propname" value="20 - 30" placeholder="" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Sleeping habits</label>
                                <input type="text" name="propname" value="11:00 - 12:00 PM" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Your marital status</label>
                                <input type="text" name="propname" value="Unmarried" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Language preferences</label>
                                <input type="text" name="propname" value="English" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Communication</label>
                                <input type="text" name="propname" value="Introverts" placeholder="" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Willing to share household chores</label>
                                <input type="text" name="propname" value="Yes" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Co-ed</label>
                                <input type="text" name="propname" value="Uncomfortable" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Drinking comfort level</label>
                                <input type="text" name="propname" value="No" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Smoking comfort level</label>
                                <input type="text" name="propname" value="No" placeholder="" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Cannabis comfort level</label>
                                <input type="text" name="propname" value="No" placeholder="" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Dietary preferences</label>
                                <input type="text" name="propname" value="Vegan" placeholder="" readonly />
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
        </>
    );
}

export default ManageUserView;