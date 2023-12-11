import Header from "./header";
import './curosal.css'
import influence from '../img/influence.gif'
import { Bounce } from "react-awesome-reveal";
export default function Curosal() {

  return <>
    
    <div className="container-fluid home" >
        <Header/>
        <div className="row">
          <div className="col-12 col-md-6 box-head">
              <h1 className="intro" >Unleash The Potential</h1>
              <p className="intro2" >The #1 Talent Representation For Today’s Digital Stars and Brands</p>
          </div>
          <div className="col">
                <div className="">
                  {/* <Bounce>

                  <img className="img-box" src={influence}/>
                  </Bounce> */}
                </div>
          </div>
        </div>
    </div>
  </>
}