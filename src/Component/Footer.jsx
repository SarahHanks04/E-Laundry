import React from "react";
import LaundryLogo from "../assets/LaundryLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#13162D] min-h-screen text-white py-10 px-10">
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* COLUMN ONE */}
        <div className="col-span-1">
          <img
            src={LaundryLogo}
            alt="logo"
            // width={145}
            // height={44}
            className="mb-2"
          />
          <div>
            <p>
              We have been dedicated to providing topnotch laundry services in
              Bangkok.
            </p>
          </div>
        </div>
        {/* COLUMN TWO */}
        <div className="col-span-1">
          <h1 className="font-bold mb-6 font-gothic">Menu</h1>

          <ul className="md:text-[14px] text-[18px] font-light">
            <Link to="/" className="hover:underline hover:text-teal-600 pt-3">
              Home
            </Link>
            <Link
              to="/service"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Services
            </Link>
            <Link
              to="/reviews"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Reviews
            </Link>
            <Link
              to="/prices"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Prices
            </Link>
            <Link
              to="/bookings"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Booking
            </Link>
          </ul>
        </div>

        {/* COLUMN THREE */}
        <div className="col-span-1">
          <h1 className="font-bold mb-6 font-gothic">Customer</h1>

          <ul className="md:text-[14px] text-[18px] font-light">
            <Link
              to="/contact-form"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Contact Us
            </Link>
            <Link
              to="/service"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/reviews"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>

        {/* COLUMN FOUR */}
        <div className="col-span-1">
          <h1 className="font-bold mb-6 font-gothic">Social Media</h1>

          <ul className="md:text-[14px] text-[18px] font-light">
            <Link to="/" className="hover:underline hover:text-teal-600 pt-3">
              <span><FontAwesomeIcon icon={faFacebookF} /></span>
            </Link>
            <Link
              to="/service"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              <span><FontAwesomeIcon icon= {faInstagram} /></span>
            </Link>
            <Link
              to="/reviews"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              <span><FontAwesomeIcon icon= {faXTwitter} /></span>
            </Link>
            <Link
              to="/prices"
              className="hover:underline hover:text-teal-600 pt-3"
            >
              <span><FontAwesomeIcon icon={faTiktok} /></span>
            </Link>
          </ul>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
