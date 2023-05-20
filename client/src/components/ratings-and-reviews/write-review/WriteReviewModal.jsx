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
      if (photos.length) {
        const promises = photos.map((photoFile) => {
          const form = new FormData();
          form.append('file', photoFile);
          return axios.post('https://api.cloudinary.com/v1_1/dlbnwlpoq/image/upload', form, {
            params: {
              upload_preset: 'ulaqsdpl',
            },
          })
            .catch((err) => {
              console.error('PROBLEM UPLOADING PHOTOS TO CLOUDINARY', err);
              return err;
            });
        });

        Promise.all(promises)
          .then((results) => {
            const photoURLs = results.map(({ data }) => data.secure_url);
            newReview.photos = photoURLs;
            return axios.post('/reviews', newReview);
          })
          .then(() => setShowModal(false))
          .catch((err) => console.error('ERROR SUBMITTING REVIEW', err));
      } else {
        axios.post('/reviews', newReview)
          .then(() => setShowModal(false))
          .catch((err) => console.error('ERROR SUBMITTING REVIEW', err));
      }
    }
  };

  return (
    <div className="write-review-modal">
      <div className="write-review-modal-content">
        <button type="button" className="close-write-review-modal" aria-label="close modal" onClick={() => setShowModal(false)}>
          &times;
        </button>
        <div className="title-container">
          <div className="title">Write Your Review</div>
          <div className="subtitle">
            About the
            <span className="product-name">{` ${product.name}`}</span>
          </div>
        </div>

        <div className="write-review-modal-body">
          <div className="mandatory-fields-notice">Mandatory fields are marked with an asterisk (*)</div>
          <form onSubmit={handleSubmit}>
            <RateProduct rating={rating} setRating={setRating} />
            <Recommend setRecommend={setRecommend} />
            <div className="write-review-name-input">
              <label htmlFor="name">
                Name:*
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
                Email:*
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
            <SummaryInput setSummary={setSummary} />
            <BodyInput setBody={setBody} />
            <PhotoUpload photos={photos} setPhotos={setPhotos} />
            <div className="rate-characteristics">
              <div className="label">Rate Characteristics*</div>
              {relevantChars.map((char) => (
                <RateCharacteristic
                  key={char}
                  charName={char}
                  charId={characteristics[char].id}
                  rateChar={rateChar}
                />
              ))}
            </div>
            <button type="submit" id="write-review-submit" aria-label="submit">Submit Review</button>
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
