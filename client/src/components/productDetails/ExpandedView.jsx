/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

export default function ExpandedView({
  photos, index, show, onClose, setSelectedPhoto, setIndex,
}) {
  /**
   * clicking on the main image will zoom the image by 2.5 times. Instead of displaying a magnifying glass on hover
   */

  /**
 * <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 21V30.001H21V21H30V19H21V10H19V19H10V21H19Z" fill="black"/>
</svg>
 *
 *
 */

  const [isZoomed, setIsZoomed] = useState(false);

  function goToPrevious(e) {
    e.preventDefault();
    if (index > 0 && index <= photos.length - 1) {
      setIndex(index - 1);
      setSelectedPhoto(photos.photos[index].thumbnail_url);
    }
  }

  function goToNext(e) {
    e.preventDefault();
    if (index >= 0 && index < photos.length - 1) {
      setIndex(index + 1);
      setSelectedPhoto(photos[index].thumbnail_url);
    }
  }

  // function zoomIn(pageX, pageY) {
  //   setIsZoomed(true);
  //   currentMoveType === 'drag' ? initialDrag(pageX, pageY) : initialMove(pageX, pageY);
  //   afterZoomIn && afterZoomIn();
  // }

  // function handleClick(event) {
  //   // if (isZoomed) {
  //   // }
  //   const positions = event.currentTarget.getBoundingClientRect();

  // }
  if (!show) {
    return null;
  }

  // While the image is zoomed, no arrow buttons or thumbnail selection icons
  // The mouse should display as a “-” symbol
  //  for my div element ->  style="transition: transform 0.4s ease-out 0s; transform: translate(-691.875px, 76.125px) scale(2.5)
  return (
    <div className="Expanded-View-Modal" onClick={onClose}>
      <div className="expanded-image-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="left-button-expanded" onClick={(e) => goToPrevious(e)}>
          <svg height="12px" width="12px" fill="#000" viewBox="0 0 185.4 300">
            <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z" />
          </svg>
        </button>
        <button type="button" className="right-button-expanded" onClick={(e) => goToNext(e)}><svg height="12px" width="12px" fill="#000" viewBox="0 0 185.4 300"><path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" /></svg></button>
        <button onClick={onClose} type="button">Close</button>
        <img
          className="expanded-image"
          alt="Expanded gallery"
          src={photos[index].url}
          style={{ display: 'block' }}
          // onClick={setZoom}
        />
      </div>

    </div>
  );
}
