import React from 'react';

export default function ImageListEntry({ photo }) {
  return (
    <div>
      <img className="answerImg" src={photo.url} alt={photo.id} data-testid="image-entry" />
    </div>
  );
}
