import React, { useState } from 'react';
import AddAnsModal from './AddAnsModal';

export default function AddAnswer({ id, getAllAnswers }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>Add Your Answer</button>
      <AddAnsModal show={show} setShow={setShow} id={id} getAllAnswers={getAllAnswers} />
    </>
  );
}
