import React from 'react';

const BookingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Book Your Laundry Service</h2>
        <p className="mb-6">Choose your preferred service and book a time slot that suits you.</p>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Booking</button>
      </div>
    </div>
  );
};

export default BookingPage;
