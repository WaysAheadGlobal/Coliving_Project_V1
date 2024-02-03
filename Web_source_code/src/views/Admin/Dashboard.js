import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";
import master from '../../data/masterData.json'
import React, { useEffect, useState, useRef } from "react";
import config from "../../Config/config";
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function AdminDashboard() {
    const [DashboardData, SetDashboardData] = useState([]);
    const [BookingData, SetBookingData] = useState([]);
    useEffect(()=> {
        getDashboardData();
    }, {})

    function getDashboardData(){
        const apiUrl = `${config.Url}api/admin/getDashboardDetails`;
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
                    SetDashboardData(data.result);
                    SetBookingData(data.bookingInfo)
                } 
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
    const percentage = 66;
    const chart1 = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          }
        },
        series: [
          {
            name: "Total Booking",
            data: [30, 40, 45, 50, 49, 60, 70, 75, 80, 81, 80, 70]
          },
          {
            name: "Request for Booking",
            data: [40, 30, 20, 50, 49, 60, 70, 75, 80, 81, 80, 70]
          }
        ]
      };

      const chart2 = {
        options: {
          chart: {
            id: "line"
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          }
        },
        series: [
          {
            name: "Total Booking",
            data: [30, 40, 45, 50, 49, 60, 70, 75, 80, 81, 80, 70]
          }
        ]
      };


    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title">
                    Dashboard
                </h4>
            </div>
            <div class="dashBody">
                <div class="valueGrid">
                    <div class="row g-4">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>{DashboardData && DashboardData.data && (DashboardData.data.totalUsers)}</span>
                                    <label>Total User</label>
                                </div>
                                <div class="chartArea">
                                    {/* <div class="circular-progress" data-inner-circle-color="white" data-percentage="50" data-progress-color="#3B4CB8" data-bg-color="#E1E5FF">
                                        <div class="inner-circle"></div>
                                        <p class="percentage">0%</p>
                                    </div> */}
                                    <CircularProgressbar  value={DashboardData && DashboardData.data && (DashboardData.data.totalUsers)} className='circular-progress' text={`${DashboardData && DashboardData.data && (DashboardData.data.totalUsers)}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>{DashboardData && DashboardData.data && (DashboardData.data.totalPropertyowners)}</span>
                                    <label>Total Home Owner</label>
                                </div>
                                <div class="chartArea">
                                    {/* <div class="circular-progress" data-inner-circle-color="white" data-percentage="47" data-progress-color="" data-bg-color="#E1E5FF">
                                        <div class="inner-circle"></div>
                                        <p class="percentage">0%</p>
                                    </div> */}
                                    <CircularProgressbar styles={buildStyles({
                                        pathColor: `#000, ${percentage / 100})`,
                                        textColor: '#f88',
                                        backgroundColor: '#E1E5FF',
                                    })} value={DashboardData && DashboardData.data && (DashboardData.data.totalPropertyowners)} className='circular-progress' text={`${DashboardData && DashboardData.data && (DashboardData.data.totalPropertyowners)}%`} />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>{DashboardData && DashboardData.data && (DashboardData.data.totalBookings)}</span>
                                    <label>Total Booking</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={DashboardData && DashboardData.data && (DashboardData.data.totalBookings)} className='circular-progress' text={`${DashboardData && DashboardData.data && (DashboardData.data.totalBookings)}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>{DashboardData && DashboardData.data && (DashboardData.data.totalBookingsPending)}</span>
                                    <label>Total Request For Booking</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={DashboardData && DashboardData.data && (DashboardData.data.totalBookingsPending)} className='circular-progress' text={`${DashboardData && DashboardData.data && (DashboardData.data.totalBookingsPending)}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>4</span>
                                    <label>Total Meal</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={4} className='circular-progress' text={`${4}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>2</span>
                                    <label>Total Events</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={2} className='circular-progress' text={`${2}%`} />;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bookchart mt-4">
                    <div class="row g-4">
                        <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="bookingchart cmn">
                                <div class="adminCard">
                                    <label class="cardHead mb-4">Booking</label>
                                    <div class="chartArea w-100">
                                        {/* <div id="booking"></div> */}
                                        <Chart
                                            options={chart1.options}
                                            series={chart1.series}
                                            type="line"
                                            
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="propChart cmn">
                                <div class="adminCard">
                                    <label class="cardHead">User vs Property</label>
                                    <div class="chartArea w-100">
                                    <Chart
                                            options={chart2.options}
                                            series={chart2.series}
                                            type="bar"
                                            height={500}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashTable table-layout1 mt-5">
                    <label class="cardHead">Booking Details</label>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">S.no</th>
                                    <th class="text-center">User name</th>
                                    <th class="text-center">Email ID</th>
                                    <th class="text-center">Proprty name</th>
                                    <th class="text-center">Booking date</th>
                                    <th class="text-center">Payment Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                            {BookingData && BookingData.length > 0 &&  BookingData.map((result, index)=> (
                                <tr>
                                    <td class="text-center">{index + 1}</td>
                                    <td class="text-center">{result.Fullname}</td>
                                    <td class="text-center">{result.email}</td>
                                    <td class="text-center">{result.propertyname}</td>
                                    <td class="text-center">{result.bookingfrom}</td>
                                    <td class="text-center">{result.paymentmode}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;