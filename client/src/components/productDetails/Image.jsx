import React, { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';

function Image({ styleList }) {
  // const [images, setImages] = useState([]);
  const [image, setImage] = useState('');

  function createImage() {
    if (styleList.length > 0) {
      setImage(styleList[0].photos[1]);
    }
  }

  useEffect(() => {
    createImage();
  }, [styleList]);

  return image ? (
    <div className="main-image-pane">
      <ImageGrid image={image} />
    </div>
  )
    : <div> Image loading</div>;
}

export default Image;
