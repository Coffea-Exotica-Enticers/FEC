import axios from 'axios';
import React from 'react';
import ReviewsList from './reviews/ReviewsList';
import WriteReview from './write-review/WriteReview';

const { useState, useEffect } = React;

export default function RatingsAndReviews({ product }) {
  const [metaData, setMetaData] = useState(null);
  useEffect(() => {
    if (product) {
      axios.get('/reviews/meta', {
        params: {
          product_id: product.id,
        },
      })
        .then(({ data }) => setMetaData(data));
    }
  }, [product]);

  if (product && metaData) {
    return (
      <div className="ratings-and-reviews">
        {/* <ReviewsList product={product} /> */}
        <WriteReview product={product} characteristics={metaData.characteristics} />
      </div>
    );
  }
  return <div className="ratings-and-reviews">Loading...</div>;
}
