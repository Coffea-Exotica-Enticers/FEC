import React from 'react';
import ImageListEntry from './ImageListEntry';

export default function ImageList({ photos }) {
  console.log('photos is', photos);

  if (photos.length > 0) {
    return (
      <div className="imgList">
        {
          photos.map((photo) => <ImageListEntry photo={photo} />)
        }
      </div>
    );
  }
}
