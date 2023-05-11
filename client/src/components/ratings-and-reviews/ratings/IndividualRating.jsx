import React from 'react';

export default function IndividualRating({rating, ratingCount, totalRatings }) {
  const percentage = Math.floor((Number(ratingCount) / totalRatings) * 100);
  return (
    <div className="star-rating-meter">
      <span>{`${rating} stars`}</span>
      <div className="rating-meter">
        <span className="rating-meter-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
