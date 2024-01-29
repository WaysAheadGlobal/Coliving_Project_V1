import { useNavigate } from 'react-router-dom';
function AddEvents() {
    const history = useNavigate();
    const returntoMeals = (e) => {
        history("/owner/events");
    }
    return (
        <div class="content-area">
            <h4 class="content-title backitem">
                <span>Add Event</span>
                <span><a href="/owner/events"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
            </h4>
            <div class="fm-area editmeal addevent profileform">
                <div class="row g-4 align-items-center">
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <label>Upload Image</label>
                        <div class="userimglg">
                            <img src={require('../../img/addevent.png')} class="img-fluid" alt="Add Events" />
                                <div class="delete">
                                    <img src="../img/icons/deleteCircle.png" alt="Delete" class="img-fluid" />
                                </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Event Name</label>
                            <input type="text" name="eventname" placeholder="Christmas carnival" />
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Date of Birth</label>
                            <div class="input-group date" id="datepicker">
                                <input type="date" name="dob" class="form-control" id="date" placeholder="Jan-01-1999" />
                                    {/* <span class="input-group-append">
                                        <span class="input-group-text bg-light d-block">
                                            <i class="fa fa-calendar"></i>
                                        </span>
                                    </span> */}
                            </div>
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
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Location</label>
                            <input type="text" name="charges" placeholder="K-77 opp. Starbucks" />
                        </div>
                    </div>
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="buttonGrp text-center mt-4">
                            <button class="btn btn-secondary text-uppercase" onClick={returntoMeals}>cancel</button>
                            <button class="btn btn-primary text-uppercase" onClick={returntoMeals}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvents;