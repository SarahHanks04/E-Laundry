import React from 'react';
import { useSelector } from 'react-redux';
import Testimonial from '../Component/Testimonial';


const TestimonialPage = () => {
  const testimonials = useSelector((state) => state.testimonials);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">What Our Customers Say</h1>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
