import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Testimonial.css';

class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: [
        {
          name: 'Jishnu',
          role: 'Software Developer',
          feedback: 'Great experience working with you',
          rating: 5, // Rating out of 5 stars
          image:'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1400227692.1698466412&semt=ais'
        },
        {
          name: 'Daniel Keystone',
          role: 'Designer',
          feedback: 'The simple and intuitive design makes it easy for me to use. I highly recommend Fetch to my peers.',
          rating: 4, // Rating out of 5 stars
          image:'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.1400227692.1698466412&semt=ais'
        },
        {
          name: 'Theo Sorel',
          role: 'Designer',
          feedback: "I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!",
          rating: 3, // Rating out of 5 stars
          image:'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.1400227692.1698466412&semt=ais'
        },
      ],
      image: 'https://mydmi.imgix.net/AddisonRae.png?fm=jpg&ixlib=php-3.3.1&q=40&w=652&s=b086f4cb5b251efcae9f8dbea97e1627'
    };
  }

  render() {
    const { testimonials } = this.state;

    return (
      <div style={{ marginBottom: '10px' }}>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <img src={testimonial.image} alt="testimonial" />
              <div className="myCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />
                  ))}
                </div>
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Testimonial;
