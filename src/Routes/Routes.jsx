import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Team from "../Pages/Team/Team";
import Faq from "../Pages/FAQ/Faq";
import Blogs from "../Pages/Blogs/Blogs";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyOrder from "../Pages/MyOrder/MyOrder";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            { 
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            
            { 
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/team',
                element:<Team></Team>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blogs',
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>

            },
            {
                path:'/services/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:()=>fetch('./data.json')
            },
            {
                path:'/myOrder',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            }

        ]
    }
])

export default Routes;