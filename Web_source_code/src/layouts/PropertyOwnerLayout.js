import { Outlet } from "react-router-dom"
import UserTopMenu from './../componenets/UserTopMenu';

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
                                            <a href="/owner/stay-request">
                                                <img src={require('./../../src/img/icons/stayrequest.png')} class="img-fluid" alt="Stay" />
                                                Stay Request
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/owner/events">
                                                <img src={require('./../../src/img/icons/events.png')} class="img-fluid" alt="Event" />
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/owner/meals">
                                                <img src={require('./../../src/img/icons/meal.png')} class="img-fluid" alt="Meal" />
                                                Meals
                                            </a>
                                        </li>
                                        <li class="active">
                                            <a href="/owner/property">
                                                <img src={require('./../../src/img/icons/property.png')} alt="user icon" />
                                                Property    
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/owner/messages">
                                                <img src={require('./../../src/img/icons/msg.png')} class="img-fluid" alt="Message" />
                                                    Message
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/owner/payments">
                                                <img src={require('./../../src/img/icons/payment.png')} class="img-fluid" alt="Wishlist" />
                                                    Payment
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/owner/notifications">
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