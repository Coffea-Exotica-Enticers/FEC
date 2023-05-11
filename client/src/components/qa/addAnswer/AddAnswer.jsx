import React, { useState } from 'react';
import AddAnsModel from './AddAnsModal';

export default function AddAnswer({ id }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(true)}>Add Your Answer</button>
      <AddAnsModel show={show} setShow={setShow} id={id} />
  </>
  )
}