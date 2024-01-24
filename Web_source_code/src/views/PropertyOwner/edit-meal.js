
function AddMeal() {
    return (
        <div class="content-area">
            <h4 class="content-title backitem">
                <span>Add Meal</span>
                <span><a href="meal.html"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
            </h4>
            <div class="fm-area editmeal addevent profileform">
                <div class="row g-4 align-items-center">
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <label>Upload Image</label>
                        <div class="userimglg">
                            <img src={require('../../img/editmealimg.png')} class="img-fluid" alt="Add Events" />
                                {/* <!-- <div class="delete">
                                    <img src="../img/icons/deleteCircle.png" alt="Delete" class="img-fluid">
                                </div> --> */}
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Meal Name</label>
                            <input type="text" name="eventname" placeholder="Breakfast" />
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Location</label>
                            <input type="text" name="eventname" placeholder="Urban Styled Apt." />
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Charges ($)</label>
                            <input type="text" name="charges" placeholder="12" />
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Time</label>
                            <select>
                            <option>7 - 8 PM</option>
                                <option>8 - 9 PM</option>
                                <option>9 - 10 PM</option>
                                <option>10 - 11 PM</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="buttonGrp text-center mt-4">
                            <button class="btn btn-secondary text-uppercase">cancel</button>
                            <button class="btn btn-primary text-uppercase">update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMeal;