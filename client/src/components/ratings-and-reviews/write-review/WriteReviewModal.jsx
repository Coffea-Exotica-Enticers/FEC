import axios from 'axios';
import React from 'react';
import RateProduct from './RateProduct';
import Recommend from './Recommend';
import RateCharacteristic from './RateCharacteristic';
import SummaryInput from './SummaryInput';
import BodyInput from './BodyInput';
import PhotoUpload from './PhotoUpload';
import DisplayErrors from './DisplayErrors';

const { useState } = React;

export default function WriteReviewModal({ product, characteristics, setShowModal }) {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [charRatings, setCharRatings] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const relevantChars = Object.keys(characteristics);
  const rateChar = (charId, value) => {
    setCharRatings({ ...charRatings, [charId]: Number(value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorCount = 0;

    if (rating === 0) {
      errorCount += 1;
      setShowErrors(true);
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      errorCount += 1;
      setShowErrors(true);
    }

    if (errorCount === 0) {
      const newReview = {
        product_id: product.id,
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos,
        characteristics: charRatings,
      };
      axios.post('/reviews', newReview)
        .then((results) => {
          console.log('SUCCESS', results);
          setShowModal(false);
        })
        .catch((err) => {
          console.error('ERROR SUBMITTING REVIEW', err);
        });
    }
  };

  return (
    <div className="write-review-modal">
      <div className="write-review-modal-content">
        <div className="write-review-modal-header">
          <div className="title-container">
            <div className="title">Write Your Review</div>
            <div className="subtitle">
              About the
              <span className="product-name">{` ${product.name}`}</span>
            </div>
          </div>
          <button type="button" className="close-write-review-modal" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>

        <div className="write-review-modal-body">
          <form onSubmit={handleSubmit}>
            <RateProduct rating={rating} setRating={setRating} />
            <Recommend setRecommend={setRecommend} />
            <div className="write-review-name-input">
              <label htmlFor="name">
                Name:
                <br />
                <input
                  type="text"
                  maxLength="60"
                  id="name"
                  placeholder="Example: jackson11!"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <div className="disclaimer">
                For privacy reasons, do not use your full name or email address.
              </div>
            </div>
            <div className="write-review-email-input">
              <label htmlFor="email">
                Email:
                <br />
                <input
                  type="email"
                  maxLength="60"
                  id="email"
                  placeholder="Example: jackson11@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <div className="disclaimer">
                For authentication reasons, you will not be emailed.
              </div>
            </div>
            <PhotoUpload photos={photos} setPhotos={setPhotos} />
            <SummaryInput setSummary={setSummary} />
            <BodyInput setBody={setBody} />
            <div className="rate-characteristics">
              {relevantChars.map((char) => (
                <RateCharacteristic
                  charName={char}
                  charId={characteristics[char].id}
                  rateChar={rateChar}
                />
              ))}
            </div>
            <button type="submit" id="write-review-submit">Submit Review</button>
          </form>
          {
            showErrors
              ? (
                <DisplayErrors
                  rating={rating}
                  email={email}
                />
              )
              : null
          }
        </div>
      </div>
    </div>
  );
}
