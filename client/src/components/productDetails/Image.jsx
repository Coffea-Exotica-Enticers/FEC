/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import ImageGrid from './ImageGrid';
import ImageThumbnail from './ImageThumbnail';
import { ProductContext } from './Product';

function Image() {
  const { selectedStyle } = useContext(ProductContext);
  return (
    <div className="main-image-pane">
      <ImageThumbnail selectedStyle={selectedStyle} />
      <ImageGrid selectedStyle={selectedStyle} />
    </div>
  );
}

export default Image;
