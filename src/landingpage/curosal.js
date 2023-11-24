import Pagenav from "./pagenavigation";
import one from '../img/one.jpg'
import two from '../img/two.jpg'
export default function Curosal() {

  return <>
    
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
      <ol className="carousel-indicators">

        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={one} alt="First slide" />
          <div class="carousel-caption  mb-5 pb-5">
            
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={two} alt="second slide" />
          <div class="carousel-caption  mb-5 pb-5">
           
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </>
}