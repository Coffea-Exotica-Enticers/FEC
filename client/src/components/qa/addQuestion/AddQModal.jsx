import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../shared/Modal';

export default function AddQModal({ show, revealModal, product }) {
  const [qEntry, setQEntry] = useState('');
  const [nameEntry, setNameEntry] = useState('');
  const [emailEntry, setEmailEntry] = useState('');

  function postQuestion() {
    axios.post('/qa/questions', {
      id: product.id,
      question: qEntry,
      user_name: nameEntry,
      email: emailEntry,
    })
      .then(() => {
        console.log('Question post successful');
        revealModal(false);
      })
      .catch((err) => {
        console.log('Error in posting question: ', err);
      });
  }

  if (product) {
    return (
      <Modal
        show={show}
        onClose={() => revealModal(false)}
        title={`Ask About ${product.name}`}
        children={(
          <form
            className="modalInput"
            onSubmit={(e) => {
              e.preventDefault();
              postQuestion();
            }}
          >
            <textarea className="modalText" placeholder="Write Your Question Here" onChange={(e) => setQEntry(e.target.value)} required minLength="1" maxLength="1000" />
            <input className="modalUserInfo" placeholder="Nickname" onChange={(e) => setNameEntry(e.target.value)} required minLength="1" maxLength="60" />
            <input type="email" className="modalEmail" placeholder="Email" onChange={(e) => setEmailEntry(e.target.value)} required minLength="1" maxLength="60" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }
}
