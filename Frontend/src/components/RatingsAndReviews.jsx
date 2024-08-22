import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingsAndReviews = () => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  // Handle rating change
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (reviewText.trim()) {
      const newReview = { text: reviewText, rating };
      setReviews([...reviews, newReview]);
      setReviewText("");
      setRating(0);
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Rate and Review Us</h2>
      
      {/* Rating Tool */}
      <div className="mb-6 flex flex-col items-center">
        <h3 className="text-lg mb-2">Your Rating:</h3>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={32}
          activeColor="#ffd700"
        />
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          className="w-full p-4 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="5"
          required
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">User Reviews:</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 mb-4 bg-gray-800 rounded-lg shadow-md">
              <div className="mb-2">
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
              <p className="text-gray-300">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default RatingsAndReviews;


