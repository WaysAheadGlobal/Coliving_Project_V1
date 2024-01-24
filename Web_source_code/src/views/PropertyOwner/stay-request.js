
function StayRequest() {
    return (
        <div class="content-area">
            <h4 class="content-title">Stay request</h4>
            <div class="profileform">
                <div class="table-layout1">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">image</th>
                                    <th class="text-center">name</th>
                                    <th class="text-center">Location</th>
                                    <th class="text-center">Community</th>
                                    <th class="text-center">Charges ($)</th>
                                    <th class="text-center">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('../../img/tableimg1.png')} class="img-fluid" alt="Table Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        John Mark
                                    </td>
                                    <td class="text-center">
                                        Ontario
                                    </td>
                                    <td class="text-center">
                                        Student
                                    </td>
                                    <td class="text-center">
                                        $2,156
                                    </td>
                                    <td class="text-center">
                                        <div class="tablebtngrp">
                                            <button class="eye" onclick="window.location.href='stay-view.html'"><i class="fa fa-regular fa-eye"></i></button>
                                            <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayRequest;