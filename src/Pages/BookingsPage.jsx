import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const BookingsPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [error, setError] = useState(null);

  const services = [
    { id: 1, name: "Washing", price: 3000 },
    { id: 2, name: "Dry Cleaning", price: 10000 },
    { id: 3, name: "Ironing", price: 1000 },
  ];

  const handleServiceChange = (e) => {
    const selectedService = services.find(
      (service) => service.id === parseInt(e.target.value)
    );
    setSelectedService(selectedService);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedService ||
      !pickupDate ||
      !deliveryDate ||
      !pickupTime ||
      !deliveryTime
    ) {
      setError("Please fill in all fields");
    } else {
      setError(null);
      // Handle booking submission
      console.log({
        selectedService,
        pickupDate,
        pickupTime,
        deliveryDate,
        deliveryTime,
      });
      // Reset form values
      setSelectedService(null);
      setPickupDate("");
      setDeliveryDate("");
      setPickupTime("");
      setDeliveryTime("");
      // Navigate to the next page
      window.location.href = "/booking-success";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="booking-page p-4 h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mt-[4rem]"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Book Your Laundry Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="service-selection">
            <label className="block mb-2 text-gray-600">Select Service:</label>
            <select
              onChange={handleServiceChange}
              className="p-2 border rounded w-full"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - &#8358;{service.price}
                </option>
              ))}
            </select>
          </div>
          <div className="pickup-schedule">
            <label className="block mb-2 text-gray-600">Pickup Date:</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="pickup-schedule">
            <label className="block mb-2 text-gray-600">Pickup Time:</label>
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="delivery-schedule">
            <label className="block mb-2 text-gray-600">Delivery Date:</label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="delivery-schedule">
            <label className="block mb-2 text-gray-600">Delivery Time:</label>
            <input
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="p-2 border rounded w-full mb-8"
            />
          </div>
        </div>

        {error && (
          <div className="text-red-600 mb-4">
            <p>{error}</p>
          </div>
        )}

        <NavLink
          to="/booking-success"
          className="mt-[5rem] bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          onClick={handleSubmit}
        >
          Confirm Booking
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default BookingsPage;

