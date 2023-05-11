import React, { useState, useEffect } from 'react';

export default function ImageThumbnail({ selectedStyle }) {
  return (
    <div className="ThumbnailContainer">
      <ul className="VerticalSlider">
        <li className="thumb-gallery">
          <button type="button">
            <div className="image withPlaceholder">
              <img className="isLoaded" src={selectedStyle.photos[0].thumbnail_url} alt="gallery" />
            </div>
          </button>
        </li>
      </ul>
    </div>

  );
}
