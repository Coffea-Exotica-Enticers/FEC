import React, { useState } from 'react';
import Modal from '../../shared/Modal';

export default function AddAnsModal({ show, setShow, id }) {
  const [ansEntry, setAnsEntry] = useState('');
  const [nameEntry, setNameEntry] = useState('');
  const [emailEntry, setEmailEntry] = useState('');

  function postAnswer() {
    axios.post('/qa/answers', {
      id: id,
      answer: ansEntry,
      user_name: nameEntry,
      email: emailEntry
    })
    .then(() => {
      console.log('Answer post successful');
      setShow(false);
    })
    .catch((err) => {
      console.log('Error in posting answer: ', err);
    })
  }

  if (id) {
    return (
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title={"Submit Your Answer"}
        children={
          <>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShow(false);
              postAnswer();
            }}
            >
              <textarea placeholder="Write Your Answer Here..." onChange={(e) => setAnsEntry(e.target.value)}></textarea>
              <input placeholder="Nickname..." onChange={(e) => setNameEntry(e.target.value)}></input>
              <input placeholder="Email..." onChange={(e) => setEmailEntry(e.target.value)}></input>
              <div>PUT UPLOAD PHOTOS HERE LATER!</div>
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