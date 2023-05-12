import React from 'react';
import IndividualCharacteristic from './IndividualCharacteristic';

const { useState } = React;

export default function CharacteristicsBreakdown({ characteristics }) {
  const characteristicsObjects = Object.keys(characteristics);
  return (
    <div>
      {characteristicsObjects.map(
        (char) => (
          <IndividualCharacteristic charName={char} characteristic={characteristics[char]} />
        ),
      )}
    </div>
  );
}
