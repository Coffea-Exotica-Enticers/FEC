import React from 'react';
import ReviewsList from './ReviewsList';

export default function RatingsAndReviews({ product }) {
  return (
    <div className="ratings-and-reviews">
      <ReviewsList product={product} />
    </div>
  );
}
