import React, { useEffect, useState } from "react";
import Button from "./Buttton";
import HeroImage from "../assets/HeroImage.png";
import "../Styles/HomepageStyle.css";


const HomePage = () => {
  
  return (
    <div className="homepage-container flex flex-col md:flex-row items-center p-8 bg-green-100 mt-[5.1rem] pt-8 pb-20">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-navy">
          Your <span> Professional</span>
        </h1>
        <h1 className="text-4xl font-bold text-green">
          Friendly <span> Laundromat</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          They handle your garments with the utmost care and attention, ensuring
          thorough Cleaning, Ironing, and Folding.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button
            text="Book Now"
            className="button bg-blue-950 text-white px-6 py-2 rounded-full"
          />
          <Button
            text="Schedule Time"
            className="button schedule-button text-black px-6 py-2 rounded-full border-2 border-blue-950"
          />
        </div>
      </div>
      <div className="image-container md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={HeroImage}
          alt="Friendly Laundromat"
          width={430}
          height={200}
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomePage;
