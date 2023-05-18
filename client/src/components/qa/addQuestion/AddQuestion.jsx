import React, { useState } from 'react';
import AddQModal from './AddQModal';

export default function AddQuestion({ product }) {
  const [show, setShow] = useState(false);

  function revealModal(value) {
    setShow(value);
  }

  return (
    <>
      <button type="button" className="addQuestion" onClick={() => revealModal(true)}>Ask Your Question</button>
      <AddQModal show={show} revealModal={revealModal} product={product} />
    </>
  );
}
