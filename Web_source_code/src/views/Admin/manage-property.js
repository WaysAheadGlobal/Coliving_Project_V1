
function ManageProperty() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title">
                    Manage Property
                </h4>
            </div>

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
                                    <tr>
                                        <td class="text-center">
                                            <div class="tbleimg">
                                                <img src={require('./../../img/icons/usersquare.png')} class="img-fluid" alt="Manage User Icon" />
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            David Oliver
                                        </td>
                                        <td class="text-center">
                                            david.oliver@gmail.com
                                        </td>
                                        <td class="text-center">
                                            +1 85 8963 5523
                                        </td>
                                        <td class="text-center">
                                            Apartment
                                        </td>
                                        <td class="text-center">
                                            Urban Styled
                                        </td>
                                        <td class="text-center">
                                            Ontario
                                        </td>
                                        <td class="text-center">
                                            <div class="tablebtngrp">
                                                <button class="eye" onclick="window.location.href='manage-property-view.html'"><i class="fa-regular fa-eye"></i></button>
                                                <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
                                                <button class="vDots" data-bs-toggle="modal" data-bs-target="#contacthost"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageProperty;