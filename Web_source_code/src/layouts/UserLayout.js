import { Outlet } from "react-router-dom"
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
                                        <li class="active">
                                            <a href="/user/profile">
                                                <img src={require('./../../src/img/icons/usericon.png')} alt="user icon" />
                                                    Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/my-stay">
                                                <img src={require('./../../src/img/icons/stay.png')} class="img-fluid" alt="Stay" />
                                                    My Stay
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/events">
                                                <img src={require('./../../src/img/icons/events.png')} class="img-fluid" alt="Event" />
                                                    Event
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/meal-plan">
                                                <img src={require('./../../src/img/icons/meal.png')} class="img-fluid" alt="Meal" />
                                                    Meal Plan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/messages">
                                                <img src={require('./../../src/img/icons/msg.png')} class="img-fluid" alt="Message" />
                                                    Message
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/wishlist">
                                                <img src={require('./../../src/img/icons/wishlist.png')} class="img-fluid" alt="Wishlist" />
                                                    Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/user/notifications">
                                                <img src={require('./../../src/img/icons/bell.png')} class="img-fluid" alt="notifications" />
                                                    notifications
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/logout">
                                                <img  src={require('./../../src/img/icons/logout.png')} class="img-fluid" alt="logout" />
                                                    Logout
                                            </a>
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