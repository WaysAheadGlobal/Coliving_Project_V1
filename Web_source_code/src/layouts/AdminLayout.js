import { Outlet } from "react-router-dom"
import AdminMenu from './../componenets/AdminMenu';

export default function AdminLayout() {
    return (
        <>
            <div class="adminWrapper">
                <div class="adminsidebar">
                    <a class="adminlogo" href="index.html">
                        <img src={require('./../img/adminLogo.png')} class="img-fluid logofull" alt="Co-living" />
                        <img src={require('./../img/sidebarIcon.png')} class="img-fluid logoicon" alt="Co-living" />
                    </a>
                    <AdminMenu />
                </div>
                <div class="adminContent">
                    <div class="adminHeader">
                        <div class="mobileBar">
                            <span class="hidebar"><i class="fa-solid fa-bars"></i></span>
                            <span class="showbar"><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                        <div class="postuser">
                            <i class="fa-solid fa-circle-user"></i>
                            <span>Admin</span>
                            <i class="fa-solid fa-caret-down"></i>
                            <div class="userdropdown">
                                <ul>
                                    <li><a href="#/">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="adminContentbody">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}