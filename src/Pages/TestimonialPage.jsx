// import React, { useState } from "react";
// import Service1 from "../assets/Service1 (2).png";
// import Service2 from "../assets/Service2 (2).png";
// import Service3 from "../assets/Service3.png";
// import "../Styles/Services.css";
// import { useNavigate } from "react-router-dom";

// const Testimonial = [
//   {
//     id: 1,
//     title: "Laundry by Weight",
//     description:
//       "Our laundry by weight service is priced competitively to ensure affordability for our customers.",
//     image: Service1,
//   },
//   {
//     id: 2,
//     title: "Laundry by Pieces",
//     description:
//       "Our laundry by pieces service is tailored to ensure quality and care for each item.",
//     image: Service2,
//   },
//   {
//     id: 3,
//     title: "Express Laundry",
//     description:
//       "Fast and efficient laundry services with same-day delivery for urgent needs.",
//     image: Service3,
//   },
// ];

// const TestimonialPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const prevSlide = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       const isFirstSlide = currentIndex === 0;
//       const newIndex = isFirstSlide ? Testimonial.length - 1 : currentIndex - 1;
//       setCurrentIndex(newIndex);
//       setIsTransitioning(false);
//     }, 300); // Duration matches the transition duration
//   };

//   const nextSlide = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       const isLastSlide = currentIndex === Testimonial.length - 1;
//       const newIndex = isLastSlide ? 0 : currentIndex + 1;
//       setCurrentIndex(newIndex);
//       setIsTransitioning(false);
//     }, 300); // Duration matches the transition duration
//   };

//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/testimonial");
//   };

//   return (
//     <div className="relative flex flex-col items-center p-4 bg-teal-50 md:p-6">
//       <h1 className="text-2xl font-bold mb-4 flex items-center sm:text-3xl">
//         What Our Customers Say
//       </h1>

//       <div className="relative w-full max-w-md md:max-w-5xl">
//         <div className="flex justify-between items-center absolute w-full top-0 transform -translate-y-1/2">
//           <button
//             onClick={prevSlide}
//             className="p-2 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center bg-white shadow-lg"
//           >
//             <span className="text-lg">&#8592;</span>
//           </button>
//           <button
//             onClick={nextSlide}
//             className="p-2 hover:bg-teal-700 text-gray-600 rounded-full flex justify-center items-center bg-white shadow-lg"
//           >
//             <span className="text-lg">&#8594;</span>
//           </button>
//         </div>
//       </div>

//       <div
//         className={`flex justify-center items-center transition-transform duration-300 ${
//           isTransitioning ? "transform translate-x-0" : ""
//         }`}
//       >
//         <div className="w-full h-[15rem] p-4 bg-white rounded-lg shadow-lg transition-all duration-300 transform ease-in-out sm:h-[18rem]">
//           <div className="flex items-center">
//             <img
//               src={Service1[currentIndex].image}
//               alt={Testimonial[currentIndex].title}
//               className="w-12 h-12 rounded-full mr-4 sm:w-16 sm:h-16"
//             />
//             <div>
//               <h2 className="text-lg font-semibold sm:text-xl">{Testimonial[currentIndex].title}</h2>
//               <p className="text-sm text-gray-600 sm:text-base">{Testimonial[currentIndex].description}</p>
//             </div>
//           </div>
//           <p className="mt-2 text-sm text-gray-600 sm:text-base">
//             This service is ridiculously amazing. Being a digital nomad that doesn't have to worry about washing clothes, it gives more time to see Chiang Mai & also have more time to focus on work.
//           </p>
//         </div>
//       </div>

//       <button
//         onClick={handleClick}
//         className="mt-6 bg-blue-950 text-white px-4 py-2 rounded-full sm:px-6 sm:py-2 md:mt-8"
//       >
//         View All Services
//       </button>
//     </div>
//   );
// };

// export default TestimonialPage;
