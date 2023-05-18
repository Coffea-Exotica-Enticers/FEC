import React from 'react';

export default function ImageThumbnail({
  selectedStyle, setSelectedPhoto, setIndex,
}) {
  const thumbnails = selectedStyle.photos;

  return (
    <div className="Product-ThumbnailContainer">
      <div className="Product-Thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <ul key={thumbnail.thumbnail_url} className="VerticalSlider">
            <li className="product-thumb-gallery">
              <button
                type="button"
                className="product-thumbnail-button"
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
