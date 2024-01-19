import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsersList from './manage-users-list';
import UserProfileView from './manage-user-profileview';
function ManageUsers() {
    const history = useNavigate();
    const [MyUsers, setMyUsers] = useState({});
    const [CurrentUserInfo, SetCurrentUserInfo] = useState({});
    const [CurrentUserDetail, SetCurrentUserDetail] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [currentUserId, setCurrentUserId] = useState(1);
    const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


    const currentRecords = MyUsers && MyUsers.length > 0 && MyUsers.slice(indexOfFirstRecord, 
        indexOfLastRecord);

    const nPages = Math.ceil(MyUsers.length / recordsPerPage)
        
    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }

    const HandleViewPage = (i, userid) => (e) => {
        SetViewPage(i);
        setCurrentUserId(userid)
        getUserInfo(userid);
    }

    useEffect(() => {
        getUsers()
    }, []);
    function getUserInfo(userid) {
        const apiUrl = `${config.Url}api/admin/UserInfo`;
        let formData = JSON.stringify({
            "user_id": userid
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
                console.log(data);
                if (data.status === 200) {
                    SetCurrentUserInfo(data.user[0]);
                    SetCurrentUserDetail(data.detail[0]);
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

    function getUsers() {
        const apiUrl = `${config.Url}api/admin/allUsers`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === 200) {
                    //this.setState({ postData: data.data });
                    setMyUsers(data.users);
                    // setTotalCount(data.users.length);
                    // setTotalPages(data.users.length / limit)
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
        <>
            <div class="adminTitle">
            <h4 class="content-title backitem">
				<span>Manage User</span>
                {viewPage == 1 ? null :
				<span><a href="javascript:void(0);" onClick={HandleViewPage(1, 0)}><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
}
            </h4>
            </div>
            {viewPage == 1 ?
            <div class="adminCard">
                <div class="profileform">
                    <UsersList MyUsers={MyUsers} currentPage={currentPage} recordsPerPage={recordsPerPage} indexOfLastRecord={indexOfLastRecord}
                      indexOfFirstRecord={indexOfFirstRecord} nPages={nPages} SetPage={SetPage} currentRecords={currentRecords}
                      HandleViewPage={HandleViewPage} />
                </div>
            </div>
            :
            <UserProfileView CurrentUserInfo={CurrentUserInfo} CurrentUserDetail={CurrentUserDetail} /> }
        </>
    );
}

export default ManageUsers;