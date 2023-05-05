import React from 'react';

export default function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      {
        review
          ? (
            <div>
              <div>
                Rating:
                {review.rating}
              </div>
              <div>
                Date:
                {new Date(review.date).toDateString()}
              </div>
              <div>
                Summary:
                {review.summary}
              </div>
              <div>
                body:
                {review.body}
              </div>
              <div>
                Recommend:
                {`${review.recommend}`}
              </div>
              <div>
                Name:
                {review.reviewer_name}
              </div>
              <div>
                Helpful?:
                {review.helpfulness}
              </div>
            </div>
          )
          : 'Loading...'
      }
    </div>
  );
}
