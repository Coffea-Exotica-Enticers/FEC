import React from 'react';

export default function StarRatings({ rating }) {
  // Creates an array of stars. Each number in the array determines how much of the star is filled
  const starsArray = [];
  // Determines how many whole stars there will be
  const wholeStars = Math.floor(rating);
  for (let i = 0; i < wholeStars; i += 1) {
    starsArray.push(100);
  }
  // This adds any partially filled stars or empty stars so that there are 5 stars in total
  if (wholeStars < 5) {
    const partialStar = Math.floor((rating - wholeStars) * 10) * 10;
    starsArray.push(partialStar);

    while (starsArray.length < 5) {
      starsArray.push(0);
    }
  }
  // This will map across the array, creating new stars based on the star template
  // And will fill the stars according to their percentage
  return (
    <span className="star-ratings" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {
        starsArray.map((starPercentage, index) => (
          <svg
          // This is purely a visual element, so it should be fine to use index as key
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            aria-hidden="true"
            role="presentation"
            className="star"
            width="1.5em"
            height="1.5em"
          >
            <use href="#star-template" fill={`url(#fill-${starPercentage})`} stroke="#38423b" />
          </svg>
        ))
      }
    </span>
  );
}
