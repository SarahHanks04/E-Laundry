import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save the data or send it to an API
    console.log("Form data submitted:", formData);
    // Clear form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="bg-teal-500 rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-4">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-300">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-white font-medium mb-2"
              >
                Phone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+15 24 645 5691"
                  required
                  className="w-full px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-300">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-black px-8 py-2 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-colors duration-300"
            >
              Submit
            </button>
            <div className="ml-4 p-2 text-center">
              <span className="text-white text-sm">
                or call{" "}
                <a href="tel:+66946916668" className="underline text-white">
                  +66 94 691 6668
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
