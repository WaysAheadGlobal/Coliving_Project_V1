import React, { useEffect, useState, useRef  } from "react";
import config from "../../Config/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from './ListingItem';
import master from './../../data/masterData.json';



const Listing = () => {
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

    const nPages = Math.ceil(PropertyList.length / recordsPerPage)

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
		const apiUrl = `${config.Url}api/listing/getListing`;
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("usertoken")
            },
            body: JSON.stringify(filterValues),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
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
	}

	return (
        
		<section class="padd80 page colivingpage mt-5">
	<div class="container">
		<div  class="heading1 mb-4 text-start">
			<h2>Coliving in Canada</h2>
		</div>
		<div class="co-filter">
		<form action="" method="">
				<ul>
					<li>
						<select name="country" class="minimal" value={filterValues.country} onChange={handleInputChange}>
							<option value={0}>Country</option>
                            {master.Country.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<input type="date" name="moveInDate" className="minimal" placeholder="Move-In Date" value={filterValues.moveInDate} onChange={handleInputChange}></input>
					</li>
					<li>
						<select name="apartment" class="minimal" value={filterValues.apartment} onChange={handleInputChange}>
							<option value={0}>House Type</option>
							{master.HouseType.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<select name="roomtype" class="minimal" value={filterValues.roomtype} onChange={handleInputChange}>
							<option value={0}>Room Type</option>
							{master.RoomType.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<select name="kitchen" class="minimal" value={filterValues.kitchen} onChange={handleInputChange}>
							<option value={0}>Kitchen</option>
							{master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<select name="evcharger" class="minimal" value={filterValues.evcharger} onChange={handleInputChange}>
							<option value={0}>Ev Charger</option>
							{master.YesNo.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<select name="agepreference" class="minimal" value={filterValues.agepreference} onChange={handleInputChange}>
							<option value={0}>Age Preference</option>
							{master.AgePreference.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
					<li>
						<select name="furniture" class="minimal" value={filterValues.furniture} onChange={handleInputChange}>
							<option value={0}>Parking</option>
							{master.Furniture.map((result) => (<option value={result.id}>{result.name}</option>))}
						</select>
					</li>
				</ul>
			</form>
		</div>
		<div class="totalCount mt-4">
			<p class="m-0">{PropertyList.length} coliving spaces</p>
		</div>
		<div class="row mt-4">
			<div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
				<div class="allsideArticle">
					{currentRecords && currentRecords.length > 0 && currentRecords.map((item, index)=> (
                        <ListItem  item={item} />
                    ))}
				</div>
				<div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-center">
                            <div class="pagi">
                              
                                {nPages > 1 && currentPage > 1 ?
                                <div class="prev" onClick={SetPage(currentPage - 1)}><i class="fa fa-solid fa-angles-left"></i> <label>Previous</label></div>
                                : null}
                                <div class="nums">
                                {(function (rows, i, len) {
                                    while (++i <= len) {
                                    rows.push(<a onClick={SetPage(i)} class={i == currentPage ? "active": ""} href="javascript:void(0)">{i}</a>)
                                    }
                                    return rows;
                                })([], 0, nPages)}
                                    {/* <a class="active" href="javascript:void(0)">1</a>
                                    <a href="javascript:void(0)">2</a>
                                    <a href="javascript:void(0)">3</a>
                                    <a href="javascript:void(0)">4</a> */}
                                </div>
                                {nPages > currentPage ?
                                <div class="next" onClick={SetPage(currentPage + 1)}><label>Next</label> <i class="fa fa-solid fa-angles-right"></i></div>
                                : null}
                                
                            </div>
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
