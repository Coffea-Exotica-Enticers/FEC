import React from 'react';

const { useState } = React;

export default function PhotoUpload({ photos, setPhotos }) {
  const makeThumbnails = () => {
    const newPhoto = document.querySelector('#photo-upload-url').value;
    if (photos.length < 5 && newPhoto.length) {
      setPhotos([...photos, newPhoto]);
      document.querySelector('#photo-upload-url').value = '';
    }
  };
  return (
    // <input type="file" />
    <div className="photo-upload">
      Upload Photos:
      <br />
      <input type="url" id="photo-upload-url" />
      <button type="button" onClick={makeThumbnails}>Upload</button>
      <div className="photo-upload-thumbnails">
        {
          photos.map((photo) => <img src={photo} height="150" width="auto" alt="thumbnail" />)
        }
      </div>
    </div>

  );
}
