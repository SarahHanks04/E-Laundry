import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Styles/Style.css";
import { Route, Router, Routes } from "react-router-dom";
// import Hero from "./Component/Hero";
import Navbar from "./Component/Header";
// import AboutPage from "./Pages/AboutPage";
// import ServicePage from "./Pages/ServicePage";
// import Service from "./Pages/Services";
// import ContactForm from "./Pages/Contact";
// import TestimonialPage from "./Pages/TestimonialPage";
// import SubmitReviewPage from "./Pages/SubmitReviewPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/reviews" element={<TestimonialPage />} />
        <Route path="/submit-review" element={<SubmitReviewPage />} />
      </Routes> */}
    </>
  );
}

export default App;
