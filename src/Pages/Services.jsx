import React from "react";
import Service3 from "../assets/Service3.png";
import "../Styles/HomepageStyle.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container flex flex-col md:flex-row items-center p-4 md:p-8 bg-white mt-[5rem]">
      <div className="image-container w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
        <img
          src={Service3}
          alt="Friendly Laundromat"
          width={300}
          height={150}
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
          Get the <br /> <span> VIP Treatment</span>
        </h1>
        <p className="mt-4 text-sm md:text-md text-gray-600">
          Our team consists of skilled professionals who are passionate about
          what they do. They handle your garments with the utmost care and
          attention, ensuring thorough cleaning, ironing, and folding. With
          their expertise, you can trust that your clothes will be handled
          professionally and returned to you in pristine condition.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button
            onClick={() => navigate("/become-vip")}
            className="mt-6 md:mt-8 bg-blue-950 text-white px-4 py-2 md:px-6 md:py-2 rounded-full"
          >
            Become VIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
