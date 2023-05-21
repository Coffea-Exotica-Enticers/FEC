/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import ExpandedView from './ExpandedView';

export default function ImageGrid({
  selectedStyle, setIsExpandedActive,
  thumbnails, index, setSelectedPhoto, setIndex,
}) {
  // to display particular product image in a gallery
  /** Customers should also be able to
   * change to the next or previous image in the set using forward and backwards arrow buttons
   */
  const [show, setShow] = useState(false);

  function goToPrevious(e) {
    e.preventDefault();
    if (index > 0 && index <= thumbnails.length - 1) {
      setIndex(index - 1);
      setSelectedPhoto(selectedStyle.photos[index].thumbnail_url);
    }
  }

  function goToNext(e) {
    e.preventDefault();
    if (index >= 0 && index < thumbnails.length - 1) {
      setIndex(index + 1);
      setSelectedPhoto(selectedStyle.photos[index].thumbnail_url);
    }
  }

  return (
    <div className="Top_left-pane">
      <ul className="product-images-grid">
        <button aria-label="product-left-btn" type="button" className="product-left-button-image" onClick={(e) => goToPrevious(e)}>
          <svg height="12px" width="12px" fill="#000" viewBox="0 0 185.4 300">
            <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z" />
          </svg>
        </button>
        <button aria-label="product-right-btn" type="button" className="product-right-button-image" onClick={(e) => goToNext(e)}>
          <svg height="12px" width="12px" fill="#000" viewBox="0 0 185.4 300">
            <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
          </svg>
        </button>
        <li className="main-image">
          <img
            className="default-image"
            alt="Default gallery"
            aria-label="main Image"
            src={selectedStyle.photos[index].thumbnail_url}
            onClick={() => {
              setIsExpandedActive(true);
              setShow(true);
            }}
          />
          <ExpandedView
            onClose={() => {
              setShow(false);
              setIsExpandedActive(false);
            }}
            show={show}
            photos={thumbnails}
            index={index}
            setSelectedPhoto={setSelectedPhoto}
            setIndex={setIndex}
          />
        </li>
      </ul>
    </div>
  );
}
