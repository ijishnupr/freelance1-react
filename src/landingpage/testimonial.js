import React from 'react';
import './Testimonial.css'; // Import CSS file for styling

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-scroll">
        <div className="testimonial">
          <p>Testimonial 1 Content Here</p>
          <p>- Testimonial 1 Author</p>
        </div>
        <div className="testimonial">
          <p>Testimonial 2 Content Here</p>
          <p>- Testimonial 2 Author</p>
        </div>
        <div className="testimonial">
          <p>Testimonial 3 Content Here</p>
          <p>- Testimonial 3 Author</p>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
};

export default Testimonial;
