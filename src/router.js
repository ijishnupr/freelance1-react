import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage/landingpage";
import Login from './authentication/login'
import About from "./basicpages/aboutus";
import Contactus from "./basicpages/contactus";
import Signup from "./authentication/signup";

const router = createBrowserRouter([
    { path: '/', element: <Landingpage/> },
    { path: '/aboutus', element: <About/> },
    {path:'/contactus',element:<Contactus/>},
    {path:'/login',element:<Login/>},
    {path:'/signup',element:<Signup/>},
    
]);

export default router;