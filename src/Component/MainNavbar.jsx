import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LaundryLogo from "../assets/LaundryLogo.png";

const MainNavbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <main className="bg-navy px-6 flex justify-center items-center w-full">
      <div className="hidden md:flex items-center space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Services
        </NavLink>
        <img src={LaundryLogo} alt="Laundry logo" className="h-10 mx-4" />
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/prices"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Prices
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : "text-black"
          }
        >
          Booking
        </NavLink>
      </div>
      <button
        onClick={() => navigate("/contact-form")}
        className="hidden md:block bg-blue-950 text-white px-4 py-1 rounded-[16px] ml-28"
      >
        Contact Us
      </button>
      <div className="flex justify-between w-full md:w-auto">
        <img
          src={LaundryLogo}
          alt="Laundry logo"
          className="lg:hidden h-10 mr-28"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-black focus:outline-none ml-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default MainNavbar;
