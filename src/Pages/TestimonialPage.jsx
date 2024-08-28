import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Styles/Testimonial.css";
import face2 from "../assets/face2 - Copy.jpg";
import face15 from "../assets/face15.jpg";
import { Link, useNavigate } from "react-router-dom";

const TestimonialPage = () => {
  const Testimonials = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section className="min-h-screen bg-teal-50 p-4 overflow-x-hidden">
      {/* TITLE */}
      <div className=" relative text-center text-lg font-medium mt-4">
        <h1>
          What our <br /> Customer says
        </h1>
      </div>

      <div>
        <button
          onClick={prevSlide}
          className="absolute right-[20%] top-[12.8rem] transform -translate-y-1/2 p-2 w-8 h-8 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center border-[1px] border-gray-500"
        >
          <span className="text-lg">&#8592;</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[10%] top-[12.8rem] transform -translate-y-1/2 p-2 w-8 h-8 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center border-[1px] border-gray-500"
        >
          <span className="text-lg">&#8594;</span>
        </button>
      </div>

      {/*   MAPPING THE TESTIMONIALS   */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-5 mt-14 justify-center">
        {Testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-5 bg-white p-6 rounded-lg shadow-2xl max-w-full transition-transform duration-300 transform hover:scale-95 testimonial-card"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
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
          </div>
        ))}

        <Link
          to="/"
          className="block mx-auto mt-8 mb-16 py-2 px-4 text-red-200"
        >
          Go back to Home
        </Link>
      </main>
    </section>
  );
};

export default TestimonialPage;
