
function BookingView() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title backitem">
                    <span>Booking Requests View</span>
                    <span><a href="booking-request.html"><i class="fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>
            <div class="adminCard stayview">
                <div class="fm-area editmeal addevent profileform">
                    <div class="row g-4">
                        <div class="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-6 col-12">
                            <label>Upload Image</label>
                            <div class="userimglg">
                                <img src={require('./../../img/addevent.png')} class="img-fluid" alt="Add Events" />
                                    <div class="delete">
                                        <img src={require('./../../img/icons/deleteCircle.png')} alt="Delete" class="img-fluid" />
                                    </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="eventname" value="John Mark" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Email Id</label>
                                <input type="text" name="eventname" value="john.mark@gmail.com" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Mobile No.</label>
                                <input type="text" name="eventname" value="60 7234 4327" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Community</label>
                                <input type="text" name="eventname" value="Student" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Location</label>
                                <input type="text" name="eventname" value="Ontario" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Proparty name</label>
                                <input type="text" name="eventname" value="Student" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Room name</label>
                                <input type="text" name="eventname" value="#101 Twin Bedroom" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Room type</label>
                                <input type="text" name="eventname" value="Shared" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Move in</label>
                                <input type="text" name="eventname" value="Fri, Dec 01" readonly />
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Move out</label>
                                <input type="text" name="eventname" value="Thu, Feb 01" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Monthly rent</label>
                                <input type="text" name="eventname" value="$2,156" readonly />
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label>Security deposit</label>
                                <input type="text" name="eventname" value="50%" readonly />
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

export default BookingView;