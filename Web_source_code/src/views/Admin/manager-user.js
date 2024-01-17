import { Link } from 'react-router-dom';

function ManageUsers() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title">
                    Manage user
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
                                        <th class="text-center">User name</th>
                                        <th class="text-center">Email ID</th>
                                        <th class="text-center">Mobile Number</th>
                                        <th class="text-center">community</th>
                                        <th class="text-center">Location</th>
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
                                            John Mark
                                        </td>
                                        <td class="text-center">
                                            john.mark@gmail.com
                                        </td>
                                        <td class="text-center">
                                            60 7234 4327
                                        </td>
                                        <td class="text-center">
                                            Student
                                        </td>
                                        <td class="text-center">
                                            Ontario
                                        </td>
                                        <td class="text-center">
                                            <div class="tablebtngrp">

                                                <button class="eye" onclick="/admin/manage-user-view"><i class="fa-regular fa-eye"></i></button>
                                                <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
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

export default ManageUsers;