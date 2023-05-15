import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../shared/Modal';

export default function AddAnsModal({ show, setShow, id }) {
  const [ansEntry, setAnsEntry] = useState('');
  const [nameEntry, setNameEntry] = useState('');
  const [emailEntry, setEmailEntry] = useState('');
  const [imageURL, setImageURL] = useState('');

  function postAnswer() {
    axios.post('/qa/answers', {
      id,
      answer: ansEntry,
      user_name: nameEntry,
      email: emailEntry,
    })
      .then(() => {
        console.log('Answer post successful');
        setShow(false);
      })
      .catch((err) => {
        console.log('Error in posting answer: ', err);
      });
  }

  if (id) {
    return (
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title="Submit Your Answer"
        // eslint-disable-next-line react/no-children-prop
        children={(
          <form
            className="modalInput"
            onSubmit={(e) => {
              e.preventDefault();
              setShow(false);
              postAnswer();
            }}
          >
            <textarea className="modalText" placeholder="Write Your Answer Here..." onChange={(e) => setAnsEntry(e.target.value)} required minLength="1" maxLength="1000" />
            <input className="modalUserInfo" placeholder="Nickname..." onChange={(e) => setNameEntry(e.target.value)} required minLength="1" maxLength="60" />
            <input type="email" className="modalUserInfo" placeholder="Email..." onChange={(e) => setEmailEntry(e.target.value)} required minLength="1" maxLength="60" />
            {/* <form onSubmit={(e) => {
              e.preventDefault();
            }}
            >
              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files);
                  console.log(URL.createObjectURL(e.target.files));
                }}
              />
              <button type="submit">Submit Image</button>
            </form> */}
            <button type="submit">Submit</button>
          </form>
          )}
      />
    );
  }
  return (
    <div>Product Has Not Loaded Yet</div>
  );
}
