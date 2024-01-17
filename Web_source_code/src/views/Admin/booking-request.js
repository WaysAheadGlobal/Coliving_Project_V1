
function BookingRequest() {
    return (
        <>
            <div class="adminTitle">
                <h4 class="content-title">
                    Booking Requests
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
                                        <th class="text-center">name</th>
                                        <th class="text-center">Community</th>
                                        <th class="text-center">property name</th>
                                        <th class="text-center">location</th>
                                        <th class="text-center">Charges ($)</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">
                                            <div class="tbleimg">
                                                <img src={require('./../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            John Mark
                                        </td>
                                        <td class="text-center">
                                            Student
                                        </td>
                                        <td class="text-center">
                                            Urban Styled
                                        </td>
                                        <td class="text-center">
                                            Ontario
                                        </td>
                                        <td class="text-center">
                                            $2,156
                                        </td>
                                        <td class="text-center">
                                            <div class="tablebtngrp">
                                                <button class="eye" onclick="window.location.href='booking-view.html'"><i class="fa-regular fa-eye"></i></button>
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

export default BookingRequest;