import React, { useState, useEffect } from 'react';

function Image({ styleList }) {
  const [images, setImages] = useState([]);
  /** Props coming
   * "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
   */

  const img = '';

  // console.log('Images', images);
  console.log('images Image comp', images);

  function createImage() {
    if (styleList.length > 0) {
      styleList.forEach((style) => {
        setImages(...images, style.photos[0]);
      });
    }

    // console.log('Images', styleList.photos);
    // img = styleList.map((style) => (
    //   style.photos.map((photo) => (
    //     <div>
    //       {setImages(...images, photo)}
    //       <div className="column" />
    //       <img src={photo.thumbnail_url} alt="" />
    //     </div>
    //   ))

    // ));
  }

  console.log(styleList, 'Style list in image');
  useEffect(() => {
    createImage();
  }, [styleList]);

  console.log('images after', images);
  return images ? (
    <div>
      <div className="column" />
      <img src={images.thumbnail_url} alt="" />

    </div>
  )
    : <div> Image loading</div>;
}

export default Image;
