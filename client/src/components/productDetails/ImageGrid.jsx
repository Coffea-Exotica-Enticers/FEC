import React, { useState } from 'react';

export default function ImageGrid({
  selectedStyle, selectedPhoto, isSelectorActive,
}) {
  // to display particular product images in a gallery

  /** Props example coming
   * "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                }]
   */
  // const [photo, setPhoto] = useState(null);
  console.log('selectedPhoto', selectedPhoto);
  return (
    <div className="Top_left-pane">
      <ul className="product-images-grid">
        <li className="main-image">
          <img className="default-image" alt="Default gallery" src={isSelectorActive ? selectedStyle.photos[0].thumbnail_url : (selectedPhoto || selectedStyle.photos[0].thumbnail_url)} />
        </li>
      </ul>
    </div>
  );
}
