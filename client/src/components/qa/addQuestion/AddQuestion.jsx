import React, { useState } from 'react';
import AddQModal from './AddQModal';

export default function AddQuestion() {
  const [show, setShow] = useState(false);

  function showModal() {
    console.log('I happened');
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <>
      <button type="button" onClick={showModal}>Ask Your Question</button>
      <AddQModal show={show} hideModal={hideModal} />
    </>
  );
}
