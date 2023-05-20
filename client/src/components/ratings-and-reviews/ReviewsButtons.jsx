import React from 'react';

export default function ReviewsButtons(props) {
  const {
    shownReviews,
    reviewsCache,
    setShowCount,
    showCount,
    setShowModal,
  } = props;

  return (
    <div className="reviews-buttons">
      {
        shownReviews.length < reviewsCache.length
          ? (
            <button
              type="button"
              className="more-reviews"
              onClick={() => setShowCount(showCount + 2)}
              aria-label="show more reviews"
            >
              More Reviews
            </button>
          )
          : null
      }
      <button type="button" aria-label="Write a review" className="add-review" onClick={() => setShowModal(true)}>Add A Review</button>
    </div>
  );
}
