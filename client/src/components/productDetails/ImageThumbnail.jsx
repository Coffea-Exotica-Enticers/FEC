import React, { useState, useEffect } from 'react';

export default function ImageThumbnail({ selectedStyle, setSelectedPhoto, setIsSelectorActive }) {
  const thumbnails = selectedStyle.photos;

  return (
    <div className="ThumbnailContainer">
      <div className="Thumbnail">
        {thumbnails.map((thumbnail) => (
          <ul key={thumbnail.thumbnail_url} className="VerticalSlider">
            <li className="thumb-gallery">
              <button
                type="button"
                className="thumbnail-button"
                onClick={() => {
                  setSelectedPhoto(thumbnail.thumbnail_url);
                  setIsSelectorActive(false);
                }}
              >
                <div className="image withPlaceholder">
                  <img className="isLoaded" src={thumbnail.thumbnail_url} alt="gallery" />
                </div>
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>

  );
}
