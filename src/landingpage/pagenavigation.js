import { Link } from "react-router-dom";

export default function Pagenav(){


    return <>
    <div className="d-inline d-md-none mb-3">
    <Link className=" btn  btn-sm btn-warning text-white " to={''}>why us</Link>
    <Link className="btn btn-sm btn-warning text-white  ml-1" to={''}>join us</Link>
    <Link className="btn btn-sm btn-warning text-white ml-1" to={''}>contact us</Link>
    </div>
    <div className="d-none d-md-inline mb-5">
    <Link className=" btn  btn-lg btn-warning text-white " to={''}>why us</Link>
    <Link className="btn btn-lg btn-warning text-white  ml-1" to={''}>join us</Link>
    <Link className="btn btn-lg btn-warning text-white ml-1" to={''}>contact us</Link>
    </div>
    
    </>
}

