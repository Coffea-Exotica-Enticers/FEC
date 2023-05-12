/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageThumbnail from './ImageThumbnail';
import { ProductContext } from './Product';

function Image() {
  const {
    selectedStyle, setSelectedStyle, selectedPhoto, setSelectedPhoto,
    isSelectorActive, setIsSelectorActive,
  } = useContext(ProductContext);

  console.log('setSelectedPhoto inside Image.jsx', selectedPhoto);
  return (
    <div className="main-image-pane">
      <ImageThumbnail
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        setIsSelectorActive={setIsSelectorActive}
      />
      <ImageGrid
        selectedPhoto={selectedPhoto}
        selectedStyle={selectedStyle}
        isSelectorActive={isSelectorActive}
      />
    </div>
  );
}

export default Image;
