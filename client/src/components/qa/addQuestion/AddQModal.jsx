import React, { useState } from 'react';
import Modal from 'react-modal';

export default function AddQModal({ show, setShow }) {
  const [qEntry, setQEntry] = useState('');
  const [nameEntry, setNameEntry] = useState('');
  const [emailEntry, setEmailEntry] = useState('');

  return (
    <Modal isOpen={show} onRequestClose={() => setShow(false)}>
      <h1>Ask Your Question</h1>
      <button onClick={() => setShow(false)}>Close</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        setShow(false);
      }}
      >
        <textarea placeholder="Write Your Question Here..." onChange={(e) => setQEntry(e.target.value)}></textarea>
        <input placeholder="Nickname..." onChange={(e) => setNameEntry(e.target.value)}></input>
        <input placeholder="Email..." onChange={(e) => setEmailEntry(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  )
}