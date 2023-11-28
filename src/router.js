import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage/landingpage";
import Login from './authentication/login'
import About from "./basicpages/aboutus";
import Contactus from "./basicpages/contactus";
import Signup from "./authentication/signup";
import I_or_B from "./authentication/influencer_or_brand";
import LoginB from "./authentication/login_B";
import I_or_B_signup from "./authentication/i_or_b_signup";
import Signup_B from "./authentication/signup_B";

const router = createBrowserRouter([
    { path: '/', element: <Landingpage/> },
    { path: '/aboutus', element: <About/> },
    {path:'/contactus',element:<Contactus/>},
    {path:'/login',element:<Login/>},
    {path:'/login_brand',element:<LoginB/>},
    {path:'/loginpath',element:<I_or_B/>},
    {path:'/signuppath',element:<I_or_B_signup/>},
    {path:'/signup',element:<Signup/>},
    {path:'/signup_brand',element:<Signup_B/>}
    
]);

export default router;