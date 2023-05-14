import axios from 'axios';
import React from 'react';
import RateProduct from './RateProduct';
import Recommend from './Recommend';
import RateCharacteristic from './RateCharacteristic';
import SummaryInput from './SummaryInput';
import BodyInput from './BodyInput';
import PhotoUpload from './PhotoUpload';

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
  const relevantChars = Object.keys(characteristics);
  const rateChar = (charId, value) => {
    setCharRatings({ ...charRatings, [charId]: Number(value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      rating > 0
      && recommend !== null
      && Object.keys(charRatings).length === relevantChars.length
      && body.length >= 50
      && name.length > 0
      && email.length > 0) {
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
    } else {
      // TODO: Show error text when mandatory fields are not filled properly
      // console.log('OH NO');
      // console.log('RATING ', rating);
      // console.log('RECOMMEND ', recommend);
      // console.log('CHARACTERISTICS ', charRatings);
      // console.log('BODY ', body);
      // console.log('NAME ', name);
      // console.log('EMAIL ', email);
    }
  };

  return (
    <div className="write-review-modal">
      <div className="write-review-modal-content">
        <div className="write-review-modal-header">
          <h1>Write a Review</h1>
          <button type="button" className="close-modal" onClick={() => setShowModal(false)}>&times;</button>
        </div>
        <div className="write-review-modal-body">
          <form onSubmit={handleSubmit}>
            <RateProduct rating={rating} setRating={setRating} />
            <Recommend setRecommend={setRecommend} />
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
            <br />
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
        </div>
      </div>
    </div>
  );
}
