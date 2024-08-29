import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import face2 from "../assets/face2 - Copy.jpg";
import face15 from "../assets/face15.jpg";

const TestimonialPage = () => {
  const defaultTestimonials = [
    {
      review:
        "This service is ridiculously amazing. Being a digital nomad that doesn't have to worry about washing clothes, it gives more time to see Chiang Mai & also have more time to focus on work.",
      name: "Julita Czyzewska",
      ratings: 5,
      image: face2,
    },
    {
      review:
        "This service is ridiculously amazing. Being a digital nomad that doesn't have to worry about washing clothes, it gives more time to see Chiang Mai & also have more time to focus on work.",
      name: "Julita Czyzewska",
      ratings: 4,
      image: face15,
    },
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    if (savedReviews.length > 0) {
      setTestimonials((prev) => [...prev, ...savedReviews]);
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    // Create a new array excluding the review at indexToDelete
    const updatedTestimonials = testimonials.filter(
      (_, index) => index !== indexToDelete
    );

    // Update state
    setTestimonials(updatedTestimonials);

    // Update local storage
    const updatedLocalReviews = updatedTestimonials.slice(defaultTestimonials.length); // Only save the ones added by users
    localStorage.setItem("reviews", JSON.stringify(updatedLocalReviews));
  };

  return (
    <section className="min-h-screen bg-teal-50 p-4 overflow-x-hidden">
      <div className="relative text-center text-lg font-medium mt-4">
        <h1>
          What our <br /> Customers Say
        </h1>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-5 mt-14 justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-5 bg-white p-6 rounded-lg shadow-2xl max-w-full transition-transform duration-300 transform hover:scale-95 testimonial-card"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image || ""} // Use a default image if needed
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-gray-700 text-lg font-bold">
                  {testimonial.name}
                </p>
                <div className="mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="pr-1"
                      color={i < testimonial.ratings ? "#FDBF17" : "#D3D3D3"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="review text-gray-700 text-sm">{testimonial.review}</p>
            {/* DELETE BUTTON */}
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => handleDelete(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </main>

      <Link
        to="/submit-review"
        className="block text-center text-red-600 font-bold mt-10 hover:underline"
      >
        Write a Review
      </Link>

      <Link
        to="/"
        className="block text-center text-teal-600 font-serif text-sm mt-10 hover:underline"
      >
        Go Back to Home
      </Link>
      
    </section>
  );
};

export default TestimonialPage;
