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
import Service from "./Pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
