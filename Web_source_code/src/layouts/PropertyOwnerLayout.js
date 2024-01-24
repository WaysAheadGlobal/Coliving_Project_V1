import { Outlet, NavLink } from "react-router-dom"
import UserTopMenu from './../componenets/UserTopMenu';
import './../../src/assets/responsive.css';

export default function PropertyOwnerLayout() {
    return (
        <>
            <UserTopMenu />
            <section class="user-area padd80">
                <div class="container">
                    <div class="innerarea padd40 pb-0">
                        <div class="row g-4">
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <div class="sidebar">
                                    <ul>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/owner/stay-request' >
                                                <img src={require('./../../src/img/icons/stayrequest.png')} class="img-fluid" alt="Stay" />
                                                Stay Request
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/owner/events' >
                                        <img src={require('./../../src/img/icons/events.png')} class="img-fluid" alt="Event" />
                                                Events
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/owner/meals' >
                                        <img src={require('./../../src/img/icons/meal.png')} class="img-fluid" alt="Meal" />
                                                Meals
                                            </NavLink>
                                        </li>
                                        <li >
                                        <NavLink exact activeClassName="active" to='/owner/property' >
                                        <img src={require('./../../src/img/icons/property.png')} alt="user icon" />
                                                Property  
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/owner/messages' >
                                        <img src={require('./../../src/img/icons/msg.png')} class="img-fluid" alt="Message" />
                                                    Message
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/owner/payments' >
                                        <img src={require('./../../src/img/icons/payment.png')} class="img-fluid" alt="Wishlist" />
                                                    Payment
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/owner/notifications' >
                                        <img src={require('./../../src/img/icons/bell.png')} class="img-fluid" alt="notifications" />
                                                    notifications
                                            </NavLink>
                                        </li>
                                        <li>
                                        <NavLink exact activeClassName="active" to='/logout' >
                                        <img  src={require('./../../src/img/icons/logout.png')} class="img-fluid" alt="logout" />
                                                    Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                
            </main>
        </>
    )
}