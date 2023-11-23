import React from 'react';
import { Slide } from "react-awesome-reveal"; // Assuming you have a library like 'react-reveal' for animations

export default function Hero() {
  return 
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md d-none d-md-block">
            <img
              style={{ width: '100%', height: 'auto', maxWidth: '700px', borderRadius: '15px' }}
              src="https://i.pinimg.com/originals/6d/12/aa/6d12aaf79e6e63db76eb5e04cc7f4852.gif"
              alt="team"
            />
          </div>
          <div className="col-md" style={{ border: '1px solid black', borderRadius: '15px', zIndex: '10' }}>
            <h1 className="text-center" style={{ fontWeight: 'bold', marginTop: '25px' }}>
              Get To Know Us
            </h1>
            <p className="text-center mt-5 px-3 px-md-5">
              We specialize in connecting influencers with brands, creating impactful partnerships that drive results. Our team maximizes the potential of influencers and brands, working closely with a diverse roster of talented individuals across various niches and platforms
            </p>
            <p className="text-center px-3 px-md-5">
              At Highonbuzz, we understand the power of social media influencers and harness it for successful brand collaborations.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col d-none d-md-block">
            <img style={{ width: '700px' }} src="https://i.pinimg.com/originals/6d/12/aa/6d12aaf79e6e63db76eb5e04cc7f4852.gif" alt="team" />
          </div>
          <div className="col-12 col-md-6">
            <Slide>
              <div style={style.box}>
                <h1 className="text-center" style={{ fontWeight: 'bold', marginTop: '25px' }}>Get To Know Us</h1>
                <p className="text-center mt-5 px-5"> We specialize in connecting influencers with brands, creating impactful partnerships that drive results. Our team maximizes the potential of influencers and brands, working closely with a diverse roster of talented individuals across various niches and platforms</p>
                <p className="text-center px-5">At Highonbuzz, we understand the power of social media influencers and harness it for successful brand collaborations.</p>
              </div>
            </Slide>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div id="customCarousel" className="carousel slide" data-ride="carousel">
              {/* ... (your carousel code) ... */}
            </div>
          </div>
        </div>
      </div>
    </>
 
}
const style={
    box:{
        border:'1px solid grey',
        margin:'50px',
        transition:'boxShadow .3s',
        boxShadow:'0 0 11px rgba(33,33,33,.4)',
        borderRadius:'15px',
        backgroundColor:'rgba(173, 216, 230, 0.7)',
        
    }
}