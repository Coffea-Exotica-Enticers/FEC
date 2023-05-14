import axios from 'axios';
import React from 'react';

const { useState } = React;

export default function PhotoUpload({ photos, setPhotos }) {
  const [uploadCount, setUploadCount] = useState(1);
  const [thumbnails, setThumbnails] = useState({});
  const [showError, setShowError] = useState(false);
  const handleButtonClick = () => {
    document.querySelector(`.input-photo-upload.count${uploadCount}`).click();
  };

  const removePhoto = (blob) => {
    setPhotos(photos.filter((photo) => photo !== thumbnails[blob]));
    setThumbnails((current) => {
      const newState = { ...current };
      delete newState[blob];
      return newState;
    });
    setUploadCount(uploadCount - 1);
  };

  const handleUpload = (e) => {
    const fileToUpload = e.target.files[0];
    if (/([^\s]+(\.(jpe?g|png)))/.test(fileToUpload.name) && fileToUpload.size < 10485760) {
      setShowError(false);
      const blob = URL.createObjectURL(fileToUpload);
      setThumbnails({ ...thumbnails, [blob]: null });
      setUploadCount(uploadCount + 1);
      const form = new FormData();
      form.append('file', fileToUpload);
      axios.post('https://api.cloudinary.com/v1_1/dlbnwlpoq/image/upload', form, {
        params: {
          upload_preset: 'ulaqsdpl',
        },
      })
        .then(({ data }) => {
          setPhotos([...photos, data.secure_url]);
          setThumbnails({ ...thumbnails, [blob]: data.secure_url });
        })
        .catch((err) => {
          console.error('PROBLEM GETTING IMAGE URLS', err);
          setShowError(true);
          setUploadCount(uploadCount - 1);
          removePhoto(blob);
        });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="photo-upload">
      <div className="photo-upload-header">Upload Photos (JPG, JPEG, PNG):</div>
      <div className="upload-row">
        {
          Object.keys(thumbnails).map((thumbnailBlob) => (
            <span className="thumbnail">
              <img className="thumbnail-photo" key={thumbnailBlob} src={thumbnailBlob} alt="thumbnail" />
              <button type="button" className="remove-photo" onClick={() => removePhoto(thumbnailBlob)}>
                &times;
              </button>
            </span>
          ))
        }
        {
          uploadCount <= 5
            ? (
              <button className="photo-upload-button" type="button" onClick={handleButtonClick}>
                +
              </button>
            )
            : null
        }
      </div>
      {
        showError
          ? (
            <div className="upload-error">
              There was a problem uploading your photo.
              Please try again or upload a different photo.
            </div>
          )
          : null
      }
      {
        [1, 2, 3, 4, 5].map((count) => (
          <input
            key={count}
            type="file"
            className={`input-photo-upload count${count}`}
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleUpload}
            hidden
          />
        ))
      }
    </div>

  );
}
