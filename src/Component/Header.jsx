import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import LoadingImage from "../assets/LoadingImage.png";
import "../Styles/Loading.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container fixed top-0 left-0 w-full h-full z-[9999] flex justify-center items-center min-h-screen bg-white">
        <img src={LoadingImage} alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <nav className="w-full fixed top-0 z-10 bg-white shadow-md">
      <TopBar />
      <MainNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="md:hidden bg-navy px-6 pb-4 w-full">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prices"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Prices
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookings"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Booking
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => navigate("/contact-form")}
            className="bg-blue-950 text-white px-4 py-2 rounded-[16px] w-full mt-4"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
