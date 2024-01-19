
function Payments() {
    return (
        <section class="paymentSec padd80 mt-5">
            <div class="container">
                <ul class="steps mb-4">
                    <li class="is-active"><span></span></li>
                    <li><span></span></li>
                </ul>
                <form class="form-wrapper">
                    <fieldset class="section is-active">
                        <div class="row g-4">
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                <div class="articleItem">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                                            <div class="aImg">
                                                <img src={require('../../img/article/type1.png')} alt="artical img" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="typerommi">
                                                <div class="tleft text-start">
                                                    <h3>#101 Twin Bedroom</h3>
                                                    <ul class="aminew">
                                                        <li>Shared room</li>
                                                        <li>74 sqft</li>
                                                        <li>Twin bed</li>
                                                        <li>Shared Bathroom</li>
                                                    </ul>
                                                    <ul class="aminew aminew1 mt-2">
                                                        <li>Full Furnished</li>
                                                        <li>WiFi</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="daterow d-flex align-items-center justify-content-between">
                                        <p class="mb-0">Fri, Dec 01 - Thu, Feb 01 2024</p>
                                        <a href="#/"><u>Change</u></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <div class="rigthroom">
                                    <div class="row">
                                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pe-xxl-0 pe-xl-0 pe-lg-0">
                                            <div class="aImg">
                                                <img src={require('../../img/article/type1.png')} alt="artical img" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="typerommi">
                                                <div class="tleft text-start">
                                                    <h3>Urban Styled Apt. right away Metro Station and Morningside Park</h3>
                                                    <div class="rating d-inline">
                                                        <i class="fa fa-solid fa-star"></i>
                                                        5.0
                                                    </div>
                                                    <p class="mb-0 mt-3">Ontario</p>
                                                    <p class="mb-0">#101 Twin Bedroom</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="secrutiydep chkindate">
                                        <li>
                                            <label>Move In</label>
                                            <span>Fri, Dec 01</span>
                                        </li>
                                        <li>
                                            <label>Move Out</label>
                                            <span>Thu, Feb 01 2024</span>
                                        </li>
                                    </ul>
                                    <ul class="secrutiydep">
                                        <li>
                                            <label>Monthly Rent</label>
                                            <span>$2,156</span>
                                        </li>
                                        <li>
                                            <label>Security Deposit</label>
                                            <span>50% </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary mt-3 mb-5">Continue</button>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="section">
                        <div class="payment-method">
                            <div class="heading1 mb-4">
                                <h2>Payment Method</h2>
                                <p class="fs-6">You reservation won't be confirmed until the host accepts your request (within 48 hours) <br />You won't be charged until then.</p>
                            </div>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                        <img src="img/icons/bankGrey.svg" class="cardicon" alt="Card" />
                                        net banking
                                    </button>
                                    <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                        <img src="img/icons/bankGrey.svg" class="cardicon" alt="Card" />
                                        credit/debit card
                                    </button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                        <img src="img/icons/bankGrey.svg" class="cardicon" alt="Card" />
                                        Add New Card
                                    </button>
                                </div>
                            </nav>
                            <div class="tab-content mt-5" id="nav-tabContent">
                                <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <br /><br /><br /><br /><h4>No Data Found in Figma</h4>
                                </div>
                                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="row g-5">
                                        <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                            <div class="card-form">
                                                <div class="form-group mb-4">
                                                    <label>Card Number</label>
                                                    <small>Enter the 16- digit card number</small>
                                                    <input type="text" name="carddigit" placeholder="xxxx xxxx xxxx xxxx" />
                                                    <div class="checkover">
                                                        <img src="img/icons/visa.png" class="img-fluid" alt="visa" />
                                                        <img src="img/icons/check-curve.png" class="img-fluid" alt="check" />
                                                    </div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <label>Card Holder Name</label>
                                                    <small>Enter Card holder name</small>
                                                    <input type="text" name="carddigit" placeholder="" />
                                                    <div class="checkover">
                                                        <img src="img/icons/check-curve.png" class="img-fluid" alt="check" />
                                                    </div>
                                                </div>
                                                <div class="form-group mb-4">
                                                    <div class="d-flex flex-wrap align-items-center justfy-content-between cvvnumber">
                                                        <div class="w-50">
                                                            <label>CVV Number</label>
                                                            <small>Enter the 4- digit number</small>
                                                        </div>
                                                        <input type="text" name="carddigit" class="w-50" placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="d-flex flex-wrap align-items-center justfy-content-between expdate">
                                                        <div class="w-50">
                                                            <label>Expiry Date</label>
                                                            <small>Enter the Expiration date of the card</small>
                                                        </div>
                                                        <div class="d-flex align-items-center justfy-content-between w-50">
                                                            <input type="text" name="carddigit" class="" placeholder="" />
                                                            <span class="px-3">/</span>
                                                            <input type="text" name="carddigit" class="" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                                            <div class="cardpreview">
                                                <div class="card-pre">
                                                    <img src="img/cardprebg.png" class="img-fluid d-block mx-auto" alt="Card Bg" />
                                                    <div class="carddet">
                                                        <label>Card Holder name</label>
                                                        <div class="carddigit">
                                                            .... .... .... 3333
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <label>9/12</label>
                                                            <div>
                                                                <img src="img/icons/visa.png" class="img-fluid" alt="Visa" />
                                                                <p>Visa Card</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cardfees">
                                                    <ul>
                                                        <li>
                                                            <label>Monthly Rent</label>
                                                            <span>$2,156</span>
                                                        </li>
                                                        <li>
                                                            <label>Security Deposit</label>
                                                            <span>50%</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mt-5 buttonGrp">
                                            <button class="btn btn-secondary">Skip for Now</button>
                                            <button class="btn btn-primary">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <br /><br /><br /><br /><h4>No Data Found in Figma</h4>
                                </div>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Payments;