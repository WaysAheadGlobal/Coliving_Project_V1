import {
    BrowserRouter as Router, Route, Routes, createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import BaseLayoutWithoutMenu from "./layouts/BaseLayoutWithoutMenu";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import PropertyLayout from "./layouts/PropertyOwnerLayout";
import PropertyFillDetails from "./views/PropertyOwner/fill-detail";
import ThankYou from "./views/PropertyOwner/thank-you";

import Home from './views/Home/Index';
import Blogs from './views/Blogs/Index';
import Listing from './views/Home/Listing';
import ListingDetail from './views/Home/ListingDetail';
import BlogDetail from './views/Blogs/BlogDetail';
import Logout from './views/logout';

//user pages
import Profile from './views/User/Profile';
import Payment from './views/User/Payment';
import Events from './views/User/events';
import MealPlan from './views/User/meal-plan';
import Messages from './views/User/message';
import MyStay from './views/User/my-stay';
import Notifications from './views/User/notifications';
import WishList from './views/User/wishlist';
import PersonalDetail from './views/User/personalDetail';
import LoyaltyPoints from './views/User/LoyaltyPoints';
import RewardHistory from './views/User/RewardHistory';

//admin pages
import AdminLogin from './views/Admin/Login';
import AdminDashboard from './views/Admin/Dashboard';
import Communicate from './views/Admin/communicate';
import AdminNotifications from './views/Admin/notifications';
import AdminManageUsers from './views/Admin/manager-user';
import AdminManageUserView from './views/Admin/manager-user-view';
import AdminManageoperty from './views/Admin/manage-property';
import AdminManagePropertyView from './views/Admin/manage-property-view';
import AdminBookingRequest from './views/Admin/booking-request';
import AdminBookingRequestView from './views/Admin/booking-view';
import Filldetail from './views/Admin/Fill-detail';

//Property user pages
import OwnerStayRequest from './views/PropertyOwner/stay-request';
import OwnerStayView from './views/PropertyOwner/stay-view';
import OwnerEvents from './views/PropertyOwner/Events';
import AddEvent from './views/PropertyOwner/add-event';
import OwnerMeal from './views/PropertyOwner/meal';
import OwnerMealAdd from './views/PropertyOwner/edit-meal';
import OwnerProerty from './views/PropertyOwner/property';
import OwnerProertyAdd from './views/PropertyOwner/edit-property';
import OwnerMessages from './views/PropertyOwner/message';
import OwnerPayments from './views/PropertyOwner/payment';
import OwnerNotifications from './views/PropertyOwner/notifications';
import OwnerThankYou from './views/PropertyOwner/thank-you';

function App() {

    const router = createBrowserRouter([
        {
            // parent route component
            element: <BaseLayout />,
            // child route components
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/blogs",
                    element: <Blogs />,
                },
                {
                    path: "/Listing",
                    element: <Listing />,
                },
                {
                    path: "/ListingDetail/:id",
                    element: <ListingDetail />,
                },
                {
                    path: "/blog-details/:id",
                    element: <BlogDetail />,
                },
                {
                    path: "/logout",
                    element: <Logout />,
                },
                {
                    path: "/admin",
                    element: <AdminLogin />, 
                }
            ],
        }, 
        {
            // parent route component
            element: <BaseLayoutWithoutMenu />,
            // child route components
            children: [
                {
                    path: "/owner/filldetails",
                    element: <PropertyFillDetails />,
                },
                {
                    path: "/thankyou",
                    element: <ThankYou />,
                },
                {
                    path: "/user/personalDetail",
                    element: <PersonalDetail />,
                },
                {
                    path: "/Payment",
                    element: <Payment />,
                },
                {
                    path: "/owner/thanks",
                    element: <OwnerThankYou />,
                },
                {
                    path: "/user/bookingconfirm",
                    element: <OwnerThankYou />,
                }
            ],
        }, 
        {
            // parent route component
            element: <UserLayout />,
            // child route components
            children: [
                {
                    path: "/user/profile",
                    element: <Profile />,
                },
                {
                    path: "/user/events",
                    element: <Events />,
                },
                {
                    path: "/user/meal-plan",
                    element: <MealPlan />,
                },
                {
                    path: "/user/messages",
                    element: <Messages />,
                },
                {
                    path: "/user/my-stay",
                    element: <MyStay />,
                },
                {
                    path: "/user/notifications",
                    element: <Notifications />,
                },
                {
                    path: "/user/wishlist",
                    element: <WishList />,
                },
                {
                    path: "/user/loyalty-points",
                    element: <LoyaltyPoints />,
                },
                {
                    path: "/user/reward-history",
                    element: <RewardHistory />,
                },
                
            ],
        },
        {
            // parent route component
            element: <AdminLayout />,
            // child route components
            children: [
                {
                    path: "/admin/dashboard",
                    element: <AdminDashboard />, 
                },
                {
                    path: "/admin/booking-request",
                    element: <AdminBookingRequest />,
                },
                {
                    path: "/admin/booking-view",
                    element: <AdminBookingRequestView />,
                },
                {
                    path: "/admin/communicate",
                    element: <Communicate />,
                },
                {
                    path: "/admin/fill-detail",
                    element: <Filldetail />,
                },
                {
                    path: "/admin/manage-property-view",
                    element: <AdminManagePropertyView />,
                },
                {
                    path: "/admin/manage-property",
                    element: <AdminManageoperty />,
                },
                {
                    path: "/admin/manage-user-view",
                    element: <AdminManageUserView />,
                },
                {
                    path: "/admin/manage-user",
                    element: <AdminManageUsers />,
                },
                {
                    path: "/admin/notifications",
                    element: <AdminNotifications />,
                }
            ],
        },
        {
            // parent route component
            element: <PropertyLayout />,
            // child route components
            children: [
                {
                    path: "/owner/profile",
                    element: <Profile />,
                },
                {
                    path: "/owner/stay-request", 
                    element: <OwnerStayRequest />,
                },
                {
                    path: "/owner/stayview/:id",
                    element: <OwnerStayView />,
                },
                {
                    path: "/owner/events",
                    element: <OwnerEvents />,
                },
                {
                    path: "/owner/addevents/:id",
                    element: <AddEvent />,
                },
                {
                    path: "/owner/meals",
                    element: <OwnerMeal />,
                },
                {
                    path: "/owner/mealsAdd/:id",
                    element: <OwnerMealAdd />,
                },
                {
                    path: "/owner/property",
                    element: <OwnerProerty />,
                },
                {
                    path: "/owner/propertyAddEdit/:id",
                    element: <OwnerProertyAdd />,
                },
                {
                    path: "/owner/messages",
                    element: <Messages />,
                },
                {
                    path: "/owner/payments",
                    element: <OwnerPayments />,
                },
                {
                    path: "/owner/notifications",
                    element: <Notifications />,
                }
            ],
        }
    ])
    return (
        <RouterProvider router={router} />
    )

}

export default App;