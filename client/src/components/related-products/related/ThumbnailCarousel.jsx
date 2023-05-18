import React, { useState, useEffect } from 'react';

function ThumbnailCarousel({ changeDefaultImg, thumbnails }) {
  const [index, setIndex] = useState(1);
  const [move, setMove] = useState(0);
  const maxWidth = Math.floor(thumbnails.length / 4);

  function moveRight() {
    setMove(4 * index);
    setIndex(index + 1);
  }
  function moveLeft() {
    setMove(move - 4);
    setIndex(index - 1);
  }
  useEffect(() => {
    setIndex(1);
    setMove(0);
  }, []);

  if (!thumbnails[move]) {
    return (<></>);
  }

  return (
    <div className="thumbnail-list">
      {index !== 1 && (
        <button type="button" data-testid="tl-left" className="thumbnail-left" onClick={() => moveLeft()}>
          &#5176;
        </button>
      )}
      {thumbnails[move] && (
        <img onClick={() => changeDefaultImg(thumbnails[move])} src={thumbnails[move]} alt="img 1" />
      )}

      {thumbnails[move + 1] && (
        <img onClick={() => changeDefaultImg(thumbnails[move + 1])} src={thumbnails[move + 1]} alt="img 2" />
      )}

      {thumbnails[move + 2] && (
        <img onClick={() => changeDefaultImg(thumbnails[move + 2])} src={thumbnails[move + 2]} alt="img 3" />
      )}

      {thumbnails[move + 3] && (
        <img onClick={() => changeDefaultImg(thumbnails[move + 3])} src={thumbnails[move + 3]} alt="img 4" />
      )}

      {index !== maxWidth && maxWidth > 1 && (
        <button type="button" data-testid="tl-right" className="thumbnail-right" onClick={() => moveRight()}>
          &#5171;
        </button>
      )}
    </div>
  );
}

export default ThumbnailCarousel;
