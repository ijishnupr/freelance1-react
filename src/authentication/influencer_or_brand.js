import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function I_or_B(){

    return <>
     <div className="container-fluid" style={{background:'black',height:'100vh',width:'100vw'}}>
        <div className="row">
        <div className="col">

<h3 className="text-white text-center pt-5">Log In As</h3>
</div>
        </div>
        <Zoom>

        <div className="row justify-content-center" style={{marginTop:'40vh',height:'30vh'}}>
            <div className="col col-9 col-md-4 text-center text-light bg-info" style={{borderRadius:'20px'}}>
                    <Link className="text-decoration-none text-white" to={'/login_brand'}>

                     <h1 style={{marginTop:'100px'}}>Brand</h1>
                    </Link>
            </div>
            <div className="col col-9 col-md-4 text-center text-light"style={{borderRadius:'20px',marginLeft:'4px',background:'#E8626D'}} >
                   <Link className="text-white text-decoration-none" to={'/login'}>
                    <h1 style={{marginTop:'100px'}}>Influencer</h1>
                   </Link>
            </div>
        </div>
        </Zoom>
     </div>
    </>

}