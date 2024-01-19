import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

function AdminDashboard() {
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
                                    <span>90</span>
                                    <label>Total User</label>
                                </div>
                                <div class="chartArea">
                                    {/* <div class="circular-progress" data-inner-circle-color="white" data-percentage="50" data-progress-color="#3B4CB8" data-bg-color="#E1E5FF">
                                        <div class="inner-circle"></div>
                                        <p class="percentage">0%</p>
                                    </div> */}
                                    <CircularProgressbar  value={percentage} className='circular-progress' text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>75</span>
                                    <label>Total Property Owner</label>
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
                                    })} value={percentage} className='circular-progress' text={`${percentage}%`} />
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>60</span>
                                    <label>Total Booking</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={percentage} className='circular-progress' text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>40</span>
                                    <label>Total Request For Booking</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={percentage} className='circular-progress' text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>85</span>
                                    <label>Total Meal</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={percentage} className='circular-progress' text={`${percentage}%`} />;
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="adminCard">
                                <div class="totalValues">
                                    <span>48</span>
                                    <label>Total User</label>
                                </div>
                                <div class="chartArea">
                                <CircularProgressbar  value={percentage} className='circular-progress' text={`${percentage}%`} />;
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
                                <tr>
                                    <td class="text-center">1</td>
                                    <td class="text-center">John Mark</td>
                                    <td class="text-center">john.mark@gmail.com</td>
                                    <td class="text-center">Urban Styled Apt.</td>
                                    <td class="text-center">25/11/2024</td>
                                    <td class="text-center">Visa</td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td class="text-center">Callan Rose</td>
                                    <td class="text-center">callan.rose@gmail.com</td>
                                    <td class="text-center">Amazing Cozy Apt.</td>
                                    <td class="text-center">12/11/2024</td>
                                    <td class="text-center">Visa</td>
                                </tr>
                                <tr>
                                    <td class="text-center">3</td>
                                    <td class="text-center">Nylah Hood</td>
                                    <td class="text-center">nylah.hood@gmail.com</td>
                                    <td class="text-center">Beautiful Elegant Apt.</td>
                                    <td class="text-center">29/10/2024</td>
                                    <td class="text-center">Visa</td>
                                </tr>
                                <tr>
                                    <td class="text-center">4</td>
                                    <td class="text-center">Eliza Yates</td>
                                    <td class="text-center">eliza.yates@gmail.com</td>
                                    <td class="text-center">Classic Elegant House</td>
                                    <td class="text-center">22/10/2024</td>
                                    <td class="text-center">Visa</td>
                                </tr>
                                <tr>
                                    <td class="text-center">5</td>
                                    <td class="text-center">Kyson Blake</td>
                                    <td class="text-center">kyson.blake@gmail.com</td>
                                    <td class="text-center">Elegant Vibrant House</td>
                                    <td class="text-center">10/10/2024</td>
                                    <td class="text-center">Visa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;