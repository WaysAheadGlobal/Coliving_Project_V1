
function ManagePropertyView() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title backitem">
                    <span>Manage Property View</span>
                    <span><a href="/admin/manage-property"><i class="fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                </h4>
            </div>

            <div class="adminCard">
                <div class="addroomsec editprop mangePropView">
                    <div class="fm-area stayview pb-5">
                        <label class="formlabel">Property detail</label>
                        <div class="row g-4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                <div class="form-group">
                                    <div class="imgupblocks">
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Enter home/Property name</label>
                                    <input type="text" name="" value="Urban Styled" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>House type</label>
                                    <input type="text" name="" value="Apartment" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Total rooms</label>
                                    <input type="text" name="" value="4" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Bathroom</label>
                                    <input type="text" name="" value="1" readonly />v
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Living room</label>
                                    <input type="text" name="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Kitchen</label>
                                    <input type="text" name="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Residents</label>
                                    <input type="text" name="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Apartment size (Sq ft)</label>
                                    <input type="text" name="" value="687" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>EV Charger</label>
                                    <input type="text" name="" value="Available" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Fire extinguisher</label>
                                    <input type="text" name="" value="Yes" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Travel Guide</label>
                                    <input type="text" name="" value="Yes" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Events</label>
                                    <input type="text" name="" value="Yes" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 pb-5">
                        <label class="formlabel">1. Room detail</label>
                        <div class="row g-4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                <div class="form-group">
                                    <div class="imgupblocks">
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="size" placeholder="" value="#101 Twin Bedroom" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room size (Sq ft)</label>
                                    <input type="text" name="size" placeholder="" value="74" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Bed</label>
                                    <input type="text" name="size" placeholder="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Bedroom Type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Furniture</label>
                                    <input type="text" name="size" placeholder="" value="Full Furnished" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room rent ($)</label>
                                    <input type="text" name="size" placeholder="" value="$2,156" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Current status of rooms</label>
                                    <input type="text" name="size" placeholder="" value="Available" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 pb-5">
                        <label class="formlabel">2. Room detail</label>
                        <div class="row g-4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                <div class="form-group">
                                    <div class="imgupblocks">
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="size" placeholder="" value="#101 Twin Bedroom" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room size (Sq ft)</label>
                                    <input type="text" name="size" placeholder="" value="74" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Bed</label>
                                    <input type="text" name="size" placeholder="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Bedroom Type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Furniture</label>
                                    <input type="text" name="size" placeholder="" value="Full Furnished" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room rent ($)</label>
                                    <input type="text" name="size" placeholder="" value="$2,156" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Current status of rooms</label>
                                    <input type="text" name="size" placeholder="" value="Available" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 ">
                        <label class="formlabel">3. Room detail</label>
                        <div class="row g-4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                <div class="form-group">
                                    <div class="imgupblocks">
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev">
                                                <img src={require('./../../img/roompic.png')} alt="Room pic" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                        <div class="imgupitem">
                                            <div class="imgprev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room Name</label>
                                    <input type="text" name="size" placeholder="" value="#101 Twin Bedroom" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room size (Sq ft)</label>
                                    <input type="text" name="size" placeholder="" value="74" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>No. of Bed</label>
                                    <input type="text" name="size" placeholder="" value="1" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Bedroom Type</label>
                                    <input type="text" name="size" placeholder="" value="Shared" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Furniture</label>
                                    <input type="text" name="size" placeholder="" value="Full Furnished" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Room rent ($)</label>
                                    <input type="text" name="size" placeholder="" value="$2,156" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Current status of rooms</label>
                                    <input type="text" name="size" placeholder="" value="Available" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview amilists selectaminities border-bottom-0">
                        <label class="formlabel">amenities</label>
                        <ul>
                            <li>Air Condition</li>
                            <li>Bikes</li>
                            <li>billiards/Pool</li>
                            <li>Couples Friendly</li>
                            <li>Fast Wifi</li>
                            <li>Gym/Fitness Studio</li>
                            <li>Heating</li>
                            <li>Iron</li>
                            <li>Kid Friendly</li>
                            <li>Kitchen</li>
                            <li>Cooling</li>
                            <li>Meeting Room</li>
                            <li>Movie Nights</li>
                        </ul>
                    </div>
                    <div class="fm-area stayview border-bottom-0 ">
                        <label class="formlabel">Location</label>
                        <div class="row g-4">
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Country</label>
                                    <input type="text" name="size" placeholder="" value="Canada" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Province</label>
                                    <input type="text" name="size" placeholder="" value="Ontario" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" name="size" placeholder="" value="1337 Merivale Road" readonly />
                                </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Landmark</label>
                                    <input type="text" name="size" placeholder="" value="Morningside Park" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Zip Code</label>
                                    <input type="text" name="size" placeholder="" value="K2H 5B6" readonly />
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label>Mark on google</label>
                                    <input type="text" name="size" placeholder="" value="Enter google map link" readonly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 ">
                        <label class="formlabel">Meal Plan</label>
                        <div class="selectedMeals">
                            <ul>

                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                        <label class="form-check-label" for="flexCheckCheckedDisabled">
                                            Breakfast
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                        <label class="form-check-label" for="flexCheckCheckedDisabled">
                                            Lunch
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                        <label class="form-check-label" for="flexCheckCheckedDisabled">
                                            Snack
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                        <label class="form-check-label" for="flexCheckCheckedDisabled">
                                            Dinner
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 ">
                        <label class="formlabel">Cancellation Policy: Non - refundable</label>
                        <div class="norefund">
                            <img src={require('./../../img/icons/close1.png')} alt="Room pic" class="img-fluid" />
                            <div class="notitle">
                                <label>After booking</label>
                                <p>No refund</p>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 ">
                        <label class="formlabel">Description</label>
                        <div class="row g-4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group">
                                    <textarea readonly >This apartment is available on a flexible 1-18 month lease. Monthly rent rate is determined by furnishing preference, move-in date and move-out date. Amenities of this home: Dishwasher, Furnished Common Areas, Wi-Fi - Paid separately (High-Speed), Guarantors Allowed, 32-inch Flat-Screen TV, Street parking, Laundry in home (free), Hardwood Flooring, Microwave, Oven, Refrigerator, also, this unit is conveniently located, several local parks, restaurants and bars are just minutes away. Welcome to the easiest rental experience of your life. Rent furnished or unfurnished apartments for 1 - 18 months, bypass hidden costs and broker fees and enjoy an easy move-in. As a resident, you will have access to 24/7 support and monthly cleanings of the homes shared spaces.</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fm-area stayview border-bottom-0 pt-0 pb-5">
                        <label class="formlabel">Host Information</label>
                        <div class="hostinfo">
                            <div class="hostimg mb-4">
                                <img src={require('./../../img/icons/user.png')} class="img-fluid" alt="Host" />
                                <label>David Oliver</label>
                                <div class="badge3 text-uppercase">
                                    <img src={require('./../../img/icons/verified.png')} class="img-fluid" alt="Verified" />
                                    Verified host
                                </div>
                            </div>
                            <p>David Oliver manages this listing in agreement with Coliving.com. Every property is vetted for quality, and hosts are pre-qualified to meet Coliving.com's standards. They are open to any questions anytime before and during your stay.</p>
                            <ul class="amiitems" id="hosttime">
                                <li>
                                    <img src={require('./../../img/icons/calend.png')} class="img-fluid" alt="Calender" />
                                    Joined in <span>August 2019</span>
                                </li>
                                <li>
                                    <img src={require('./../../img/icons/response.png')} class="img-fluid" alt="Calender" />
                                    Response rate: <span>92%</span>
                                </li>
                                <li>
                                    <img src={require('./../../img/icons/time.png')} class="img-fluid" alt="Calender" />
                                    Response time: <span>11 hours</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-4 mb-3 pt-5 buttonGrp text-center">
                            <button class="btn btn-secondary text-uppercase">reject</button>
                            <button class="btn btn-primary text-uppercase">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManagePropertyView;