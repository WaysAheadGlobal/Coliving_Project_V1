import master from './../../data/masterData.json';
import React, { useRef, useState  } from "react";
import config from "../../Config/config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DetailTab1(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="detail-1 p-detail">
            <h4>Personal Detail</h4>
            <div className="fm-area">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginBottom: '20px'}}>
                    <div class="form-group">
                        <label>Your Photo</label>
                        <div class="imgupblocks">
                            <div class="imgupitem">
                                <div class="imgprev" onClick={props.handleClick}>
                                    {!props.detail.profilePic ? null :
                                        <img src={`${config.ImageUrl}images/users/` + props.detail.profilePic} alt="Room pic" class="img-fluid" />
                                    }
                                    <input
                                        type="file"
                                        onChange={props.handleChange}
                                        ref={props.hiddenFileInput}
                                        style={{ display: 'none' }} // Make the file input element invisible
                                    />
                                </div>
                                {/* <div class="addmorerooms">
                                    <button class="plusbtn"><i class="fa fa-solid fa-plus"></i></button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Name <span className='mandatory'>*</span></label>
                            <input type="text" name="Fullname" placeholder="John Mark" value={props.detail.Fullname} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.Fullname}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Email Id <span className='mandatory'>*</span></label>
                            <input type="text" name="email" placeholder="john.mark@gmail.com" value={props.detail.email} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.email}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Mobile No. <span className='mandatory'>*</span></label>
                            <input type="text" name="mobileNo" maxLength={10} placeholder="60 7234 4327" value={props.detail.mobileNo} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.mobileNo}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Gender <span className='mandatory'>*</span></label>
                            <select name="gender" value={props.detail.gender} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.Gender.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.gender}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Date of Birth <span className='mandatory'>*</span></label>
                            <div className="input-group date" id="datepicker">
                                <input type="date" name="DateOfBirth" className="form-control" id="DateOfBirth" placeholder="Jan-01-1999" selected={props.detail.DateOfBirth} onChange={props.handleInputChange} />
                                {/* <DatePicker name='DateOfBirth' className='form-control' id="date" selected={props.detail.DateOfBirth} onChange={props.handleInputChange} /> */}
                                {/* <DatePicker showIcon selected={startDate} className='form-control' onChange={
                                    (date) => setStartDate(date)
                                    } /> */}
                                {/* <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                </span> */}
                                <span className='error'>{props.FormErrors.DateOfBirth}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Your Marital Status <span className='mandatory'>*</span></label>
                            <select name="maritalstatus" value={props.detail.maritalstatus} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.MaritalStatus.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.maritalstatus}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Address <span className='mandatory'>*</span></label>
                            <input type="text" name="address" placeholder="1090 Adelaide St" value={props.detail.address} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.address}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>City <span className='mandatory'>*</span></label>
                            <input type="text" name="city" placeholder="Toronto" value={props.detail.city} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.city}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Province <span className='mandatory'>*</span></label>
                            {/* <input type="text" name="province" placeholder="Ontario" value={props.detail.province} onChange={props.handleInputChange} /> */}
                            <select name="province" className='form-control' value={props.detail.province} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.Province.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.province}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Zip code <span className='mandatory'>*</span></label>
                            <input type="text" name="ZipCode" placeholder="M1L 3K7" value={props.detail.ZipCode} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.ZipCode}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Country <span className='mandatory'>*</span></label>
                            <select name="country" value={props.detail.country} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.Country.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.country}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="input-group date" id="datepicker">
                                {/* <input type="date" name="DateOfBirth" className="form-control" id="DateOfBirth" placeholder="Jan-01-1999" selected={props.detail.DateOfBirth} onChange={props.handleInputChange} /> */}
                                <label>ID proof <span className='mandatory'>*</span></label>
                            <input type="text" name="idproof" placeholder="" className="form-control" value={props.detail.idproof} />
                            <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block" onClick={props.handleDocumentClick(1)}>
                                        <i className="fa fa-upload"></i>
                                    </span>
                            </span>
                            <span className='error'>{props.FormErrors.idproof}</span>
                            </div>
                    </div>

                    <h5>Tell me more about yourself</h5>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Language you Speak</label>
                            <input type="text" name="language" placeholder="English, Spanish" value={props.detail.language} onChange={props.handleInputChange} />
                            {/* <select name="languagepreference" value={props.detail.languagepreference} onChange={props.handleInputChange}>
                                <option>English</option>
                                <option>French</option>
                                <option>Hindi</option>
                                <option>Dutch</option>
                            </select> */}
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Community <span className='mandatory'>*</span></label>
                            <select name="communityType" value={props.detail.communityType} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.CommunityType.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.communityType}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Domain</label>
                            <input type="text" name="domain" placeholder="Data Science" value={props.detail.domain} onChange={props.handleInputChange} />
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>University Details <span className='mandatory'>*</span></label>
                            <input type="text" name="universitydetails" placeholder="Business Analyst Student at University of Toronto, Scarborough" value={props.detail.universitydetails} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.universitydetails}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        {/* <div className="form-group">
                            <label>University Id Proof</label>
                            <input type="file" name="universityidproof" placeholder="Data Science" value={props.detail.universityidproof} onChange={props.handleInputChange} />
                        </div> */}
                        <div className="input-group date" id="datepicker">
                                {/* <input type="date" name="DateOfBirth" className="form-control" id="DateOfBirth" placeholder="Jan-01-1999" selected={props.detail.DateOfBirth} onChange={props.handleInputChange} /> */}
                                <label>University Id Proof <span className='mandatory'>*</span></label>
                            <input type="text" name="universityidproof" placeholder="" value={props.detail.universityidproof} className="form-control" />
                            <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block" onClick={props.handleDocumentClick(2)}>
                                        <i className="fa fa-upload"></i>
                                    </span>
                            </span>
                            <span className='error'>{props.FormErrors.universityidproof}</span>
                            </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Sleeping habits</label>
                            <select name="sleepinghabits_from" value={props.detail.sleepinghabits_from} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.SleepingHabitsTime.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>&nbsp;</label>
                            <select name="sleepinghabits_to" value={props.detail.sleepinghabits_to} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.SleepingHabitsTime.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Dietary preferences</label>
                            <select name="dietarypreference" value={props.detail.dietarypreference} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.DietPreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Willing to share household chores</label>
                            <select name="householdchores" value={props.detail.householdchores} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Do you Cook?</label>
                            <select name="doyoucook" value={props.detail.doyoucook} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Do you use cannanis?</label>
                            <select name="cannabits" value={props.detail.cannabits} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Do you smoke?</label>
                            <select name="smoke" value={props.detail.smoke} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Do you drink?</label>
                            <select name="drink" value={props.detail.drink} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>



                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                            <label>Tell Us About Yourself and why you are moving ?</label>
                            <textarea placeholder="Tell us about yourself" name="telluswhymoving" maxLength={500} value={props.detail.telluswhymoving} onChange={props.handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTab1;