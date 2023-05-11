import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';
import StarRatings from '../../shared/StarRatings';

function RelatedProductCard({ item, product }) {
  const [productStyles, setProductStyles] = useState({});
  const [rating, setRating] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [defaultImg, setDefaultImg] = useState([]);
  const [modalWindow, setModalWindow] = useState(false);
  const defaultImgURL = "https://www.freeiconspng.com/uploads/no-image-icon-15.png";

  // ======================== HELPER FUNCTIONS ====================================
  // Function to find the average star rating
  function getAverageRating(ratings) {
    const starRatings = Object.values(ratings);
    let sumOfRatings = 0;
    let totalNumOfRatings = 0;

    for (let i = 0; i < starRatings.length; i += 1) {
      sumOfRatings += starRatings[i] * i + 1;
      totalNumOfRatings += Number(starRatings[i]);
    }
    const averageRating = sumOfRatings / totalNumOfRatings;
    return averageRating.toFixed(1);
  }

  // Function to set the default image
  function setImages(prodStyles) {
    const styles = prodStyles.results;
    const defaultImgs = [];

    for (let i = 0; i < styles.length; i += 1) {
      if (styles[i]['default?']) {
        styles[i].photos.forEach((img) => {
          defaultImgs.push(img.thumbnail_url);
        });
      }
    }
    setDefaultImg(defaultImgs);
  }

  function modalToggle() {
    setModalWindow(!modalWindow);
  }

  // ========================= GET REQUEST ON RENDER ==============================
  // Define multiple endpoints
  const styles = axios.get(`/products/${item.id}/styles`);
  const starRating = axios.get('/reviews/meta', { params: { product_id: item.id } });

  // Sends a GET request for item styles and star rating on render
  useEffect(() => {
    axios.all([styles, starRating]).then(axios.spread((prod, star) => {
      setImages(prod.data);
      setProductStyles(prod.data);
      setRating(getAverageRating(star.data));
    }))
      .catch((err) => console.error('There was an error retrieving styles or rating data: ', err));
  }, []);

  console.log('product styles', productStyles)

  return (
    <div>
      {modalWindow && (
        <ComparisonModal modalToggle={modalToggle} item={item} product={product} />
      )}

      <div className="rp-card">

        <div className="rp-modal">
            <button type="button" onClick={() => modalToggle()}>star</button>
        </div>

        <div className="rp-preview">
          {defaultImg.length ? <img src={defaultImg[0] || defaultImgURL} alt="default"/> : <img src={defaultImgURL} alt="No Img Found" />}
        </div>

        <div className="rp-category">
          {item.category}
        </div>

        <div className="rp-description" onClick={() => setShowDescription(!showDescription)}>
          <div className="rp-desc-head">
            <p><strong>{item.name}</strong></p>
            <p>
              Price:
              {item.default_price}
            </p>
          </div>
          {showDescription
            ? (<div className="rp-desc-content">Product Description: {item.description}</div>)
            : <div /> }
        </div>

        <div className="rp-rating">
          <div className="rp-star">Star Rating: <StarRatings rating={rating} /> </div>
        </div>

      </div>
    </div>
  );
}

export default RelatedProductCard;
