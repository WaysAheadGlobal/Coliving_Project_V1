import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from './ListingItem';



const Listing = () => {
    const [PropertyList, SetPropertyListing] = useState([]);
    useEffect(()=> {
        const apiUrl = `${config.Url}api/listing/getListing`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
            //body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    //this.setState({ postData: data.data });
                    SetPropertyListing(data.listing);
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
    }, [])

	return (
        
		<section class="padd80 page colivingpage mt-5">
	<div class="container">
		<div  class="heading1 mb-4 text-start">
			<h2>Coliving in Canada</h2>
		</div>
		<div class="co-filter">
			<ul>
				<li>Canada</li>
				<li>Move In Date</li>
				<li>Budget</li>
				<li>Room Type</li>
				<li>Community</li>
				<li>Travel guide</li>
				<li>Meal Plan</li>
				<li>More Filters</li>
			</ul>
		</div>
		<div class="totalCount mt-4">
			<p class="m-0">{PropertyList.length} coliving spaces</p>
		</div>
		<div class="row mt-4">
			<div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
				<div class="allsideArticle">
					{PropertyList && PropertyList.length > 0 && PropertyList.map((item, index)=> (
                        <ListItem  item={item} />
                    ))}
				</div>

			</div>
			<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
				<div class="mapview">
					<img src={require('../../img/map.png')} alt="Map" class="img-fluid" />
				</div>
			</div>
		</div>
	</div>
</section>
	);
}

export default Listing;
