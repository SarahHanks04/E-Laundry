import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const TestimonialPage = () => {
  const Testimonials = [
    {
      review:
        "This service is ridiculously amazing. Being a digital nomad that doesn't have to worry about washing clothes, it gives more time to see Chiang Mai & also have more time to focus on work.",
      name: "Julita Czyzewska",
      ratings: 5,
      icon: "<FontAwesomeIcon icon={faStar} />",
    },
    
    {
      review:
        "This service is ridiculously amazing. Being a digital nomad that doesn't have to worry about washing clothes, it gives more time to see Chiang Mai & also have more time to focus on work.",
      name: "Julita Czyzewska",
      ratings: 5,
      icon: "<FontAwesomeIcon icon={faStar} />",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === services.length - 1;
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
        {Testimonials.map((Testimonials, index) => (
          <div
            key={index}
            className="mx-5 bg-white p-6 rounded-lg shadow-2xl max-w-full transition-transform duration-300 transform hover:scale-95"
          >
            <div>
              {/* FOR THE NAMES */}
              <p className=" text-gray-700 mt-4 text-lg font-bold">
                {Testimonials.name}
              </p>

              {/* FOR RATINGS */}
              <div className="mt-5">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="pr-2"
                    color={i < Testimonials.ratings ? "#FDBF17" : "#D3D3D3"}
                  />
                ))}
              </div>

              {/* FOR THE REVIEWS */}
              <p className="review text-gray-700 text-sm">
                {Testimonials.review}
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default TestimonialPage;
