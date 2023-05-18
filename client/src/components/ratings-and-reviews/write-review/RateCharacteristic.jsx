import React from 'react';

export default function RateCharacteristics({ charName, charId, rateChar }) {
  let descriptors;
  if (charName === 'Size') {
    descriptors = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'];
  } else if (charName === 'Width') {
    descriptors = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  } else if (charName === 'Comfort') {
    descriptors = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  } else if (charName === 'Quality') {
    descriptors = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  } else if (charName === 'Length') {
    descriptors = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  } else if (charName === 'Fit') {
    descriptors = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
  }
  return (
    <div className="rate-characteristic-container">
      <span className="characteristic-label">{charName}</span>
      <div className="characteristic-selector">
        <span>
          <label htmlFor={`${descriptors[0]}-${charName}`}>
            {descriptors[0]}
            <input
              type="radio"
              id={`${descriptors[0]}-${charName}`}
              name={charName}
              aria-label={`${descriptors[0]}`}
              value="1"
              onClick={(e) => rateChar(charId, e.target.value)}
              required
            />
          </label>
        </span>
        <span>
          <label htmlFor={`${descriptors[1]}-${charName}`}>
            {descriptors[1]}
            <input
              type="radio"
              id={`${descriptors[1]}-${charName}`}
              name={charName}
              aria-label={`${descriptors[1]}`}
              value="2"
              onClick={(e) => rateChar(charId, e.target.value)}
            />
          </label>
        </span>
        <span>
          <label htmlFor={`${descriptors[2]}-${charName}`}>
            {descriptors[2]}
            <input
              type="radio"
              id={`${descriptors[2]}-${charName}`}
              name={charName}
              aria-label={`${descriptors[2]}`}
              value="3"
              onClick={(e) => rateChar(charId, e.target.value)}
            />
          </label>
        </span>
        <span>
          <label htmlFor={`${descriptors[3]}-${charName}`}>
            {descriptors[3]}
            <input
              type="radio"
              id={`${descriptors[3]}-${charName}`}
              name={charName}
              aria-label={`${descriptors[3]}`}
              value="4"
              onClick={(e) => rateChar(charId, e.target.value)}
            />
          </label>
        </span>
        <span>
          <label htmlFor={`${descriptors[4]}-${charName}`}>
            {descriptors[4]}
            <input
              type="radio"
              id={`${descriptors[4]}-${charName}`}
              name={charName}
              aria-label={`${descriptors[4]}`}
              value="5"
              onClick={(e) => rateChar(charId, e.target.value)}
            />
          </label>
        </span>
      </div>
    </div>
  );
}
