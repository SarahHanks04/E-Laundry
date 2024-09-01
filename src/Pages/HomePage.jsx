import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Buttton";
import HeroImage from "../assets/HeroImage.png";
import "../Styles/HomepageStyle.css";

const HomePage = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Duration of the animation
  //     offset: 100, // Offset (in pixels) from the original trigger point
  //     easing: "ease-in-out", // Easing function for the animation
  //     once: true, // Whether animation should happen only once - while scrolling down
  //   });
  // }, []);

  return (
    <div className="homepage-container flex flex-col md:flex-row items-center p-8 bg-green-100 mt-[5.1rem] pt-8 pb-20">
      <div className="md:w-1/2 pl-8 text-start" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-navy">
          Your <br /> <span> Professional</span>
        </h1>
        <h1 className="text-4xl font-bold text-green text-teal-600">
          Friendly <br /> <span> Laundromat</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          They handle your garments with the utmost care and attention, ensuring
          thorough Cleaning, Ironing, and Folding.
        </p>
        <div
          className="mt-10 flex space-x-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Button
            text="Book Now"
            to="/booking"
            className="button bg-blue-950 text-white px-6 py-2 rounded-full"
          />
          <Button
            text="Schedule Time"
            to="/schedule"
            className="button schedule-button text-black px-6 py-2 rounded-full border-2 border-blue-950"
          />
        </div>
      </div>
      <div
        className="image-container md:w-1/2 flex justify-center mt-8 md:mt-0"
        data-aos="fade-up "
        data-aos-delay="400"
      >
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
