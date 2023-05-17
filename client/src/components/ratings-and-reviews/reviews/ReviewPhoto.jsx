import React from 'react';

const { useState } = React;

export default function ReviewPhoto({ url }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <span className="review-photo-container">
      <button type="button" className="review-photo-button" onClick={() => setShowModal(true)}>
        <img className="review-photo-thumbnail" aria-label="thumbnail" src={url} alt="" height="100" width="auto" />
      </button>
      {
        showModal
          ? (
            <div className="review-photo-modal">
              <button
                type="button"
                aria-label="close"
                className="close-photo-modal"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img className="review-photo-expanded" aria-label="expanded" src={url} alt="" />
            </div>
          )
          : null
      }
    </span>
  );
}
