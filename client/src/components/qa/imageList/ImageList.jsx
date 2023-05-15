import React, { useState } from 'react';
import ImageListEntry from './ImageListEntry';

export default function ImageList({ photos }) {
  const [validPhotos, setValidPhotos] = useState([]);

  function filterPhotos(photoList) {
    const validArray = [];
    for (const photo of photoList) {
      if (!photo.url.includes('blob')) {
        validArray.push(photo);
      }
    }
    setValidPhotos(validArray);
  }

  if (validPhotos.length > 0) {
    filterPhotos(photos);
    return (
      <div className="imgList">
        {
          validPhotos.map((photo) => <ImageListEntry photo={photo} />)
        }
      </div>
    );
  }
}
