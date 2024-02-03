import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsersList from './manage-users-list';
import UserProfileView from './manage-user-profileview';
import UserMoreDetail from './manage-user-moredetail';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function ManageUsers() {
    const history = useNavigate();
    const [MyUsers, setMyUsers] = useState({});
    const [IdDocument, SetIDDocument] = useState({ status: 0, remarks: '', userid: 0 });
    const [UnivrsityIDDocument, SetUniivrsityIDDocument] = useState({ status: 0, remarks: '', userid: 0 });
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
        SetIDDocument({ ...IdDocument, ['userid']: userid });
        SetUniivrsityIDDocument({ ...IdDocument, ['userid']: userid });
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
    const updateIDProofStatus = (id) => (e) => {
        SetIDDocument({ ...IdDocument, ['status']: id });
    }
    const updateUniversityProofStatus = (id) => (e) => {
        SetUniivrsityIDDocument({ ...IdDocument, ['status']: id });
    }
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        SetIDDocument({ ...IdDocument, [name]: value });
    }
    const handleUniversityInputChange = (e) => {

        const { name, value } = e.target;
        SetUniivrsityIDDocument({ ...IdDocument, [name]: value });
    }
    function updateIdProof() {
        const apiUrl = `${config.Url}api/admin/updateIdProof`;
        let formData = JSON.stringify({
            "user_id": IdDocument.userid,
            "status": IdDocument.status,
            "remarks": IdDocument.remarks
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
    function updateUniversityProof() {
        const apiUrl = `${config.Url}api/admin/UpdateUniversityIDProof`;
        let formData = JSON.stringify({
            "user_id": UnivrsityIDDocument.userid,
            "status": UnivrsityIDDocument.status,
            "remarks": UnivrsityIDDocument.remarks
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
    const updateUserStatus = (status) => (e) => {
        const apiUrl = `${config.Url}api/admin/updateUserStatus`;
        let formData = JSON.stringify({
            "user_id": IdDocument.userid,
            "status": status
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
                if (data.status === 200) {
                    if (status == 1) {
                        toast.success("User Profile Approved Successfully", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                    else {
                        toast.success("User Profile Rejected Successfully", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                    history("/admin/manage-user");
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
    const handleDeleteProfile = (userid) => (e) => {
        confirmAlert({
            title: '',
            message: 'Are you sure to delete this user?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const apiUrl = `${config.Url}api/admin/DeleteUser`;
                        let formData = JSON.stringify({
                            "user_id": userid
                        });
                        fetch(apiUrl, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": localStorage.getItem("usertoken")
                            },
                            body: formData
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.status === 200) {
                                    toast.success("User Account deleted successfully", {
                                        position: toast.POSITION.TOP_RIGHT,
                                    });
                                    window.location.reload();
                                } else {
                                    toast.error("Technical Error. Please try again later.", {
                                        position: toast.POSITION.TOP_RIGHT,
                                    });
                                }
                            })
                            .catch((error) => {
                                console.error("Error fetching user data:", error);
                            });
                        
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
    return (
        <>
      
            <ToastContainer />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
            ></link>
            <div class="adminTitle">
                <h4 class="content-title backitem">
                    <span>Manage Membership</span>
                    {viewPage == 1 ? null :
                        <span><a href="/admin/manage-user"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
                    }
                </h4>
            </div>
            {viewPage == 1 ?
                <div class="adminCard">
                    <div class="profileform">
                        <UsersList MyUsers={MyUsers} currentPage={currentPage} recordsPerPage={recordsPerPage} indexOfLastRecord={indexOfLastRecord}
                            indexOfFirstRecord={indexOfFirstRecord} nPages={nPages} SetPage={SetPage} currentRecords={currentRecords}
                            HandleViewPage={HandleViewPage} handleDeleteProfile={handleDeleteProfile} />
                    </div>
                </div>
                :
                viewPage == 2 ?
                    <UserProfileView CurrentUserInfo={CurrentUserInfo} Detail={CurrentUserDetail} HandleViewPage={HandleViewPage} currentUserId={currentUserId}
                        IdDocument={IdDocument} UnivrsityIDDocument={UnivrsityIDDocument} updateIDProofStatus={updateIDProofStatus}
                        handleInputChange={handleInputChange} updateIdProof={updateIdProof} updateUniversityProof={updateUniversityProof}
                        handleUniversityInputChange={handleUniversityInputChange} updateUniversityProofStatus={updateUniversityProofStatus} />
                    :
                    <UserMoreDetail CurrentUserInfo={CurrentUserInfo} Detail={CurrentUserDetail} updateUserStatus={updateUserStatus} />
            }
        </>
    );
}

export default ManageUsers;