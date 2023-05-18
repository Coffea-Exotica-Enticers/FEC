import React from 'react';

export default function StarTemplate() {
  // This determines how much of the star is filled in increments of 10%.
  const percentFillGradients = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((percent) => (
    <linearGradient key={`linear-gradient${percent}`} id={`fill-${percent}`}>
      <stop offset={`${percent}%`} stopColor="#38423b" />
      <stop stopOpacity="0" />
    </linearGradient>
  ));

  // This will be added to the top of the page and be hidden from view.
  // StarRatings can then use this as a reference for making additional stars.
  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {percentFillGradients}
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="star-template">
          <path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" />
        </symbol>
      </defs>
    </svg>
  );
}
