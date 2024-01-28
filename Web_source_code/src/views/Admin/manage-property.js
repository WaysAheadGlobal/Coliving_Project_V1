import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsersList from './manage-users-list';
import PropertyList from './manage-property-list';
import Modal from 'react-bootstrap/Modal';

function ManageProperty() {
    const history = useNavigate();
    const [ConnectedHostName, SetConnectedHostName] = useState('');
    const [MyPropertyList, setMyPropertyList] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [currentUserId, setCurrentUserId] = useState(1);
    const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const [connectWithHost, SetConnectWIthHost] = useState(false);
    const SetConnectWIthHostClick = (id, name) => (e) => {
        SetConnectedHostName(name);
        if(id == 1){
            SetConnectWIthHost(true);
        }
        if(id == 0){
            SetConnectWIthHost(false);
        }
    }
    const gotoDetail = (id) => ()=> {
        history("/admin/manage-property-view/"+id);
    }

    const currentRecords = MyPropertyList && MyPropertyList.length > 0 && MyPropertyList.slice(indexOfFirstRecord, 
        indexOfLastRecord);

    const nPages = Math.ceil(MyPropertyList.length / recordsPerPage)
        
    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }

    const HandleViewPage = (i, userid) => (e) => {
        SetViewPage(i);
        setCurrentUserId(userid)
    }
    useEffect(() => {
        getProperties()
    }, []);
    function getProperties() {
        const apiUrl = `${config.Url}api/admin/PropertyList`;
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
                    setMyPropertyList(data.propertyList);
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
                <h4 class="content-title">
                    Manage Property
                </h4>
            </div>
            <PropertyList currentPage={currentPage} recordsPerPage={recordsPerPage} indexOfLastRecord={indexOfLastRecord}
                      indexOfFirstRecord={indexOfFirstRecord} nPages={nPages} SetPage={SetPage} currentRecords={currentRecords}
                      HandleViewPage={HandleViewPage} SetConnectWIthHostClick={SetConnectWIthHostClick} gotoDetail={gotoDetail} />

            <Modal id="contacthost" show={connectWithHost} onHide={()=> SetConnectWIthHost(false)} className="modal-xl">
                <div>
                    <div class="">
                        <div class="closeBtn" onClick={()=> SetConnectWIthHost(false)}>
                            <i class="fa fa-solid fa-xmark"></i>
                        </div>
                        <h4 id="hostModalLabel">Connect with {ConnectedHostName}</h4>
                        <div class="to mb-4">
                            <label>To:</label>
                            <div class="hostimg">
                            {/* {PropertyInfo.profilepic == null || PropertyInfo.profilepic == "" ? null :
                                        <img src={`${config.ImageUrl}images/users/` + PropertyInfo.profilepic} class="img-fluid" alt="User uploaded image" />
                                    } */}
                                    <label>{ConnectedHostName}</label>
                                    <div class="badge3 text-uppercase">
                                        <img src={require('../../img/icons/verified.png')} class="img-fluid" alt="Verified" />
                                            Verified host
                                    </div>
                            </div>
                        </div>
                        <div class="to messgebx">
                            <label>Message:</label>
                            <textarea></textarea>
                        </div>
                        <div class="mt-4 buttonGrp text-end">
                            <button class="btn btn-secondary me-2" onClick={()=> SetConnectWIthHost(false)}>Cancel</button>
                            <button class="btn btn-primary" onClick={()=> SetConnectWIthHost(false)}>Send</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ManageProperty;