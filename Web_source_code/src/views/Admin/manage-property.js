import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsersList from './manage-users-list';
import PropertyList from './manage-property-list';

function ManageProperty() {
    const history = useNavigate();
    const [MyPropertyList, setMyPropertyList] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [currentUserId, setCurrentUserId] = useState(1);
    const [recordsPerPage] = useState(2);
    const [viewPage, SetViewPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  

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
                      HandleViewPage={HandleViewPage}/>
        </>
    );
}

export default ManageProperty;