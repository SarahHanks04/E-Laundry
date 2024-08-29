import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubmitReviewPage = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !review || ratings === 0) {
      alert("Please complete all fields and select a rating.");
      return;
    }

    const newReview = {
      name,
      review,
      ratings,
    };

    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(savedReviews));

    onNewReview(newReview);

    setName("");
    setReview("");
    setRatings(0);
  };

  return (
    <section className=" flex justify-center items-center min-h-screen bg-teal-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Submit Review
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="ratings"
            className="block text-gray-700 mb-2 font-bold"
          >
            Ratings
          </label>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                size="xs"
                className={`cursor-pointer text-2xl ${
                  i < ratings ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => setRatings(i + 1)}
              />
            ))}
          </div>
        </div>

        <Link
          to="/reviews"
          className="block text-center text-gray-600 font-bold mt-10 hover:underline"
        >
          Submit Reviews
        </Link>

        <Link
          to="/"
          className="block text-center text-red-400 font-serif text-sm mt-10 hover:underline"
        >
          Go Back to Home
        </Link>
      </form>
    </section>
  );
};

export default SubmitReviewPage;
