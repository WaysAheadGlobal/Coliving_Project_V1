import master from './../../data/masterData.json'

function DetailTab2(props) {
    return (
        <div className="detail-2 p-detail">
            <h4>Apartment Detail</h4>
            <div className="fm-area">
                <div className="row g-4">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Size of room <span className='mandatory'>*</span></label>
                            {/* <input type="text" name="sizeofroom" placeholder="70 - 80 sqft " value={props.detail.sizeofroom} onChange={props.handleInputChange} /> */}
                            <select name="sizeofroom" value={props.detail.sizeofroom} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.ApartmentSize.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.sizeofroom}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Bedroom <span className='mandatory'>*</span></label>
                            <select name="bedroom" value={props.detail.bedroom} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.BedroomType.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.bedroom}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Bathroom <span className='mandatory'>*</span></label>
                            <select name="bathroom" value={props.detail.bathroom} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.BedroomType.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.bathroom}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Closet Inside</label>
                            <select name="closetinside" value={props.detail.closetinside} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Full Furnitured <span className='mandatory'>*</span></label>
                            <select name="fullyfurnished" value={props.detail.fullyfurnished} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.Furniture.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.fullyfurnished}</span>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>How Many Fan</label>
                            <select name="howmanyfan" value={props.detail.howmanyfan} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>How Many Lights</label>
                            <select name="howmanylights" value={props.detail.howmanylights} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Outside locks</label>
                            <select name="outsidelocks" value={props.detail.outsidelocks} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.LockType.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Parking <span className='mandatory'>*</span></label>
                            <select name="parking" value={props.detail.parking} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.Parking.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                            <span className='error'>{props.FormErrors.Parking}</span>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Back patio</label>
                            <select name="backpatio" value={props.detail.backpatio} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Front patio</label>
                            <select name="frontpatio" value={props.detail.frontpatio} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>EV charger available</label>
                            <select name="evchargeravailable" value={props.detail.evchargeravailable} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Swimming pool</label>
                            <select name="swimmingpool" value={props.detail.swimmingpool} onChange={props.handleInputChange}>
                                <option value={0}>Select</option>
                                {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label>Budget <span className='mandatory'>*</span></label>
                            <input type="text" name="budget" placeholder="$1500" value={props.detail.budget} onChange={props.handleInputChange} />
                            <span className='error'>{props.FormErrors.budget}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTab2;