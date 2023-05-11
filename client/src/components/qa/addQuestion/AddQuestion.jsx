import React, { useState } from 'react';
import AddQModal from './AddQModal';

export default function AddQuestion({ product }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>Ask Your Question</button>
      <AddQModal show={show} setShow={setShow} product={product} />
    </>
  );
}
