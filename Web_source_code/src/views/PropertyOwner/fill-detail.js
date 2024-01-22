import master from '../../data/masterData.json';
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function FillDetail() {
    const history = useNavigate();
    const roomvalues = {
        room_id: 0, roomname: '', roomphoto1: '', roomphoto2: '', roomphoto3: '', roomphoto4: '', roomphoto5: '',
        roomtype: 0, roomsize: 0, noOfBed: 0, bedroomtype: 0, furniture: 0, roomrent: 0, currentstatus: 0, petfriendly: 0,
        dietarypreference: 0, smoking: 0, drinking: 0, cannabits: 0, agegrouppreference: 0, communitytype: 0, maxresidants: 0
    };

    const intialValues = {
        user_id: localStorage.getItem("userid"), property_id: 0, propertyname: "", housetype: 0, totalrooms: 0, bathroom: 0, livingroom: 0, kitchen: 0,
        residants: 0, apartmentsize: 0, evcharger: 0, fireextinguisher: 0, travelguide: 0, events: 0,
        propertyphoto1: '', propertyphoto2: '', propertyphoto3: '', propertyphoto4: '', propertyphoto5: '', propertyvideo: '', apartmentamenities: '',
        communityamenities: '', roomDetails: [roomvalues],
        country: 0, province: '', address: '', landmark: '', zipcode: '', markongoogle: '', cancellantionpolicy: 0, description: '',
        host_name: '', host_emailid: '', host_mobileno: '', host_dob: '', host_gender: 0, host_location: '', host_aboutyourself: '',
        host_idproof: '', host_propertyOwnershopdocument: '', host_employmentdetails: '', host_companyidproof: ''
    };
    const [propertyValues, setPropertyValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [ErrorAvailable, setErrorAvailable] = useState(false);
    const hiddenFileInput = useRef(null);
    const hiddenFileInput2 = useRef(null);
    const hiddenFileInput3 = useRef(null);
    const hiddenFileInput4 = useRef(null);
    const hiddenFileInput5 = useRef(null);
    const hiddenFileDocumentRoom = useRef(null);
    const hiddenFileInputRoom = useRef(null);
    const hiddenFileVideoRoom = useRef(null);
    const [selectedId, SetSelectedId] = useState(0);
    const [selectedRoomId, SetselectedRoomId] = useState(0);
    const [selectedRoomPhotoId, SetselectedRoomPhotoId] = useState(0);
    const [selectedDoc, SetSelectedDoc] = useState('');
    const handleClick = (id) => event => {
        SetSelectedId(id);
        if (selectedId === 1) {
            hiddenFileInput.current.click();
        }
        if (selectedId === 2) {
            hiddenFileInput2.current.click();
        }
        if (selectedId === 3) {
            hiddenFileInput3.current.click();
        }
        if (selectedId === 4) {
            hiddenFileInput4.current.click();
        }
        if (selectedId === 5) {
            hiddenFileInput5.current.click();
        }

    };
    const updatePolicy = (id) => (e) => {
        const name = 'cancellantionpolicy'
        setPropertyValues({ ...propertyValues, [name]: id });
    }
    const handleVideoClick = event => {
        hiddenFileVideoRoom.current.click();
    };
    const deletePropertyPhoto = (id) => event => {
        SetSelectedId(id);
        var name = "propertyphoto1";
        if (selectedId == 1) {
            name = "propertyphoto1";
        }
        if (selectedId == 2) {
            name = "propertyphoto2";
        }
        if (selectedId == 3) {
            name = "propertyphoto3";
        }
        if (selectedId == 4) {
            name = "propertyphoto4";
        }
        if (selectedId == 5) {
            name = "propertyphoto5";
        }
        setPropertyValues({ ...propertyValues, [name]: '' });
    };

    const deletePropertyRoomPhoto = (id, index) => event => {
        SetselectedRoomId(index);
        SetselectedRoomPhotoId(id);
        var name = "roomphoto1";
        if (selectedRoomPhotoId == 1) {
            name = "roomphoto1";
        }
        if (selectedRoomPhotoId == 2) {
            name = "roomphoto2";
        }
        if (selectedRoomPhotoId == 3) {
            name = "roomphoto3";
        }
        if (selectedRoomPhotoId == 4) {
            name = "roomphoto4";
        }
        if (selectedRoomPhotoId == 5) {
            name = "roomphoto5";
        }
        const arr = [...propertyValues.roomDetails];
        arr[selectedRoomId][name] = '';
        setPropertyValues({ ...propertyValues, [propertyValues.roomDetails]: roomvalues });
    };

    const handleRoomPhotoClick = (id, index) => event => {
        SetselectedRoomId(index);
        SetselectedRoomPhotoId(id);
        hiddenFileInputRoom.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        var name = "propertyphoto1";
        if (selectedId == 1) {
            name = "propertyphoto1";
        }
        if (selectedId == 2) {
            name = "propertyphoto2";
        }
        if (selectedId == 3) {
            name = "propertyphoto3";
        }
        if (selectedId == 4) {
            name = "propertyphoto4";
        }
        if (selectedId == 5) {
            name = "propertyphoto5";
        }
        //setFormValues({ ...formValues, [name]: URL.createObjectURL(event.target.files[0]) });
        var formdata = new FormData();
        formdata.append("upload", event.target.files[0]);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const apiUrl = `${config.Url}api/savePropertyImage`;
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setPropertyValues({ ...propertyValues, [name]: data.filename });
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

    const deletePropertyVideo = event => {
        var name = "propertyvideo";
        setPropertyValues({ ...propertyValues, [name]: '' });
    };

    const handleVideoChange = event => {
        const fileUploaded = event.target.files[0];
        var formdata = new FormData();
        formdata.append("upload", event.target.files[0]);
        var name = "propertyvideo";
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const apiUrl = `${config.Url}api/savePropertyVideo`;
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setPropertyValues({ ...propertyValues, [name]: data.filename });
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

    const handleRoomPhotoChange = event => {
        const fileUploaded = event.target.files[0];
        var name = "roomphoto1";
        if (selectedRoomPhotoId == 1) {
            name = "roomphoto1";
        }
        if (selectedRoomPhotoId == 2) {
            name = "roomphoto2";
        }
        if (selectedRoomPhotoId == 3) {
            name = "roomphoto3";
        }
        if (selectedRoomPhotoId == 4) {
            name = "roomphoto4";
        }
        if (selectedRoomPhotoId == 5) {
            name = "roomphoto5";
        }
        //setFormValues({ ...formValues, [name]: URL.createObjectURL(event.target.files[0]) });
        var formdata = new FormData();
        formdata.append("upload", event.target.files[0]);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const apiUrl = `${config.Url}api/savePropertyImage`;
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    // setPropertyValues({ ...propertyValues, [name]: data.filename });
                    const arr = [...propertyValues.roomDetails];
                    arr[selectedRoomId][name] = data.filename;
                    setPropertyValues({ ...propertyValues, [propertyValues.roomDetails]: roomvalues });
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setPropertyValues({ ...propertyValues, [name]: value });

    }

    const AddNewRoom = (e) => {
        const arr = [...propertyValues.roomDetails];
        arr.push(roomvalues);
        propertyValues.roomDetails = arr;
        setPropertyValues({ ...propertyValues, [propertyValues.roomDetails]: roomvalues });
        toast.success("Room Added Successfully", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }

    const DeleteRoom = async (index, e) => {
        const arr = [...propertyValues.roomDetails]; // to avoid  direct state mutation
        arr.splice(index, 1);
        propertyValues.roomDetails = arr;
        setPropertyValues({ ...propertyValues, [propertyValues.roomDetails]: roomvalues });
        toast.success("Room Deleted Successfully", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }

    const handleInputRoomChange = async (index, e) => {
        const { name, value } = e.target;
        const arr = [...propertyValues.roomDetails];
        arr[index][name] = value;
        setPropertyValues({ ...propertyValues, [propertyValues.roomDetails]: roomvalues });
    }

    const handleSaveProperty = (e) => {
        e.preventDefault();
        //setFormErrors(validate(formValues));
        if (!ErrorAvailable) {
            let formData = JSON.stringify(propertyValues);
            const apiUrl = `${config.Url}api/property/SaveProperty`;
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
                        //localStorage.setItem("token", data.token);
                        setTimeout(() => {
                            toast.success("Property saved successfully", {
                                position: toast.POSITION.TOP_RIGHT,
                            });
                        }, 300);
                        setTimeout(() => history("/owner/thanks"), 3000);

                        //this.setState({ postData: data.data });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    };

    const handleApartmentAmeneties = (id) => (e) => {
        const name = 'apartmentamenities'
        var apartmentamen = propertyValues.apartmentamenities;
        if (propertyValues.apartmentamenities.includes(id + ",")) {
            apartmentamen = apartmentamen.replace(id + ",", "");
        }
        else {
            apartmentamen = apartmentamen + id + ",";
        }
        setPropertyValues({ ...propertyValues, [name]: apartmentamen });
    }

    const handleCommunityAmeneties = (id) => (e) => {
        const name = 'communityamenities'
        var communityamen = propertyValues.communityamenities;
        if (propertyValues.communityamenities.includes(id + ",")) {
            communityamen = communityamen.replace(id + ",", "");
        }
        else {
            communityamen = communityamen + id + ",";
        }
        setPropertyValues({ ...propertyValues, [name]: communityamen });
    }

    const handleDocumentClick = (id) => event => {
        if (id == 1) {
            SetSelectedDoc('host_idproof');
        }
        if (id == 2) {
            SetSelectedDoc('host_propertyOwnershopdocument');
        }
        if (id == 3) {
            SetSelectedDoc('host_companyidproof');
        }
        hiddenFileDocumentRoom.current.click();
    };
    const handleDocumentChange = event => {
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
                    setPropertyValues({ ...propertyValues, [selectedDoc]: data.filename });
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
    return (
        <>
            <ToastContainer />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
            ></link>
            <input
                type="file"
                onChange={handleDocumentChange}
                ref={hiddenFileDocumentRoom}
                style={{ display: 'none' }} // Make the file input element invisible
            />
            <div class="container">
                <div class="heading1 mb-5 text-start">
                    <h2>Please fill details</h2>
                </div>
                <div class="personaldetailform">
                    <div class="detail-1 p-detail">
                        <h4>Property Details</h4>
                        <div class="fm-area">
                            <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Enter home/Property name</label>
                                        <input type="text" name="propertyname" id="propertyname" value={propertyValues.propertyname} onChange={handleInputChange} placeholder="Urban Styled" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>House type</label>
                                        <select name='housetype' value={propertyValues.housetype} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.HouseType.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Total rooms</label>
                                        <select name='totalrooms' value={propertyValues.totalrooms} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Bathroom</label>
                                        <select name="noOfBed" value={propertyValues.noOfBed} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Living room</label>
                                        <select name="livingroom" value={propertyValues.livingroom} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Kitchen</label>
                                        <select name="kitchen" value={propertyValues.kitchen} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Residents</label>
                                        <select name="residants" value={propertyValues.residants} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Apartment size (Sq ft)</label>
                                        <select name="apartmentsize" value={propertyValues.apartmentsize} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.ApartmentSize.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>EV Charger</label>
                                        <select name="evcharger" value={propertyValues.evcharger} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.AvailableNotAvailable.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Fire extinguisher</label>
                                        <select name="fireextinguisher" value={propertyValues.fireextinguisher} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Travel Guide</label>
                                        <select name="travelguide" value={propertyValues.travelguide} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Events</label>
                                        <select name="events" value={propertyValues.events} onChange={handleInputChange}>
                                            <option value={0}>Select</option>
                                            {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Add photos (max 5)</label>
                                        <div class="imgupblocks">
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {propertyValues.propertyphoto1 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + propertyValues.propertyphoto1} alt="Room pic" class="img-fluid" />
                                                    }
                                                    <input
                                                        type="file"
                                                        onChange={handleChange}
                                                        ref={hiddenFileInput}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyPhoto(1)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleClick(1)}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {propertyValues.propertyphoto2 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + propertyValues.propertyphoto2} alt="Room pic" class="img-fluid" />
                                                    }
                                                    <input
                                                        type="file"
                                                        onChange={handleChange}
                                                        ref={hiddenFileInput2}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyPhoto(2)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleClick(2)}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {propertyValues.propertyphoto3 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + propertyValues.propertyphoto3} alt="Room pic" class="img-fluid" />
                                                    }
                                                    <input
                                                        type="file"
                                                        onChange={handleChange}
                                                        ref={hiddenFileInput3}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyPhoto(3)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleClick(3)}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {propertyValues.propertyphoto4 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + propertyValues.propertyphoto4} alt="Room pic" class="img-fluid" />
                                                    }
                                                    <input
                                                        type="file"
                                                        onChange={handleChange}
                                                        ref={hiddenFileInput4}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyPhoto(4)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleClick(4)}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                            <div class="imgupitem">
                                                <div class="imgprev">
                                                    {propertyValues.propertyphoto5 == "" ? null :
                                                        <img src={`${config.ImageUrl}images/Property/` + propertyValues.propertyphoto5} alt="Room pic" class="img-fluid" />
                                                    }
                                                    <input
                                                        type="file"
                                                        onChange={handleChange}
                                                        ref={hiddenFileInput5}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyPhoto(5)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleClick(5)}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                                    <div class="form-group">
                                        <label>Add Video</label>
                                        <div class="imgupblocks">
                                            <div class="imgupitem videoblock">
                                                {/* <div class="imgprev"></div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn"><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn"><i class="fa fa-solid fa-plus"></i></button>
                                                </div> */}
                                                <div class="imgprev">
                                                    {propertyValues.propertyvideo == "" ? null :
                                                        <video width="100%" height="100%" controls>
                                                            <source src={`${config.Url}images/PropertyVideo/` + propertyValues.propertyvideo} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    }
                                                    {/* { propertyValues.propertyvideo == "" ? null :
                                                    <img src={`${config.ImageUrl}images/PropertyVideo/` + propertyValues.propertyvideo} alt="Room pic" class="img-fluid" />
                                                    } */}
                                                    <input
                                                        type="file"
                                                        onChange={handleVideoChange}
                                                        ref={hiddenFileVideoRoom}
                                                        style={{ display: 'none' }} // Make the file input element invisible
                                                    />
                                                </div>
                                                <div class="addmorerooms">
                                                    <button class="minusbtn" onClick={deletePropertyVideo}><i class="fa fa-regular fa-trash-o"></i></button>
                                                    <button class="plusbtn" onClick={handleVideoClick}><i class="fa fa-solid fa-plus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {propertyValues.roomDetails.map((result, index) => (
                        <>
                            <div class="detail-2 addroomsec p-detail" key={index}>
                                <h4>Add Room</h4>
                                <div class="fm-area">
                                    <h5 class="roomCount">{index + 1}.</h5>
                                    <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                            <div class="form-group">
                                                <label>Add photos</label>
                                                <div class="imgupblocks">
                                                    <div class="imgupitem">
                                                        <div class="imgprev">
                                                            {result.roomphoto1 == "" ? null :
                                                                <img src={`${config.ImageUrl}images/Property/` + result.roomphoto1} alt="Room pic" class="img-fluid" />
                                                            }
                                                            <input
                                                                type="file"
                                                                onChange={handleRoomPhotoChange}
                                                                ref={hiddenFileInputRoom}
                                                                style={{ display: 'none' }} // Make the file input element invisible
                                                            />
                                                        </div>
                                                        <div class="addmorerooms">
                                                            <button class="minusbtn" onClick={deletePropertyRoomPhoto(1, index)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                            <button class="plusbtn" onClick={handleRoomPhotoClick(1, index)}><i class="fa fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="imgupitem">
                                                        <div class="imgprev">
                                                            {result.roomphoto2 == "" ? null :
                                                                <img src={`${config.ImageUrl}images/Property/` + result.roomphoto2} alt="Room pic" class="img-fluid" />
                                                            }
                                                        </div>
                                                        <div class="addmorerooms">
                                                            <button class="minusbtn" onClick={deletePropertyRoomPhoto(2, index)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                            <button class="plusbtn" onClick={handleRoomPhotoClick(2, index)}><i class="fa fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="imgupitem">
                                                        <div class="imgprev">
                                                            {result.roomphoto3 == "" ? null :
                                                                <img src={`${config.ImageUrl}images/Property/` + result.roomphoto3} alt="Room pic" class="img-fluid" />
                                                            }
                                                        </div>
                                                        <div class="addmorerooms">
                                                            <button class="minusbtn" onClick={deletePropertyRoomPhoto(3, index)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                            <button class="plusbtn" onClick={handleRoomPhotoClick(3, index)}><i class="fa fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="imgupitem">
                                                        <div class="imgprev">
                                                            {result.roomphoto4 == "" ? null :
                                                                <img src={`${config.ImageUrl}images/Property/` + result.roomphoto4} alt="Room pic" class="img-fluid" />
                                                            }
                                                        </div>
                                                        <div class="addmorerooms">
                                                            <button class="minusbtn" onClick={deletePropertyRoomPhoto(4, index)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                            <button class="plusbtn" onClick={handleRoomPhotoClick(4, index)}><i class="fa fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="imgupitem">
                                                        <div class="imgprev">
                                                            {result.roomphoto5 == "" ? null :
                                                                <img src={`${config.ImageUrl}images/Property/` + result.roomphoto5} alt="Room pic" class="img-fluid" />
                                                            }
                                                        </div>
                                                        <div class="addmorerooms">
                                                            <button class="minusbtn" onClick={deletePropertyRoomPhoto(5, index)}><i class="fa fa-regular fa-trash-o"></i></button>
                                                            <button class="plusbtn" onClick={handleRoomPhotoClick(5, index)}><i class="fa fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Room Name</label>
                                                <input type="text" name="roomname" id="roomname" value={result.roomname} onChange={(evnt) => handleInputRoomChange(index, evnt)} placeholder="#101 Twin Bedroom" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Room type</label>
                                                <select name="roomtype" value={result.roomtype} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.RoomType.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Room size (Sq ft)</label>
                                                <select name="roomsize" value={result.roomsize} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.ApartmentSize.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>No. of Bed</label>
                                                <select name="noOfBed" value={result.noOfBed} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Bedroom Type</label>
                                                <select name="bedroomtype" value={result.bedroomtype} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.BedroomType.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Furniture</label>
                                                <select name="furniture" value={result.furniture} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.Furniture.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Room rent ($)</label>
                                                <input type="text" name="propname" placeholder="$2,156" />
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Current status of rooms</label>
                                                <select name="currentstatus" value={result.currentstatus} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.AvailableNotAvailable.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Pet friendly</label>
                                                <select name="petfriendly" value={result.petfriendly} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Dietary preferences</label>
                                                <select name="dietarypreference" value={result.dietarypreference} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.DietPreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Smoking</label>
                                                <select name="smoking" value={result.smoking} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.AllowNotAllow.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Drinking</label>
                                                <select name="drinking" value={result.drinking} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.AllowNotAllow.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Cannabis</label>
                                                <select name="cannabits" value={result.cannabits} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.AllowNotAllow.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Age group preference</label>
                                                <select name="agegrouppreference" value={result.agegrouppreference} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.AgePreference.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Community Type</label>
                                                <select name="communitytype" value={result.communitytype} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.CommunityType.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Max. Residents</label>
                                                <select name="maxresidants" value={result.maxresidants} onChange={(evnt) => handleInputRoomChange(index, evnt)} >
                                                    <option value={0}>Select</option>
                                                    {master.NumbersUpto15.map((result) => (<option value={result.id}>{result.name}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="addmorerooms float-end">
                                                <button class="minusbtn" onClick={() => (DeleteRoom(index))}><i class="fa fa-solid fa-minus"></i></button>
                                                <button class="plusbtn" onClick={AddNewRoom}><i class="fa fa-solid fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    ))}

                    <div class="detail-3 p-detail">
                        <h4>Apartment Amenities</h4>
                        <div class="fm-area amilists">
                            <ul>
                                {master.ApartmentAmeneties.map((result) =>
                                (

                                    <li value={result.id} className={propertyValues.apartmentamenities.includes(result.id + ",") ? "active" : ""} onClick={handleApartmentAmeneties(result.id)}>{result.name}</li>

                                ))}
                            </ul>
                        </div>
                    </div>
                    <div class="detail-3 p-detail">
                        <h4>Community Amenities</h4>
                        <div class="fm-area amilists">
                            <ul>
                                {master.CommunityAmenities.map((result) =>
                                (
                                    <li value={result.id} className={propertyValues.communityamenities.includes(result.id + ",") ? "active" : ""} onClick={handleCommunityAmeneties(result.id)}>{result.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div class="detail-4 p-detail">
                        <h4>location</h4>
                        <div class="fm-area">
                            <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Country</label>
                                        <select>
                                            <option value={0}>Select</option>
                                            {master.Country.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Province</label>
                                        <input type="text" name="province" value={propertyValues.province} placeholder="Province" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={handleInputChange} value={propertyValues.address} placeholder="West 109th Street Ontario" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Landmark</label>
                                        <input type="text" name="landmark" onChange={handleInputChange} value={propertyValues.landmark} placeholder="Morningside Park" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Zip Code</label>
                                        <input type="text" name="zipcode" onChange={handleInputChange} value={propertyValues.zipcode} placeholder="K2H 5B6" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Mark on google</label>
                                        <input type="text" name="markongoogle" onChange={handleInputChange} value={propertyValues.markongoogle} placeholder="Enter google map link" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-5 cancellationPolicy p-detail">
                        <h4>cancellation policy</h4>
                        <div class="fm-area">
                            <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <p class="mb-0 text-black-100 refundpol">Is there refund policy?</p>
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="cancRadiobtn">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={updatePolicy(2)} id="flexRadioDefault1" checked={propertyValues.cancellantionpolicy == 2 ? true : false} />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                No
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={updatePolicy(1)} id="flexRadioDefault2" checked={propertyValues.cancellantionpolicy == 1 ? true : false} />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-6 description p-detail">
                        <h4>description</h4>
                        <div class="fm-area">
                            <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Write description about apartment.</label>
                                        <textarea maxLength={1000} name="description" onChange={handleInputChange} value={propertyValues.description}></textarea>
                                        <div class="totalCount">{1000 - propertyValues.description.length} Words left</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-7 hostdetail description p-detail">
                        <h4>apartment host details</h4>
                        <div class="fm-area">
                            <div class="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" name="host_name" id="host_name" onChange={handleInputChange} value={propertyValues.host_name} placeholder="David Oliver" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Email ID</label>
                                        <input type="text" name="host_emailid" id="host_emailid" onChange={handleInputChange} value={propertyValues.host_emailid} placeholder="david.oliver@gmail.com" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" name="host_mobileno" id="host_mobileno" onChange={handleInputChange} value={propertyValues.host_mobileno} placeholder="+1 85 8963 5523" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Date of Birth</label>
                                        <div class="input-group date" id="datepicker">
                                            <input type="date" name="host_mobileno" class="form-control" id="date" onChange={handleInputChange} value={propertyValues.host_dob} />
                                            {/* <span class="input-group-append">
                                                <span class="input-group-text bg-light d-block">
                                                    <i class="fa fa-calendar"></i>
                                                </span>
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Gender</label>
                                        <select>
                                            <option value={0}>Select</option>
                                            {master.Gender.map((result) => (<option value={result.id}>{result.name}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="input-group date" id="datepicker">
                                        <label>ID proof</label>
                                        <input type="text" name="host_idproof" placeholder="" className="form-control" value={propertyValues.host_idproof} />
                                        <span className="input-group-append">
                                            <span className="input-group-text bg-light d-block" onClick={handleDocumentClick(1)}>
                                                <i className="fa fa-upload"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Permanent Address</label>
                                        <input type="text" name="host_location" id="host_location" onChange={handleInputChange} value={propertyValues.host_location} placeholder="" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="input-group date" id="datepicker">
                                        <label>Property Ownership Document</label>
                                        <input type="text" name="host_propertyOwnershopdocument" placeholder="" className="form-control" value={propertyValues.host_propertyOwnershopdocument} />
                                        <span className="input-group-append">
                                            <span className="input-group-text bg-light d-block" onClick={handleDocumentClick(2)}>
                                                <i className="fa fa-upload"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Employment Details</label>
                                        <input type="text" name="host_employmentdetails" id="host_location" onChange={handleInputChange} value={propertyValues.host_employmentdetails} placeholder="" />
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="input-group date" id="datepicker">
                                        <label>Company ID Proof</label>
                                        <input type="text" name="host_companyidproof" placeholder="" className="form-control" value={propertyValues.host_companyidproof} />
                                        <span className="input-group-append">
                                            <span className="input-group-text bg-light d-block" onClick={handleDocumentClick(3)}>
                                                <i className="fa fa-upload"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>About yourself</label>
                                        <textarea maxLength={500} name="host_aboutyourself" id="host_aboutyourself" onChange={handleInputChange} value={propertyValues.host_aboutyourself}></textarea>
                                        <div class="totalCount">{500 - propertyValues.host_aboutyourself.length} Words left</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 buttonGrp text-center mb-5">
                        <button class="btn btn-secondary text-uppercase" style={{ marginRight: '15px' }}>Cancel</button>
                        <button class="btn btn-primary text-uppercase" onClick={handleSaveProperty}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FillDetail;