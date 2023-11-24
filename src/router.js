import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage/landingpage";

import About from "./basicpages/aboutus";
import Contactus from "./basicpages/contactus";

const router = createBrowserRouter([
    { path: '/', element: <Landingpage/> },
    { path: '/aboutus', element: <About/> },
    {path:'/contactus',element:<Contactus/>},
    
]);

export default router;