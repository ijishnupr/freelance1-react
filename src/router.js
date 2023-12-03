import { createBrowserRouter } from "react-router-dom";
import Login from './authentication/login'
import About from "./basicpages/aboutus";
import Contactus from "./basicpages/contactus";
import Signup from "./authentication/signup";
import I_or_B from "./authentication/influencer_or_brand";
import LoginB from "./authentication/login_B";
import I_or_B_signup from "./authentication/i_or_b_signup";
import Signup_B from "./authentication/signup_B";
import App from "./App";
import Signup2 from "./authentication/signup2";
import Signup_B2 from "./authentication/signup_B2";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/aboutus', element: <About/> },
    {path:'/contactus',element:<Contactus/>},
    {path:'/login',element:<Login/>},
    {path:'/login_brand',element:<LoginB/>},
    {path:'/loginpath',element:<I_or_B/>},
    {path:'/signuppath',element:<I_or_B_signup/>},
    {path:'/signup',element:<Signup/>},
    {path:'/signup_brand',element:<Signup_B/>},
    {path:'/signup2',element:<Signup2/>},
    {path:'/signup_b2',element:<Signup_B2/>},
    
]);

export default router;