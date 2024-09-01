import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../assets/HeroImage.png";
import Service1 from "../assets/Service1 (2).png";
import Service2 from "../assets/Service2 (2).png";
import Service3 from "../assets/Service3.png";

const PricesPage = () => {
  const priceCards = [
    {
      id: 1,
      image: Service1,
      title: "Wash & Iron Service",
      description:
        "These items are already cleaned, Ironing only price from",
      aosDelay: "100",
    },
    {
      id: 2,
      image: Service2,
      title: "Wash & Iron Service",
      description:
        "These items are already cleaned, Ironing only price from",
      aosDelay: "200",
    },
    {
      id: 3,
      image: Service3,
      title: "Wash & Iron Service",
      description:
        "These items are already cleaned, Ironing only price from",
      aosDelay: "300",
    },
  ];

  return (
    <div className="prices-page-container p-8 bg-gray-50 mt-20">
      <div className="text-align mb-8">
        <div className="mb-4">
          <img
            src={HeroImage}
            alt="Special Offer"
            width={120}
            className="rounded-full border-4 mx-auto"
          />
        </div>
        <p className="text-lg text-black">
          New customer get 20% off use code{" "}
          <span className="font-bold text-red-500">"laundry20"</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceCards.map((price) => (
          <div
            key={price.id}
            className="p-6 rounded-lg shadow-lg bg-white text-center"
            data-aos="fade-up"
            data-aos-delay={price.aosDelay}
          >
            <img
              src={price.image}
              alt={price.title}
              className="mx-auto mb-4 text-center"
            />

            <h3 className="text-xl font-semibold text-navy">{price.title}</h3>
            <p className="mt-2 text-gray-600">{price.description} <strong>&#8358; 2,000</strong></p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <NavLink
          to="/price-cart"
          className="bg-blue-950 text-white px-6 py-2 rounded-full hover:text-red-600 hover:bg-white hover:border-2 border-blue-950"
        >
          View price list
        </NavLink>
      </div>
    </div>
  );
};

export default PricesPage;

