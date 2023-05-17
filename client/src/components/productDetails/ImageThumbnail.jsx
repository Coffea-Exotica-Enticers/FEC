import React from 'react';

export default function ImageThumbnail({
  selectedStyle, setSelectedPhoto, setIndex,
}) {
  const thumbnails = selectedStyle.photos;

  return (
    <div className="ThumbnailContainer">
      <div className="Thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <ul key={thumbnail.thumbnail_url} className="VerticalSlider">
            <li className="thumb-gallery">
              <button
                type="button"
                className="thumbnail-button"
                onClick={() => {
                  setSelectedPhoto(thumbnail.thumbnail_url);
                  setIndex(index);
                }}
              >
                <div className="image withPlaceholder">
                  <img className="isLoaded" src={thumbnail.thumbnail_url} alt="thumbnails" aria-label="small image" />
                </div>
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>

  );
}
