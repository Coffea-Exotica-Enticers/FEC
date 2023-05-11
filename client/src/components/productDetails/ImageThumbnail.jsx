import React, { useState, useEffect } from 'react';

export default function ImageThumbnail({ selectedStyle }) {
  const thumbnails = selectedStyle.photos;
  return (
    <div className="ThumbnailContainer">
      <div className="Thumbnail">
        {thumbnails.map((thumbnail) => (
          <ul className="VerticalSlider">
            <li className="thumb-gallery">
              <button type="button">
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
