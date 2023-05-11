import React from 'react';

const { useState } = React;

export default function SummaryInput({ setSummary }) {
  const [charLength, setCharLength] = useState(0);

  const handleChange = (e) => {
    setCharLength(e.target.value.length);
    setSummary(e.target.value);
  };

  return (
    <div className="write-review-summary">
      <label htmlFor="summary">
        Summary:
        <br />
        <input
          type="text"
          maxLength="60"
          name="summary"
          placeholder="Example: Best purchase ever!"
          onChange={handleChange}
        />
      </label>
      <br />
      <p>{`${charLength}/60`}</p>
    </div>
  );
}
