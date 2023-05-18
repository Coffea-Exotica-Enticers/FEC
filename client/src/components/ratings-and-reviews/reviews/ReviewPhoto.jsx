/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const { useState } = React;

export default function ReviewPhoto({ url }) {
  const [showModal, setShowModal] = useState(false);
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';
  };
  return (
    <span className="review-photo-container">
      <button type="button" className="review-photo-button" onClick={() => setShowModal(true)}>
        <img className="review-photo-thumbnail" aria-label="thumbnail" src={url} alt="" onError={handleError} />
      </button>
      {
        showModal
          ? (
            <div className="review-photo-modal" onClick={() => setShowModal(false)}>
              <button
                type="button"
                aria-label="close"
                className="close-photo-modal"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img className="review-photo-expanded" aria-label="expanded" src={url} alt="" onClick={(e) => e.stopPropagation()} onError={handleError} />
            </div>
          )
          : null
      }
    </span>
  );
}
