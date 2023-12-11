import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function I_or_B_signup(){

    return <>
     <div className="container-fluid rounded" style={{ background: 'rgba(0, 0, 0, 0.3)', height: '100vh', width: '100vw' }}>
            <Slide direction="down">

            <div className="row">
                <div className="col px-5 col-6 col-md-5 col-lg-3 mx-auto d-block bg-white rounded" style={{marginTop:'190px'}}>
                    <h3 className="mt-4 text-center">Sign Up as</h3>
                    <button onClick={()=>window.location.href='/signup'} className="btn btn-primary mt-5 btn-block">INFLUENCER</button>
                    <button onClick={()=>{window.location.href='/signup_brand'}} className="btn btn-info mb-3 mt-4 btn-block">BRAND</button>
                    <button onClick={()=>window.location.href='/'} className="btn btn-danger mx-auto d-block mb-3 mt-4">Close</button>
                            
                </div>
            </div>
            </Slide>
        </div>
    </>

}