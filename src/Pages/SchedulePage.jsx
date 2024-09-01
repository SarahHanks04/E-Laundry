import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const PaymentPage = ({ bookingDetails, handlePaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const handlePayment = async () => {
    try {
      const paymentData = {
        amount: bookingDetails.selectedService.price,
        paymentMethod: paymentMethod,
      };

      const response = await axios.post("/api/payments", paymentData);

      if (response.status === 200) {
        setPaymentStatus("Payment successful!");
        handlePaymentSuccess();
      } else {
        setPaymentError("Payment failed. Please try again.");
      }
    } catch (error) {
      setPaymentError("Payment failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="payment-page p-4 h-screen bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Confirm Booking and Make Payment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="service-details">
            <h3 className="text-xl font-bold mb-2 text-gray-600">
              Service Details:
            </h3>
            <p className="text-lg mb-2 text-gray-600">
              Service: {bookingDetails.selectedService.name}
            </p>
            <p className="text-lg mb-2 text-gray-600">
              Price: &#8358;{bookingDetails.selectedService.price}
            </p>
          </div>
          <div className="payment-method">
            <h3 className="text-xl font-bold mb-2 text-gray-600">
              Select Payment Method:
            </h3>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 border rounded w-full"
            >
              <option value="">Select payment method</option>
              <option value="card">Card</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        {paymentError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {paymentError}
          </div>
        )}

        {paymentStatus && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {paymentStatus}
          </div>
        )}

        <button
          onClick={handlePayment}
          className="mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300"
        >
          Make Payment
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PaymentPage;
