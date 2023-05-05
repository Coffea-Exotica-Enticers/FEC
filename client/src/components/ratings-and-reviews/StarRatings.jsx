import React from 'react';

export default function StarRatings({ rating }) {
  return (
    <span>
      {
        [...new Array(5)].map((star, index) => (
          index < rating ? <span>&#9733;</span> : <span>&#9734;</span>
        ))
      }
    </span>
  );
}
