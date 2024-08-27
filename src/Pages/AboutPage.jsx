import React from 'react';
import "../Styles/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faTruck, faTruckFast, faUserTie } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy mb-4">Welcome to That Laundry Shop!</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Since 2017, we have been dedicated to providing top-notch laundry services in Bangkok. What started with a small 36sqm shop in 15 Sukhumvit Residences has now grown into a trusted name with four conveniently located outlets throughout the city.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <span><FontAwesomeIcon icon={faHandshake} size="3x" /></span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-gray-700">
            At That Laundry Shop, we not only understand the significance of clean and fresh laundry but also prioritize personal hygiene. We believe that every customer deserves the highest level of care and attention.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <span><FontAwesomeIcon icon={faTruckFast} size="3x" /></span>
          </div>
          <div className="px-4 h-[1px] w-[30px] text-black"></div>
          <h2 className="text-2xl font-bold mb-4">Pickup and Delivery Service</h2>
          <p className="text-gray-700">
            We offer reliable pickup and delivery services. Simply schedule a pickup at a time that works best for you, and our riders will ensure seamless and timely service.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <span><FontAwesomeIcon icon={faUserTie} size="3x" /></span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Expert Staff</h2>
          <p className="text-gray-700">
            Our team consists of skilled professionals who handle your garments with the utmost care and attention, ensuring thorough cleaning, ironing, and folding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
