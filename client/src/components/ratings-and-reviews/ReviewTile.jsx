import React from 'react';
import StarRatings from '../shared/StarRatings';

export default function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      <div className="top-row">
        <div className="top-row-left">
          <StarRatings rating={review.rating} />
        </div>
        <div className="top-row-right">
          {`${review.reviewer_name}, `}
          {new Date(review.date).toDateString()}
        </div>
      </div>
      <div className="review-summary">
        {review.summary}
      </div>
      <div className="review-body">
        {review.body}
      </div>
      {
      review.recommend
        ? <div className="recommend-label">&#x2713; I recommend this product</div>
        : null
      }
      {
        review.response
          ? (
            <div className="review-response">
              <div className="review-response-header">Response from seller:</div>
              {review.response}
            </div>
          )
          : null
      }
      <div className="review-bottom-row">
        Helpful?
        <button type="button" className="review-helpful">Yes</button>
        <span className="review-helpfulness-display">
          (
          {review.helpfulness}
          )
        </span>
      </div>
    </div>
  );
}
