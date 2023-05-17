import React from 'react';

const { useState } = React;

export default function BodyInput({ setBody }) {
  const [remainingCharLength, setRemainingCharLength] = useState(50);

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setRemainingCharLength(50 - e.target.value.length);
    } else if (e.target.value.length > 50) {
      setRemainingCharLength(0);
    }
    setBody(e.target.value);
  };

  return (
    <div className="write-review-body">
      <label htmlFor="body">
        Review:*
        <br />
        <textarea
          minLength="50"
          maxLength="1000"
          name="body"
          placeholder="Why did you like the product or not?"
          required
          onChange={handleChange}
        />
      </label>
      <div>
        <p>
          {
            remainingCharLength > 0
              ? `Minimum required characters left: ${remainingCharLength}`
              : 'Minimum reached'
          }
        </p>
      </div>
    </div>
  );
}
