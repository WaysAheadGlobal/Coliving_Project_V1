import React, { useState, useRef, useEffect  } from "react";
import DetailTab1 from './UserDetail1';
import DetailTab2 from './userDetail2';
import DetailTab3 from './userDetail3';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';

const PersonalDetail = () => {
    const history = useNavigate();
    const [selectedTab, SetSelectedTab] = useState(1);
    const initialValues = { Fullname: '', email: '', mobileNo: '', communityType: 0, address:'', city: '', province: '', ZipCode: '',
 country: 0, userType: 0, profilePic: '', gender: 0, DateOfBirth: '', maritalstatus: 0, idproof: '', language: '', community: 0, 
 domain: '', universitydetails: '', universityidproof: '', sleepinghabits_from: 0, sleepinghabits_to: 0, dietarypreference: 0,
 householdchores: 0, doyoucook: 0, smoke: 0, drink: 0, cannabits: 0, telluswhymoving: '', userdetailscol: '', sizeofroom: 0, bedroom: 0, bathroom: 0, closetinside: 0, fullyfurnished: 0, howmanyfan: 0, howmanylights: 0
 , outsidelocks: 0, parking: 0, backpatio: 0, frontpatio: 0, evchargeravailable: 0, swimmingpool: 0, budget: 0, languagepreference: 0,
 coed: 0, agegrouppreference: 0, communication: 0, roommate_dietarypreference: 0, roommate_sharehouseholdchores: 0, roommate_drinkingcomfort: 0, roommate_smokingcomfort: 0, roommate_cannabitscomfort: 0};

    const [personalDetail, SetPersonalDetail] = useState(initialValues);
    const hiddenFileInput = useRef(null); 
    const hiddenFileDocumentRoom = useRef(null); 
    const [selectedDoc, SetSelectedDoc] = useState(0);
    const [isError, SetErrorFound] = useState(false);
    const [FormErrors, SetFormErrors] = useState({});

    useEffect(()=> {
        getUserProfile();
    }, []);

    function getUserProfile() {
        const formData = {
            userid: localStorage.getItem("userid")
        };
        const apiUrl = `${config.Url}api/user/Profile`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    SetPersonalDetail(prevState => ({
                        ...personalDetail,
                        Fullname: data.userinfo[0].Fullname,
                        email: data.userinfo[0].email,
                        mobileNo: data.userinfo[0].mobileNo,
                        city: data.userinfo[0].city,
                        province: data.userinfo[0].province,
                        ZipCode: data.userinfo[0].ZipCode,
                        profilePic: data.userinfo[0].profilePic,
                        communityType : data.userinfo[0].communityType
                    }));
                } else {
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    console.error("Error fetching user data");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
    const handleClick = event => {
        hiddenFileInput.current.click();   
      };
      const handleDocumentClick = (id) => event => {
        if(id == 1){
            SetSelectedDoc('idproof');
        }
        if(id == 2){
            SetSelectedDoc('universityidproof');
        }
        hiddenFileDocumentRoom.current.click(); 
      };
    const GotoNext = (e) => {
        e.preventDefault();
        
        SetErrorFound(false);
        window.scrollTo(0, 0)
        
        var values = personalDetail;

        const errors = {};
        var checkError = false;
        var checkErrorTab2 = false;
        var checkErrorTab3 = false;
        if(selectedTab == 1){
        
        if (!values.profilePic) {
            errors.profilePic = "Profile Pic is required!";
            SetErrorFound(true);
            checkError = true;
        }

		if (!values.Fullname) {
			errors.Fullname = "FullName is required!";
			SetErrorFound(true);
            checkError = true;
		}

		if (!values.email) {
			errors.email = "Email is required!";
			SetErrorFound(true);
            checkError = true;
		}

        if (!values.mobileNo) {
			errors.mobileNo = "MobileNo is required!";
			SetErrorFound(true);
            checkError = true;
		}

        if (values.gender == 0) {
			errors.gender = "Gender is required!";
			SetErrorFound(true);
            checkError = true;
		}

        if (values.communityType == 0) {
			errors.communityType = "Community Type is required!";
			SetErrorFound(true);
            checkError = true;
		}

        if (!values.address) {
			errors.address = "Address is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.city) {
			errors.city = "City is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.province) {
			errors.province = "Province is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.ZipCode) {
			errors.ZipCode = "ZipCode is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (values.country == 0) {
			errors.country = "Country is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (values.gender == 0) {
			errors.gender = "Gender is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.DateOfBirth) {
			errors.DateOfBirth = "DateOfBirth is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (values.maritalstatus == 0) {
			errors.maritalstatus = "Marital Status is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.idproof) {
			errors.idproof = "Id Proof is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.universitydetails) {
			errors.universitydetails = "University detail is required!";
			SetErrorFound(true);
            checkError = true;
		}
        if (!values.universityidproof) {
			errors.universityidproof = "University Id Proof is required!";
			SetErrorFound(true);
            checkError = true;
		}
        SetFormErrors(errors);
        }

        if(selectedTab == 2){
        
            if (values.sizeofroom == 0) {
                errors.sizeofroom = "Size of room is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            if (values.bedroom == 0) {
                errors.bedroom = "Bedroom is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            if (values.bathroom == 0) {
                errors.bathroom = "Bathroom is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            if (values.fullyfurnished == 0) {
                errors.fullyfurnished = "FUlly furnished is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            if (values.parking == 0) {
                errors.parking = "Parking is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            if (values.budget == "0" || values.budget == "") {
                errors.budget = "Budget is required!";
                SetErrorFound(true);
                checkErrorTab2 = true;
            }
            SetFormErrors(errors);
        }
        if(selectedTab == 3){
        
            if (values.coed == 0) {
                errors.coed = "coed is required!";
                SetErrorFound(true);
                checkErrorTab3 = true;
            }
            if (values.agegrouppreference == 0) {
                errors.agegrouppreference = "Age group preference is required!";
                SetErrorFound(true);
                checkErrorTab3 = true;
            }
            SetFormErrors(errors);
        }
        if(selectedTab == 1 && !checkError ){
            SetSelectedTab(selectedTab + 1);
        }
        else if(selectedTab == 2 && !checkErrorTab2){
            SetSelectedTab(selectedTab + 1);
        }
        if(selectedTab == 3 && !checkErrorTab3){
            let formData = JSON.stringify(personalDetail);
            const apiUrl = `${config.Url}api/user/savePersonalDetail`;
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("usertoken")
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        setTimeout(() => {
                            toast.success("Profile updated successfully", {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                        }, 300);
                        SetSelectedTab(selectedTab + 1);

                        //this.setState({ postData: data.data });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    };
    
    const validate = (values) => {
		const errors = {};
		const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
        var checkError = false;
		if (!values.Fullname) {
			errors.Fullname = "FullName is required!";
			SetErrorFound(true);
		}

		if (!values.email) {
			errors.email = "Email is required!";
			SetErrorFound(true);
		}

        if (!values.mobileNo) {
			errors.mobileNo = "MobileNo is required!";
			SetErrorFound(true);
		}

        if (values.gender == 0) {
			errors.gender = "Gender is required!";
			SetErrorFound(true);
		}

        if (values.communityType == 0) {
			errors.communityType = "Community Type is required!";
			SetErrorFound(true);
		}

        if (!values.address) {
			errors.address = "Address is required!";
			SetErrorFound(true);
		}
        if (!values.city) {
			errors.city = "City is required!";
			SetErrorFound(true);
		}
        if (!values.province) {
			errors.province = "Province is required!";
			SetErrorFound(true);
		}
        if (!values.ZipCode) {
			errors.ZipCode = "ZipCode is required!";
			SetErrorFound(true);
		}
        if (values.country == 0) {
			errors.country = "Country is required!";
			SetErrorFound(true);
		}
        if (values.gender == 0) {
			errors.gender = "Gender is required!";
			SetErrorFound(true);
		}
        if (!values.DateOfBirth) {
			errors.DateOfBirth = "DateOfBirth is required!";
			SetErrorFound(true);
		}
        if (values.maritalstatus == 0) {
			errors.maritalstatus = "Marital Status is required!";
			SetErrorFound(true);
		}
        if (!values.idproof) {
			errors.idproof = "Id Proof is required!";
			SetErrorFound(true);
		}
		return errors;
	}



    const handleDocumentChange  = event => {
        const fileUploaded = event.target.files[0];
        var formdata = new FormData();
        formdata.append("upload", event.target.files[0]);
       
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const apiUrl = `${config.Url}api/savePropertyDocument`;
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    SetPersonalDetail({ ...personalDetail, [selectedDoc]: data.filename });
                } else {
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    console.error("Error fetching user data");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
      };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        const name = "profilePic";
        //setFormValues({ ...formValues, [name]: URL.createObjectURL(event.target.files[0]) });
        var formdata = new FormData();
        formdata.append("upload", event.target.files[0]);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const apiUrl = `${config.Url}api/savePicture`;
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    SetPersonalDetail({ ...personalDetail, [name]: data.filename });
                } else {
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    console.error("Error fetching user data");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
      };

    const GotoBack = (e) => {
        SetSelectedTab(selectedTab - 1);
        window.scrollTo(0, 0)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetPersonalDetail({ ...personalDetail, [name]: value });
    }

    return (
        <section className="allBlogs mt-5 padd80">
            <ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
                <input
                                                        type="file"
                                                        onChange={handleDocumentChange}
                                                        ref={hiddenFileDocumentRoom}
                                                        style={{display: 'none'}} // Make the file input element invisible
                                                    />
            <div className="container">
                <div className="personaltabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={selectedTab >= 1 ? "nav-link active" : "nav-link"} id="home-tab" aria-selected={selectedTab == 1 ? "true" : 'false'}>1</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={selectedTab >= 2 ? "nav-link active" : "nav-link"} id="profile-tab" aria-selected={selectedTab == 2 ? "true" : 'false'}>2</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={selectedTab >= 3 ? "nav-link active" : "nav-link"} id="contact-tab" aria-selected={selectedTab == 3 ? "true" : 'false'}>3</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={selectedTab >= 4 ? "nav-link active" : "nav-link"} id="fourth-tab" aria-selected={selectedTab == 4 ? "true" : 'false'}><i class="fa fa-check" aria-hidden="true"></i></button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className={selectedTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="heading1 mb-5 text-start">
                                <h2 style={{ textAlign: 'center' }}>Help Us match you to the right Home</h2>
                            </div>
                            <div className="personaldetailform">
                                <DetailTab1 detail={personalDetail} handleInputChange={handleInputChange} handleChange={handleChange} FormErrors={FormErrors}
                                 handleClick={handleClick} hiddenFileInput={hiddenFileInput} handleDocumentClick={handleDocumentClick} handleDocumentChange={handleDocumentChange} />
                            </div>
                        </div>
                        <div className={selectedTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="heading1 mb-5 text-start">
                                <h2 style={{ textAlign: 'center' }}>Help Us match you to the right Home</h2>
                            </div>
                            <div className="personaldetailform">
                                <DetailTab2 detail={personalDetail} handleInputChange={handleInputChange} FormErrors={FormErrors} />

                            </div>
                        </div>
                        <div className={selectedTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="heading1 mb-5 text-start">
                                <h2 style={{ textAlign: 'center' }}>Help Us match you to the right Home</h2>
                            </div>
                            <div className="personaldetailform">
                                <DetailTab3 detail={personalDetail} handleInputChange={handleInputChange} FormErrors={FormErrors} />

                            </div>
                        </div>
                        <div className={selectedTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="fourthform" role="tabpanel" aria-labelledby="fourth-tab">
                        {/* <div className="heading1 mb-5 text-start">
                                <h4 style={{textAlign: 'center'}}>Your profile has been successfully created</h4>
                            </div> */}
                            <div style={{textAlign: 'center', marginBottom: '50px'}}>
                                <img src={require('./../../img/success.png')} style={{width: '100px', textAlign: 'center'}} />
                            </div>
                            <div className="detail-1 p-detail" style={{textAlign: 'center'}}>
                                <h4 style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>Your profile has been successfully created <br />and you will get confirmation email once your account will be approved by co-living.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 buttonGrp text-center">
                        {selectedTab != 1 && selectedTab <= 3 ?
                            <button className="btn btn-secondary text-uppercase" onClick={GotoBack} style={{ marginRight: '15px' }}>Back</button>
                            : null}
                            {selectedTab != 4 ?
                            <button className="btn btn-primary text-uppercase" onClick={GotoNext}>{selectedTab == 3 ? "Submit for Approval" : "Save & Continue"}</button>
                            : null}
                        
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PersonalDetail;