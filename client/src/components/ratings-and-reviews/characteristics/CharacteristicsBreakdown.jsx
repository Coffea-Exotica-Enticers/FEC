import React from 'react';
import IndividualCharacteristic from './IndividualCharacteristic';

export default function CharacteristicsBreakdown({ characteristics }) {
  const characteristicsObjects = Object.keys(characteristics);
  return (
    <div className="characteristics-breakdowns">
      {characteristicsObjects.map(
        (char) => (
          <IndividualCharacteristic
            key={char}
            charName={char}
            characteristic={characteristics[char]}
          />
        ),
      )}
    </div>
  );
}
