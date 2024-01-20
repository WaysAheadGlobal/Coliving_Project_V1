import Dropdown from 'react-bootstrap/Dropdown';


function PropertyList(props) {
    return(
        <div class="adminCard">
                <div class="profileform">
                    <div class="table-layout1">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-center">image</th>
                                        <th class="text-center">Host name</th>
                                        <th class="text-center">Email ID</th>
                                        <th class="text-center">Mobile Number</th>
                                        <th class="text-center">property type</th>
                                        <th class="text-center">property name</th>
                                        <th class="text-center">location</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {props.currentRecords.length > 0 && props.currentRecords.map((property, index) => (
                                    <tr key={index}>
                                        <td class="text-center">
                                            <div class="tbleimg">
                                                <img src={require('./../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" />
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            {property.host_name}
                                        </td>
                                        <td class="text-center">
                                        {property.host_emailid}
                                        </td>
                                        <td class="text-center">
                                        {property.host_mobileno}
                                        </td>
                                        <td class="text-center">
                                            Apartment
                                        </td>
                                        <td class="text-center">
                                            Urban Styled
                                        </td>
                                        <td class="text-center">
                                        {property.host_location}
                                        </td>
                                        <td class="text-center">
                                            <div class="tablebtngrp">
                                                <button class="eye" onclick="window.location.href='manage-property-view.html'"><i class="fa fa-regular fa-eye"></i></button>
                                                <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                                {/* <button class="vDots" data-bs-toggle="modal" data-bs-target="#contacthost"><i class="fa fa fa-solid fa-ellipsis-vertical"></i></button> */}
                                                <div class="dropdown">
                                                    {/* <a class="dropdown-toggle vDots" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-solid fa-ellipsis-vertical"></i>
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Connect</a>
                                                    </div> */}
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                        <i class="fa fa fa-solid fa-ellipsis-vertical"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Connect</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                            </div>
                                        </td>
                                    </tr>
                                )) }
                                </tbody>
                            </table>
                        </div>
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 text-center">
                            <div class="pagi">
                              
                                {props.nPages > 1 && props.currentPage > 1 ?
                                <div class="prev" onClick={props.SetPage(props.currentPage - 1)}><i class="fa fa-solid fa-angles-left"></i> <label>Previous</label></div>
                                : null}
                                <div class="nums">
                                {(function (rows, i, len) {
                                    while (++i <= len) {
                                    rows.push(<a onClick={props.SetPage(i)} class={i == props.currentPage ? "active": ""} href="javascript:void(0)">{i}</a>)
                                    }
                                    return rows;
                                })([], 0, props.nPages)}
                                    {/* <a class="active" href="javascript:void(0)">1</a>
                                    <a href="javascript:void(0)">2</a>
                                    <a href="javascript:void(0)">3</a>
                                    <a href="javascript:void(0)">4</a> */}
                                </div>
                                {props.nPages > props.currentPage ?
                                <div class="next" onClick={props.SetPage(props.currentPage + 1)}><label>Next</label> <i class="fa fa-solid fa-angles-right"></i></div>
                                : null}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PropertyList;