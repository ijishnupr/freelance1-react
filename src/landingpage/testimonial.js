import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonial.css'
export default class Testimonial extends Component {

  
  render() {
    return (
      <div style={{marginBottom:'10px'}} >

      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        
        
        >
        <div>
          <img src={image} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={image} alt="image" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={image} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
        </div>
    );
  }
}
const image='https://mydmi.imgix.net/AddisonRae.png?fm=jpg&ixlib=php-3.3.1&q=40&w=652&s=b086f4cb5b251efcae9f8dbea97e1627';
