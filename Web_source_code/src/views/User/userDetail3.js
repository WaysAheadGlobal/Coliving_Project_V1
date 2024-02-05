import master from './../../data/masterData.json';

function DetailTab3(props) {
    return (
        <div className="detail-2 p-detail">
            <h4>Roommate Preferences</h4>
            <div className="fm-area">
                <div className="row g-4">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Language Preferences <span className='mandatory'>*</span></label>
                            <select name="languagepreference" value={props.detail.languagepreference} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.LanguagePreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Co-ed <span className='mandatory'>*</span></label>
                            <select name="coed" value={props.detail.coed} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.CoEdTypes.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.coed}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Age Group Preferences <span className='mandatory'>*</span></label>
                            <select name="agegrouppreference" value={props.detail.agegrouppreference} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.AgePreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.agegrouppreference}</span>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Communication</label>
                            <select name="communication" value={props.detail.communication} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.CommunicationType.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.communication}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Dietary preferences <span className='mandatory'>*</span></label>
                            <select name="roommate_dietarypreference" value={props.detail.roommate_dietarypreference} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.DietPreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.roommate_dietarypreference}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Willing to share household chores <span className='mandatory'>*</span></label>
                            <select name="roommate_sharehouseholdchores" value={props.detail.roommate_sharehouseholdchores} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.roommate_sharehouseholdchores}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Drinking Comfort Level <span className='mandatory'>*</span></label>
                            <select name="roommate_drinkingcomfort" value={props.detail.roommate_drinkingcomfort} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.roommate_drinkingcomfort}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Smoking Comfort Level <span className='mandatory'>*</span></label>
                            <select name="roommate_smokingcomfort" value={props.detail.roommate_smokingcomfort} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.roommate_smokingcomfort}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Cannabis comfort level</label>
                            <select name="roommate_cannabitscomfort" value={props.detail.roommate_cannabitscomfort} onChange={props.handleInputChange}>
                            <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTab3;