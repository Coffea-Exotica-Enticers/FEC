import React from 'react';

export default function IndividualCharacteristic({ charName, characteristic }) {
  const percentage = Math.floor((characteristic.value / 5) * 100);
  let descriptors;
  if (charName === 'Size') {
    descriptors = ['A size too small', 'Perfect', 'A size too big'];
  } else if (charName === 'Width') {
    descriptors = ['Too narrow', 'Perfect', 'Too wide'];
  } else if (charName === 'Comfort') {
    descriptors = ['Uncomfortable', 'Ok', 'Perfect'];
  } else if (charName === 'Quality') {
    descriptors = ['Poor', 'What I expected', 'Perfect'];
  } else if (charName === 'Length') {
    descriptors = ['Runs short', 'Perfect', 'Runs long'];
  } else if (charName === 'Fit') {
    descriptors = ['Runs tight', 'Perfect', 'Runs long'];
  }
  return (
    <div className="characteristic">
      <div className="label">{charName}</div>
      <div className="characteristic-meter-container">
        <div className="characteristic-meter" role="img" aria-label={`${charName} characteristic meter`} />
        <div className="characteristic-meter-pointer" style={{ left: `${percentage}%` }} />
      </div>
      <div className="scale">
        {descriptors.map((char) => <span key={char}>{char}</span>)}
      </div>
    </div>
  );
}
