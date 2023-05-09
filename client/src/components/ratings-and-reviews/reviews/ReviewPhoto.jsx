import React from 'react';

export default function ReviewPhotos({ url }) {
  return (
    <img className="review-photo" src={url} alt="" height="100" width="auto" />
  );
}
