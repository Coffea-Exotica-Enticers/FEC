/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageThumbnail from './ImageThumbnail';
import { ProductContext } from './Product';

function Image() {
  const {
    selectedStyle, setSelectedStyle,
    setIsExpandedActive,
    index, setIndex,
  } = useContext(ProductContext);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <div className="main-image-pane">
      <ImageThumbnail
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        setIndex={setIndex}
      />
      <ImageGrid
        selectedPhoto={selectedPhoto}
        selectedStyle={selectedStyle}
        thumbnails={selectedStyle.photos}
        setIsExpandedActive={setIsExpandedActive}
        index={index}
        setSelectedPhoto={setSelectedPhoto}
        setIndex={setIndex}
      />
    </div>
  );
}

export default Image;
