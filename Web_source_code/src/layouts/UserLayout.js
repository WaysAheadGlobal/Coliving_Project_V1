import { Outlet, Link, NavLink } from "react-router-dom"
import UserTopMenu from './../componenets/UserTopMenu';

export default function UserLayout() {
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
                                            <NavLink exact activeClassName="active" to='/user/profile' >
                                                <img src={require('./../../src/img/icons/usericon.png')} alt="user icon" />
                                                <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/my-stay' >
                                                <img src={require('./../../src/img/icons/stay.png')} class="img-fluid" alt="Stay" />
                                                My Stay
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/events' >
                                                <img src={require('./../../src/img/icons/events.png')} class="img-fluid" alt="Event" />
                                                Event
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/meal-plan' >
                                                <img src={require('./../../src/img/icons/meal.png')} class="img-fluid" alt="Meal" />
                                                Meal Plan
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/messages' >
                                                <img src={require('./../../src/img/icons/msg.png')} class="img-fluid" alt="Message" />
                                                Message
                                            </NavLink>
                                            <a href="">

                                            </a>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/wishlist' >
                                                <img src={require('./../../src/img/icons/wishlist.png')} class="img-fluid" alt="Wishlist" />
                                                Wishlist
                                            </NavLink>
                                        </li>
                                        
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/notifications' >
                                                <img src={require('./../../src/img/icons/bell.png')} class="img-fluid" alt="notifications" />
                                                notifications
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/user/loyalty-points' >
                                            <img src={require('./../../src/img/icons/points.png')} class="img-fluid" alt="notifications" />
                                            Loyalty Points
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to='/logout' >
                                                <img src={require('./../../src/img/icons/logout.png')} class="img-fluid" alt="logout" />
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