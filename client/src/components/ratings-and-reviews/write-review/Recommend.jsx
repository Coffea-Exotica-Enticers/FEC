import React from 'react';

export default function Recommend({ setRecommend }) {
  return (
    <div className="write-review-recommend">
      Do you recommend this product?*
      <label htmlFor="recommend-yes" className="recommend-yes">
        <input
          type="radio"
          id="recommend-yes"
          name="recommend"
          value="true"
          required
          onClick={() => setRecommend(true)}
        />
        Yes
      </label>
      <label htmlFor="recommend-no" className="recommend-no">
        <input
          type="radio"
          id="recommend-no"
          name="recommend"
          value="false"
          onClick={() => setRecommend(false)}
        />
        No
      </label>
    </div>
  );
}
