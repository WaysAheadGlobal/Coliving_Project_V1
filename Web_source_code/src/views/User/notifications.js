import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../Home/ListingItem';
import master from './../../data/masterData.json';

function Notifications() {
    const [MyNotifications, SetMyNotifications] = useState([]);
	const [filterValues, SetFilterValues]= useState({country: 0, moveInDate: '', apartment: 0, roomtype: 0, kitchen: 0, evcharger: 0, 
	agepreference: 0, furniture: 0});
	const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	

    const currentRecords = MyNotifications && MyNotifications.length > 0 && MyNotifications.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages = Math.ceil(MyNotifications && MyNotifications.length / recordsPerPage)

    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }

    useEffect(()=> {
        getNotifications()
    }, [])

	function getNotifications() {
		const apiUrl = `${config.Url}api/user/GetMyNotifications`;
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
                    SetMyNotifications(data.res);
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


    return (
        <div class="content-area">
            <h4 class="content-title">Notification</h4>
            <div class="profileform notify">
                <div class="searchbtn">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" disabled data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Unread</button>
                        </li>
                    </ul>
                    <form class="ntySearch" action="" method="">
                        <span>Search</span>
                        <div>
                            <input type="text" name="search" placeholder="Search" />
                                <span><i class="fa fa-solid fa-magnifying-glass"></i></span>
                        </div>
                    </form>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <label class="catwise">Today</label>
                        {currentRecords && currentRecords.length > 0 && currentRecords.map((item, index)=> (
                            <div class="notiItem">
                            <div class="ntfydate">
                            {item.noti_date.split('/')[2]}/{item.noti_date.split('/')[1]}<br/>
                            {item.noti_date.split('/')[0]}
                            </div>
                            <p class="mb-0">{item.message}</p>
                        </div>
                        ))}
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.</div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;