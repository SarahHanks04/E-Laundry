import React from "react";
import Service3 from "../assets/Service3.png";
import "../Styles/HomepageStyle.css";
import { NavLink, useNavigate } from "react-router-dom";

const Service = () => {
    const navigate = useNavigate();
  return (
    <div className="homepage-container flex flex-col md:flex-row items-center p-8 bg-white">
      <div className="image-container md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={Service3}
          alt="Friendly Laundromat"
          width={450}
          height={200}
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-blue-950">
          Get the <br /> <span> VIP Treatment</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Our team consists of skilled professionals who are passionate about what they do. They handle your garments with the utmost care and attention, ensuring thorough cleaning, ironing and folding. With their expertise, you can trust that your clothes will be handled professionally and returned returned to you in pristine condition. 
        </p>
        <div className="mt-8 flex space-x-4 bg-blue-950 text-white">
          <NavLink to="/become-vip">Become VIP</NavLink>
        </div>

      </div>
    </div>
  );
};

export default Service;
