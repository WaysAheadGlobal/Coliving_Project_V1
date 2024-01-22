import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
function AdminMenu() {
    return (
        <nav class="sideMenu">
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/dashboard' >
                        <img src={require('./../img/icons/dashboard.png')} class="img-fluid" alt="Dashboard" />
                        <span>Dashboard</span></NavLink>
                    {/* <Link to={"/admin/dashboard"}>
                        <img src={require('./../img/icons/dashboard.png')} class="img-fluid" alt="Dashboard" />
                        <span>Dashboard</span>
                    </Link> */}
                </li>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/manage-user' >
                        <img src={require('./../img/icons/manageuser.png')} class="img-fluid" alt="Manage User" />
                        <span>Manage User</span>
                    </NavLink>
                    {/* <Link to={"/admin/manage-user"}>
                        <img src={require('./../img/icons/manageuser.png')} class="img-fluid" alt="Manage User" />
                        <span>Manage User</span>
                    </Link> */}
                </li>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/manage-property' >
                        <img src={require('./../img/icons/manageproperty.png')} class="img-fluid" alt="Manage Property" />
                        <span>Manage Property</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/booking-request' >
                        <img src={require('./../img/icons/booking.png')} class="img-fluid" alt="Booking Requests" />
                        <span>Booking Requests</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/communicate' >
                        <img src={require('./../img/icons/communicate.png')} class="img-fluid" alt="Communicate Users" />
                        <span>Communicate Users</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink exact activeClassName="active" to='/admin/notifications' >
                        <img src={require('./../img/icons/ntfy.png')} class="img-fluid" alt="Notification" />
                        <span>Notification</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default AdminMenu;