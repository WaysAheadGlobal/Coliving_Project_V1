
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ResidantsList() {
    const [ResidantList, SetResidantList] = useState([]);
    const params = useParams();

    useEffect(() => {
        if (params.id != "0") {
            getWaitingList();
        }
    }, [])
    function getWaitingList() {
        let formData = JSON.stringify({
            "property_id": params.id
        });
        const apiUrl = `${config.Url}api/user/getPropertyResidants`;
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
                    SetResidantList(data.resp);
                } else {
                    toast.error("Error!!!!", {
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
            <h4 class="content-title backitem">
                <span>my stay {">"} Residants for this property</span>
                <span><a href="/user/my-stay"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
            </h4>
            <div class="profileform myStayPage">
                <div class="row g-4">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="table-layout1">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center">image</th>
                                            <th class="text-center">User name</th>
                                            <th class="text-center">Province</th>
                                            <th class="text-center">City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ResidantList && ResidantList.length > 0 && ResidantList.map((item, index) => (
                                            <tr>
                                                <td class="text-center tbleimg">
                                                    {item.profilePic == null || item.profilePic == "" ? null :
                                                        <img src={`${config.ImageUrl}images/users/` + item.profilePic} class="img-fluid" alt="User uploaded image" />
                                                    }
                                                </td>
                                                <td class="text-center">{item.Fullname}</td>
                                                <td class="text-center">{item.province}</td>
                                                <td class="text-center">{item.city}</td>
                                            </tr>
                                        ))}
                                        {ResidantList && ResidantList.length == 0 ?
                                            <tr>
                                                <td class="text-center" colSpan={4}>
                                                    No Residants </td>
                                            </tr>
                                            : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ResidantsList;