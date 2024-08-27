import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Styles/Style.css";
import { Route, Router, Routes } from "react-router-dom";
import Hero from "./Component/Hero";
import Navbar from "./Component/Header";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";

function App() {
  return (
    <>
      {/* <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default App;
