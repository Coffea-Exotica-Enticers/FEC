import React from 'react';
import ReviewsList from './reviews/ReviewsList';
import WriteReview from './write-review/WriteReview';

export default function RatingsAndReviews({ product }) {
  return (
    <div className="ratings-and-reviews">
      {/* <ReviewsList product={product} /> */}
      <WriteReview product={product} />
    </div>
  );
}
