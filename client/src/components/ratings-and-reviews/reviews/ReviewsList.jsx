import React from 'react';
import ReviewTile from './ReviewTile';

export default function ReviewsList({ shownReviews, search }) {
  return shownReviews.length
    ? (
      <div className="reviews-list">
        {
          shownReviews.map(
            (review) => <ReviewTile key={review.review_id} review={review} search={search} />,
          )
        }
      </div>
    )
    : <div className="reviews-list">No Reviews...</div>;
}
