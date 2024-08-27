import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LaundryLogo from "../assets/LaundryLogo.png";
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
      <div className="loading-container flex justify-center items-center min-h-screen bg-white">
        <img src={LoadingImage} alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <nav>
      {/* Top Bar */}
      <div className="text-white bg-blue-950 py-2">
        <p className="text-center">+66 94 691 6668</p>
      </div>

      {/* Main Navbar */}
      <div className="bg-navy px-6 flex justify-between items-center">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-black focus:outline-none"
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

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={LaundryLogo} alt="Laundry logo" className="h-10 mx-4" />
        </div>

        {/* Right Side Links & Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
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
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Prices
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Booking
              </NavLink>
            </li>
          </ul>
          <button className="bg-blue-950 text-white px-4 py-1 rounded-[16px]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy px-6 pb-4">
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
                to="/booking"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Booking
              </NavLink>
            </li>
          </ul>
          <button className="bg-blue-950 text-white px-4 py-2 rounded-[16px] w-full mt-4">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
