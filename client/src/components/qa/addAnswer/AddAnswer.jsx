import React, { useState } from 'react';
import AddAnsModal from './AddAnsModal';

export default function AddAnswer({ id, getAllAnswers }) {
  const [show, setShow] = useState(false);

  function revealModal(value) {
    setShow(value);
  }

  return (
    <>
      <button type="button" className="addAnswer" onClick={() => revealModal(true)}>Add Your Answer</button>
      <AddAnsModal show={show} revealModal={revealModal} id={id} getAllAnswers={getAllAnswers} />
    </>
  );
}
