/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageThumbnail from './ImageThumbnail';
import { ProductContext } from './Product';

function Image() {
  const {
    selectedStyle, setSelectedStyle, selectedPhoto, setSelectedPhoto,
    isSelectorActive, setIsSelectorActive,
    index, setIndex,
  } = useContext(ProductContext);

  return (
    <div className="main-image-pane">
      <ImageThumbnail
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        setIsSelectorActive={setIsSelectorActive}
        setIndex={setIndex}
      />
      <ImageGrid
        selectedPhoto={selectedPhoto}
        selectedStyle={selectedStyle}
        thumbnails={selectedStyle.photos}
        isSelectorActive={isSelectorActive}
        index={index}
        setSelectedPhoto={setSelectedPhoto}
        setIndex={setIndex}
      />
    </div>
  );
}

export default Image;
