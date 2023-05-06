import axios from 'axios';
import React from 'react';
import ReviewTile from './ReviewTile';

const { useState, useEffect } = React;

export default function ReviewsList({ product }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          product_id: product.id,
        },
      })
        .then(({ data }) => setReviews(data));
    }
  }, [product]);

  return (
    <div className="reviews-list">
      {
        reviews.length > 0
          ? reviews.map((review) => <ReviewTile review={review} />)
          : 'Loading...'
        }
    </div>
  );
}
