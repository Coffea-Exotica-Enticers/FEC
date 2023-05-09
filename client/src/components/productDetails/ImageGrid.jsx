import React from 'react';

export default function ImageGrid({ image }) {
  // to display particular product images in a gallery

  /** Props example coming
   * "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                }]
   */
  return (
    <div className="Top_left-pane">
      <ul className="product-images-grid">
        <li className="main-image">
          <img alt="Expand gallery" sizes="width:60%" src={image.thumbnail_url} />
        </li>
      </ul>
    </div>
  );
}
