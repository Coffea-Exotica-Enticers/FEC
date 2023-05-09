import React from 'react';
import RateProduct from './RateProduct';
import Recommend from './Recommend';
import RateCharacteristic from './RateCharacteristic';

const { useState, useEffect } = React;

export default function WriteReview({ product, characteristics }) {
  const [rating, setRating] = useState(0);
  const [charRatings, setCharRatings] = useState({});
  const relevantChars = Object.keys(characteristics);
  const rateChar = (charId, value) => {
    // setCharRatings({ ...charRatings, [charId]: value });
    console.log(charId);
    console.log(value);
  };
  return (
    <div className="write-review-modal">
      <RateProduct rating={rating} setRating={setRating} />
      <form>
        <Recommend />
        {
          relevantChars.map((char) => (
            <RateCharacteristic
              charName={char}
              charId={characteristics[char].id}
              rateChar={rateChar}
            />
          ))
        }
      </form>
    </div>
  );
}
