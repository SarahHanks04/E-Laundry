import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import "../Styles/ServicePage";

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

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        Our Services
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
      </h1>
      <p className="text-lg text-center mb-8">
        We are one of the fastest laundromats in Bangkok.
      </p>

      <div className="relative flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 text-2xl text-green-600"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="w-full md:w-1/2 h-64 p-6 bg-blue-100 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">
            {services[currentIndex].title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {services[currentIndex].description}
          </p>
          <button className="mt-4 text-blue-600 hover:underline">
            Learn More &rarr;
          </button>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 text-2xl text-green-600"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <button className="mt-8 bg-blue-950 text-white px-6 py-2 rounded-full">
        View All Services
      </button>
    </div>
  );
};

export default ServicePage;
