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
      setRating(getAverageRating(star.data.ratings));
    }))
      .catch((err) => console.error('There was an error retrieving styles or rating data: ', err));
  }, []);

  // console.log('product styles', productStyles)

  return (
    <div>
      {modalWindow && (
        <ComparisonModal modalToggle={modalToggle} item={item} product={product} />
      )}

      <div className="rp-card">

        <div className="rp-modal">
          <button type="button" onClick={() => modalToggle()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="#ABABAB" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
          </button>
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
          <div className="rp-star">Star Rating: <StarRatings rating={rating} /></div>
        </div>

      </div>
    </div>
  );
}

export default RelatedProductCard;
