import React from "react";
import LaundryLogo from "../assets/LaundryLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // FOR COPYRIGHT AT THE FOOTER MAIN
  const currentYear = new Date().getFullYear();
  // ENDS

  return (
    <footer className="bg-[#13162D] py-8 px-4 md:px-10 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* COLUMN ONE */}
        <div className="text-center sm:text-left">
          <img src={LaundryLogo} alt="logo" className="mx-auto sm:mx-0 mb-4" />
          <p className="text-sm leading-6">
            We have been dedicated to providing top-notch laundry services in
            Bangkok.
          </p>
        </div>

        {/* COLUMN TWO */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-white hover:underline hover:text-teal-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:underline hover:text-teal-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-white hover:underline hover:text-teal-600"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/prices"
                className="text-white hover:underline hover:text-teal-600"
              >
                Prices
              </Link>
            </li>
            <li>
              <Link
                to="/bookings"
                className="text-white hover:underline hover:text-teal-600"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN THREE */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Customer</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/contact-form"
                className="text-white hover:underline hover:text-teal-600"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:underline hover:text-teal-600"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-white hover:underline hover:text-teal-600"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN FOUR */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4 text-lg">Social Media</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center bg-white text-[#13162D] rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center bg-white text-[#13162D] rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center bg-white text-[#13162D] rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center bg-white text-[#13162D] rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full h-[1px] bg-white mt-11 mb-6"></div>

      <div className="text-center mt-8 text-sm">
        <p>&copy; Copyright {currentYear} | THAT LAUNDRY SHOP THAILAND.</p>
      </div>
    </footer>
  );
};

export default Footer;
