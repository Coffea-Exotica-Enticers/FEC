import React, { useState } from 'react';
import Modal from '../../shared/Modal';
import axios from 'axios';

export default function AddQModal({ show, setShow, product }) {
  const [qEntry, setQEntry] = useState('');
  const [nameEntry, setNameEntry] = useState('');
  const [emailEntry, setEmailEntry] = useState('');

  function postQuestion() {
    axios.post('/qa/questions', {
      id: product.id,
      question: qEntry,
      user_name: nameEntry,
      email: emailEntry
    })
    .then(() => {
      console.log('Question post successful');
      setShow(false);
    })
    .catch((err) => {
      console.log('Error in posting question: ', err);
    })
  }

  if (product) {
    return (
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title={"Ask About " + product.name}
        children={
          <>
            <form onSubmit={(e) => {
              e.preventDefault();
              postQuestion();
            }}
            >
              <textarea placeholder="Write Your Question Here..." onChange={(e) => setQEntry(e.target.value)}></textarea>
              <input placeholder="Nickname..." onChange={(e) => setNameEntry(e.target.value)}></input>
              <input placeholder="Email..." onChange={(e) => setEmailEntry(e.target.value)}></input>
              <button type="submit">Submit</button>
            </form>
          </>
        }
      />
    )
  } else {
    return (
      <div>Product Has Not Loaded Yet</div>
    )
  }
}