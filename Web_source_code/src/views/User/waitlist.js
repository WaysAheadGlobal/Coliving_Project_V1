import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function WaitList() {
	const [WaitingList, SetWaitingList] = useState([]);
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
		const apiUrl = `${config.Url}api/user/getPropertyWaitingList`;
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
					SetWaitingList(data.resp);
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
			<ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
			<h4 class="content-title backitem">
				<span>my stay {">"} waitlist for this property</span>
				<span><a href="/user/my-stay"><i class="fa fa-solid fa-angles-left"></i>&nbsp; Back</a></span>
			</h4>
			<div class="profileform myStayPage">
				<div class="row g-4">
					{WaitingList && WaitingList.length > 0 && WaitingList.map((item, index) => (
						<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="waititem">
								<div class="usrnme">
									{item.profilePic == null || item.profilePic == "" ? null :
                                            <img src={`${config.ImageUrl}images/users/` + item.profilePic} class="img-fluid" alt="User uploaded image" />
                                            }
									<div class="nmepos">
										<h4>{item.Fullname}</h4>
										<span>{item.city}</span>
										<span>{item.province}</span>
									</div>
								</div>
								<div class="matchedprof">
									<img src={require('../../img/icons/Speed.png')} alt="Spped Icons" class="img-fluid" />
									<span>{index == 0 ? "70" : index == 1 ? "40" : index == 2 ? "80" : "25"}%</span>
									<div class="profstatus">profile matched</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default WaitList;