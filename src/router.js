import { createBrowserRouter } from "react-router-dom";
import Landingpage from "./landingpage/landingpage";

const router = createBrowserRouter([
    { path: '', element: <Landingpage/> },
    
]);

export default router;