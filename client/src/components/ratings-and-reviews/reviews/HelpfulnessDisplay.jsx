import axios from 'axios';
import React from 'react';

const { useState, useRef } = React;

export default function HelpfulnessDisplay({ id, helpfulness }) {
  const [currentHelpfulness, setHelpfulness] = useState(helpfulness);
  const clickedHelpful = useRef(false);
  const handleHelpful = () => {
    if (!clickedHelpful.current) {
      axios.put(`/reviews/${id}/helpful`);
      setHelpfulness(currentHelpfulness + 1);
      clickedHelpful.current = true;
    }
  };
  return (
    <span className="helpfulness">
      Helpful?
      <button type="button" className="review-helpful" aria-label="rate review as helpful" onClick={handleHelpful}>Yes</button>
      <span className="review-helpfulness-display">
        (
        {currentHelpfulness}
        )
      </span>
    </span>
  );
}
