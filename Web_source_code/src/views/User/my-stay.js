
function MyStay() {
    return (
        <div class="content-area">
            <h4 class="content-title">My stay</h4>
            <div class="profileform myStayPage">
                <div class="row g-4">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="stayItem">
                            <div class="imgblock">
                                <img src={require('../../img/mystay.png')} alt="My Stay" class="img-fluid" />
                                    <div class="icon">
                                        <img src={require('../../img/icons/delete.png')} class="img-fluid" alt="delete" />
                                    </div>
                            </div>
                            <div class="bodydet">
                                <label>Ontario</label>
                                <h4>Urban Styled Apt. right away Metro Station and Morningside Park</h4>
                                <div class="d-flex align-items-center justify-content-between my-3">
                                    <p class="mb-0">Fri, Dec 01 - Thu, Feb 01 2024</p>
                                    <div class="rating">
                                        <img src={require('../../img/icons/star.png')} class="img-fluid" alt="Star" />
                                            5.0
                                    </div>
                                </div>
                                <button class="btn btn-primary text-uppercase w-100">check waitlist for this property</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="stayItem">
                            <div class="imgblock">
                                <img src={require('../../img/mystay.png')} alt="My Stay" class="img-fluid" />
                                    <div class="icon">
                                        <img src={require('../../img/icons/delete.png')} class="img-fluid" alt="delete" />
                                    </div>
                            </div>
                            <div class="bodydet">
                                <label>Ontario</label>
                                <h4>Urban Styled Apt. right away Metro Station and Morningside Park</h4>
                                <div class="d-flex align-items-center justify-content-between my-3">
                                    <p class="mb-0">Fri, Dec 01 - Thu, Feb 01 2024</p>
                                    <div class="rating">
                                        <img src={require('../../img/icons/star.png')} class="img-fluid" alt="Star" />
                                            5.0
                                    </div>
                                </div>
                                <button class="btn btn-primary text-uppercase w-100">check waitlist for this property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyStay;