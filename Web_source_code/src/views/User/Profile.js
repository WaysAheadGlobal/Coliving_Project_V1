import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Profile() {
    const history = useNavigate();
    const intialValues = { Fullname: "", email: "", mobileNo: "", city: "", province: "", zipcode: "", profilePic: "user.png" };
    const [formValues, setFormValues] = useState(intialValues);
	const [formErrors, setFormErrors] = useState({});
	const [ErrorAvailable, SetErrorAvailable] = useState(false);
    const hiddenFileInput = useRef(null); 
    const handleClick = event => {
        hiddenFileInput.current.click();   
      };
    const handleProfileRemoveClick = (e) => {
        const name = "profilePic";
        setFormValues({ ...formValues, [name]: 'user.png'});
    }
      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded)
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
                    setFormValues({ ...formValues, [name]: data.filename});
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
    
    useEffect(()=> {
        getUserProfile();
    }, []);

    const handleInputChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

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
                    //this.setState({ postData: data.data });
                    var userinfo = {
                        Fullname: data.userinfo[0].Fullname,
                        email: data.userinfo[0].email,
                        mobileNo: data.userinfo[0].mobileNo,
                        city: data.userinfo[0].city,
                        province: data.userinfo[0].province,
                        zipcode: data.userinfo[0].ZipCode,
                        profilePic: data.userinfo[0].profilePic
                    };
                    console.log(userinfo)
                    setFormValues(userinfo);
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
    const handleDeleteProfile = (e) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete this account?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    toast.success("Profile deleted successfully", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    setTimeout(() => {
                        history("/");
                    }, 3000);
                }
              },
              {
                label: 'No',
                onClick: () => {

                }
              }
            ]
          });
       
    }
    const handleSaveProfile = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log('ErrorAvailable', ErrorAvailable)
        if(!ErrorAvailable){
				let formData = JSON.stringify({
					"Fullname": formValues.Fullname,
					"email": formValues.email,
					"mobileno": formValues.mobileNo,
					"city": formValues.city,
					"province": formValues.province,
					"zipcode": formValues.zipcode,
                    "profilepic": formValues.profilePic,
					"userid": localStorage.getItem("userid")
				});
				const apiUrl = `${config.Url}api/user/updateProfile`;
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
						console.log(data)
						if (data.status === 200) {
							setTimeout(() => {
								toast.success("Profile updated successfully", {
                                    position: toast.POSITION.TOP_RIGHT,
                                });
							}, 300);


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
		SetErrorAvailable(false);
		if (!values.Fullname) {
			errors.Fullname = "FullName is required!";
			SetErrorAvailable(true);
		}

		if (!values.email) {
			errors.email = "Email is required!";
			SetErrorAvailable(true);
		}

        if (!values.city) {
			errors.city = "City is required!";
			SetErrorAvailable(true);
		}

        if (!values.province) {
			errors.province = "Province is required!";
			SetErrorAvailable(true);
		}
        if (!values.zipcode) {
			errors.zipcode = "Zipcode is required!";
			SetErrorAvailable(true);
		}
		//  else if(!regex.test(values.email)){
		//     errors.email = "This is not a valid email format!";
		// }
		return errors;
	}

    return (
        <>
        <ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
            <div class="content-area">
                <h4 class="content-title">Profile</h4>
                <div class="profileform">
                    <div class="row align-items-center">
                        <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-3 mb-sm-3 mb-3">
                            <div class="userimglg">
                                {formValues.profilePic == "" ? null :
                                <img src={`${config.Url}api/images/users/` + formValues.profilePic} class="img-fluid" alt="User uploaded image" />
                                }
                            </div>
                        </div>
                        <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ps-lg-2 ps-md-3 ps-sm-2 ps-2">
                            <div class="adminform adpgr">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" name="Fullname" id="Fullname" value={formValues.Fullname} onChange={handleInputChange} placeholder="John Mark" />
                                </div>
                                <div class="buttonGrp mt-3">
                                    <button class="btn btn-secondary" onClick={handleProfileRemoveClick}>Remove</button>
                                    <input
                                    type="file"
                                    onChange={handleChange}
                                    ref={hiddenFileInput}
                                    style={{display: 'none'}} // Make the file input element invisible
                                />
                                    <button class="btn btn-primary" type="file" onClick={handleClick}>Upload profile pic</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 mt-5">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Email Id</label>
                                    <input type="text" name="email" id="email" value={formValues.email} onChange={handleInputChange} placeholder="john.mark@gmail.com" />
                                    <span className="error">{formErrors.email}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" name="mobileNo" id="mobileNo" value={formValues.mobileNo} onChange={handleInputChange} placeholder="+1  60 7234 4327" />
                                    <span className="error">{formErrors.mobileNo}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="text" name="city" id="city" value={formValues.city} onChange={handleInputChange} placeholder="Toronto" />
                                    <span className="error">{formErrors.city}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Province</label>
                                    <input type="text" name="province" id="province" value={formValues.province} onChange={handleInputChange} placeholder="Ontario" />
                                    <span className="error">{formErrors.province}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminform">
                                <div class="form-group">
                                    <label>Zip Code</label>
                                    <input type="text" name="zipcode" id="zipcode" value={formValues.zipcode} onChange={handleInputChange} placeholder="M1L 3K7" />
                                    <span className="error">{formErrors.zipcode}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="buttonGrp text-center mt-4">
                                <button class="btn btn-text" onClick={handleDeleteProfile}>Delete Account</button>
                                <button class="btn btn-secondary ms-2" onClick={handleSaveProfile}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;