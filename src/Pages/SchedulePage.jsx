import React from 'react';

const SchedulePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Schedule Your Laundry Pickup</h2>
        <p className="mb-6">Select a convenient time for us to pick up your laundry.</p>
        {/* Form or schedule details can be added here */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Confirm Schedule</button>
      </div>
    </div>
  );
};

export default SchedulePage;
