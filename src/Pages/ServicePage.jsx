import React, { useState } from "react";
import Service1 from "../assets/Service1 (2).png";
import Service2 from "../assets/Service2 (2).png";
import Service3 from "../assets/Service3.png";
import "../Styles/Services.css";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Laundry by Weight",
    description:
      "Our laundry by weight service is priced competitively to ensure affordability for our customers.",
    image: Service1,
  },
  {
    id: 2,
    title: "Laundry by Pieces",
    description:
      "Our laundry by pieces service is tailored to ensure quality and care for each item.",
    image: Service2,
  },
  {
    id: 3,
    title: "Express Laundry",
    description:
      "Fast and efficient laundry services with same-day delivery for urgent needs.",
    image: Service3,
  },
];

const ServicePage = () => {
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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/service"); // navigate to /become-vip page
  };

  return (
    <div className="relative flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        Our Services
      </h1>
      <p className="text-lg text-center mb-8">
        We are one of the fastest laundromats in Bangkok.
      </p>

      <div>
        <button
          onClick={prevSlide}
          className="absolute right-[20%] top-20 transform -translate-y-1/2 p-2 w-8 h-8 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center border-[1px] border-gray-500"
        >
          <span className="text-lg">&#8592;</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[10%] top-20 transform -translate-y-1/2 p-2 w-8 h-8 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center border-[1px] border-gray-500"
        >
          <span className="text-lg">&#8594;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="w-full h-[30rem] p-6 bg-teal-50 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[18rem] object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 mb-6 text-sm text-gray-600">
              {service.description}
            </p>
            <Link to="/" className="text-black">
              Learn More <span> &#8594;</span>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick} 
        className="mt-8 bg-blue-950 text-white px-6 py-2 rounded-full"
      >
        View All Services
      </button>
    </div>
  );
};

export default ServicePage;
