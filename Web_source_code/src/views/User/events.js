import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Events() {
    const [MyEvents, SetEvents] = useState([{
        Date: "10", Month: "Feb", Time: "07:00PM", Image: "tableimg1.png", EventName: "Christmas carnival", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "12", Month: "Feb", Time: "57:00PM", Image: "tableimg1.png", EventName: "Halloween", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "16", Month: "Feb", Time: "08:00PM", Image: "tableimg1.png", EventName: "Super Monday", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "20", Month: "Feb", Time: "07:00PM", Image: "tableimg1.png", EventName: "Oak Street Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "05", Month: "Mar", Time: "06:00PM", Image: "tableimg1.png", EventName: "Sterling Forest Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "10", Month: "Mar", Time: "07:30PM", Image: "tableimg1.png", EventName: "Highwood Terrace Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "15", Month: "Mar", Time: "07:50PM", Image: "tableimg1.png", EventName: "Victoria Glen Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "20", Month: "Mar", Time: "09:00PM", Image: "tableimg1.png", EventName: "Events by Isabella", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "25", Month: "Mar", Time: "07:00PM", Image: "tableimg1.png", EventName: "Xavier & Cole Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "04", Month: "Apr", Time: "02:20PM", Image: "tableimg1.png", EventName: "Lightning Bug Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "08", Month: "Apr", Time: "08:00PM", Image: "tableimg1.png", EventName: "Polka Dot Party", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "12", Month: "Apr", Time: "09:00PM", Image: "tableimg1.png", EventName: "Cardinal & Pine Event", Location: "Urban Styled Apt.", Charges: 18
    },
    {
        Date: "20", Month: "Apr", Time: "10:00PM", Image: "tableimg1.png", EventName: "Cashmere Event", Location: "Urban Styled Apt.", Charges: 18
    }]);

    const [recordsPerPage] = useState(10);
    const [viewPage, SetViewPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	

    const currentRecords = MyEvents && MyEvents.length > 0 && MyEvents.slice(indexOfFirstRecord,
        indexOfLastRecord);

    const nPages = Math.ceil(MyEvents && MyEvents.length / recordsPerPage)

    const SetPage = (i) => (e) => {
        setCurrentPage(i);
    }

    const confirm = (e) => {
        toast.success('Event Booked Successfully.', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    return (
        <div class="content-area">
            <ToastContainer />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
				></link>
            <h4 class="content-title">Event</h4>
            <div class="profileform">
                <div class="table-layout1">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">Date/Time</th>
                                    <th class="text-center">image</th>
                                    <th class="text-center">event name</th>
                                    <th class="text-center">Location</th>
                                    <th class="text-center">Charges ($)</th>
                                    <th class="text-center">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords && currentRecords.length > 0 && currentRecords.map((item, index)=> (
                                <tr>
                                    <td class="text-center">
                                        <div class="datef">
                                            <div>{item.Date} <br/>{item.Month}</div>
                                            <small>{item.Time}</small>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('./../../../src/img/tableimg1.png')} class="img-fluid" alt="Table Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        {item.EventName}
                                    </td>
                                    <td class="text-center">
                                        {item.Location}
                                    </td>
                                    <td class="text-center">
                                        {item.Charges}
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-secondary" onClick={confirm}>Book</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
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
            </div>
        </div>
    );
}

export default Events;