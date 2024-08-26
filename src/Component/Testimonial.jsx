import React from 'react'

const Testimonial = ({ testimonial }) => (
  <div className="p-4 bg-gray-100">
    <p>{testimonial.quote}</p>
    <p>- {testimonial.author}</p>
  </div>
);

export default Testimonial;
