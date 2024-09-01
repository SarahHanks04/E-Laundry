import "./App.css";
import "./Styles/Style.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./Component/Hero";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import Service from "./Pages/Services";
import ContactForm from "./Pages/Contact";
import TestimonialPage from "./Pages/TestimonialPage";
import SubmitReviewPage from "./Pages/SubmitReviewPage";
import Layout from "./Component/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PricesPage from "./Pages/PricesPage";
import PriceCart from "./Component/PriceCart";
import CartItems from "./Component/CartItems";
import { useState } from "react";
import BookingsPage from "./Pages/BookingsPage";
import PaymentPage from "./Pages/SchedulePage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handlePaymentSuccess = () => {
    // Handle payment success logic here
    console.log("Payment successful!");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset from the original trigger point
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/reviews" element={<TestimonialPage />} />
          <Route path="/submit-review" element={<SubmitReviewPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route
            path="/price-cart"
            element={
              <PriceCart cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart-items"
            element={
              <CartItems cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/booking"
            element={
              <BookingsPage /> }
          />
          <Route path="*" element={<PaymentPage bookingDetails={{
                  selectedService: {
                    name: "Washing",
                    price: 10,
                  },
                }}
                handlePaymentSuccess={handlePaymentSuccess} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
