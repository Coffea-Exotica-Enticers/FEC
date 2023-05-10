import React from 'react';

export default function AddQModal({ show, hideModal }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div>This is a Modal</div>
      <button onClick={hideModal}>Close</button>
    </div>
  )
}