import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../Home/ListingItem';
import master from './../../data/masterData.json';

function MyStay() {
    const [PropertyList, SetPropertyListing] = useState([]);
	const [filterValues, SetFilterValues]= useState({country: 0, moveInDate: '', apartment: 0, roomtype: 0, kitchen: 0, evcharger: 0, 
	agepreference: 0, furniture: 0});
	const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	

    const currentRecords = PropertyList && PropertyList.length > 0 && PropertyList.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages = Math.ceil(PropertyList && PropertyList.length / recordsPerPage)

    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }


	const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetFilterValues({ ...filterValues, [name]: value });
		//getListing();
    }

    useEffect(()=> {
        getListing()
    }, [filterValues])

	function getListing() {
		const apiUrl = `${config.Url}api/user/getMyStayRequests`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    SetPropertyListing(data.resp);
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

	function removeFromList(property_id) {
		const apiUrl = `${config.Url}api/property/AddRemovePropertyToWaitingList`;
		let formData = JSON.stringify({
			"property_id": property_id
		});

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
                if (data.resp === 0) {
                    toast.success('Property removed from waiting list.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    window.location.reload();
                } else {
					toast.success('Property removed from waiting list.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
	}
    return (
        <div class="content-area">
            <ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
            <h4 class="content-title">My stay</h4>
            <div class="profileform myStayPage">
                <div class="row g-4">
                {currentRecords && currentRecords.length > 0 && currentRecords.map((item, index)=> (
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="stayItem">
                        <div class="imgblock">
                            <img src={`${config.ImageUrl}images/Property/` + item.propertyphoto1} alt="My Stay" class="img-fluid" />
                                <div class="icon" onClick={()=> removeFromList(item.id)}>
                                    <img src={require('../../img/icons/delete.png')} class="img-fluid" alt="delete" />
                                </div>
                        </div>
                        <div class="bodydet">
                            <label>{item.province}</label>
                            <h4>{item.propertyname}</h4>
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
                ))}
                </div>
            </div>
        </div>
    );
}

export default MyStay;