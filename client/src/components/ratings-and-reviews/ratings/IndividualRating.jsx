import React from 'react';

export default function IndividualRating(props) {
  const {
    rating,
    ratingCount,
    totalRatings,
    ratingsFilter,
    setRatingsFilter,
  } = props;
  const percentage = Math.floor((Number(ratingCount) / totalRatings) * 100);

  const toggleFilter = () => {
    if (ratingsFilter.includes(Number(rating))) {
      setRatingsFilter(ratingsFilter.filter((star) => star !== Number(rating)));
    } else {
      setRatingsFilter([...ratingsFilter, Number(rating)]);
    }
  };

  return (
    <div className="star-rating-meter">
      <button type="button" className="rating-label" onClick={toggleFilter}>
        {`${rating} stars`}
      </button>
      <div className="rating-meter">
        <span className="rating-meter-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="rating-count">{`(${ratingCount})`}</span>
    </div>
  );
}
