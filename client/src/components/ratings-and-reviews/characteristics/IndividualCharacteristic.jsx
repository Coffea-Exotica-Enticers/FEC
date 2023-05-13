import React from 'react';

const { useState } = React;

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
      <div className="characteristic-meter">
        <div className="characteristic-meter-pointer" style={{ left: `${percentage}%` }} />
      </div>
      <div className="scale">
        <span>{descriptors[0]}</span>
        <span>{descriptors[1]}</span>
        <span>{descriptors[2]}</span>
      </div>
    </div>
  );
}
