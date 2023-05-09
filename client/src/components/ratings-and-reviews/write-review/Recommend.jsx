import React from 'react';

export default function Recommend() {
  return (
    <div className="write-review-recommend">
      Do you recommend this product?
      <label htmlFor="recommend-yes">
        <input type="radio" id="recommend-yes" name="recommend" value="true" required />
        Yes
      </label>
      <label htmlFor="recommend-no">
        <input type="radio" id="recommend-no" name="recommend" value="false" />
        No
      </label>
    </div>
  );
}
