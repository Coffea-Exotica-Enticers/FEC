import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from '../../shared/StarRatings';
import ThumbnailCarousel from './ThumbnailCarousel';

function RelatedProductCard({
  item, product, removeOutfit, updateProduct, openModal,
}) {
  const [rating, setRating] = useState(null);
  const [numOfRatings, setNumOfRatings] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [defaultImg, setDefaultImg] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [salePrice, setSalePrice] = useState(null);
  const defaultImgURL = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

  // ================= HELPER FUNCTIONS =====================
  // Function to find the average star rating
  function getAverageRating(ratings) {
    const starRatings = Object.values(ratings);
    let sumOfRatings = 0;
    let totalNumOfRatings = 0;
    for (let i = 0; i < starRatings.length; i += 1) {
      sumOfRatings += starRatings[i] * i + 1;
      totalNumOfRatings += Number(starRatings[i]);
    }
    setNumOfRatings(totalNumOfRatings);
    const averageRating = sumOfRatings / totalNumOfRatings;
    return averageRating.toFixed(1);
  }

  // Function to set the default image, thumbnails, and saleprice
  function findDefault(prodStyles) {
    const styles = prodStyles.results;
    const thumbnailImgs = [];
    for (let i = 0; i < styles.length; i += 1) {
      thumbnailImgs.push(styles[i].photos[0].thumbnail_url);
    }
    setSalePrice(styles[0].sale_price);
    setDefaultImg(thumbnailImgs[0]);
    setThumbnails(thumbnailImgs);
  }
  // function findDefault(prodStyles) {
  //   const styles = prodStyles.results;
  //   const defaultImage = [];
  //   const thumbnailImgs = [];
  //   for (let i = 0; i < styles.length; i += 1) {
  //     if (styles[i]['default?']) {
  //       setSalePrice(styles[i].sale_price);
  //       styles[i].photos.forEach((img) => {
  //         defaultImage.push(img.thumbnail_url);
  //       });
  //     } else if (thumbnailImgs !== null) {
  //       thumbnailImgs.push(styles[i].photos[0].thumbnail_url);
  //     }
  //   }
  //   setDefaultImg(defaultImage[0]);
  //   setThumbnails([defaultImage[0], ...thumbnailImgs]);
  // }

  function modalToggle({ relatedItem, overviewProd }) {
    openModal(relatedItem, overviewProd);
  }
  const changeDefaultImg = ((url) => setDefaultImg(url));

  // =============== GET REQUEST ON RENDER ==================

  // Sends a GET request for item styles and star rating on render
  useEffect(() => {
    const styles = axios.get(`/products/${item.id}/styles`);
    const starRating = axios.get('/reviews/meta', { params: { product_id: item.id } });

    axios.all([styles, starRating]).then(axios.spread((prod, star) => {
      findDefault(prod.data);
      setRating(getAverageRating(star.data.ratings));
    }))
      .catch((err) => console.error('There was an error retrieving styles or rating data: ', err));
  }, [item.id]);

  return (
    <div data-testid="test-card" className="rp-cardcontainer">
      <div className="rp-card">
        <div className="rp-preview" data-testid="rpc-preview" onMouseEnter={() => setShowThumbnails(true)} onMouseLeave={() => setShowThumbnails(false)}>
          {product ? (
            <div className="rp-modal" data-testid="modal-btn">
              <button type="button" aria-label="comparison-modal" onClick={() => modalToggle({ item, product })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="#7c7b5d" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="closet-close">
              <button type="button" aria-label="remove-outfit" onClick={() => removeOutfit(item.id)}>&times;</button>
            </div>
          )}
          <div className="rpcthumbnail-container">
            <div>
              {defaultImg ? <img src={defaultImg} alt="default" /> : <img src={defaultImgURL} alt="No Img Found" />}
            </div>
            {showThumbnails && (
            <ThumbnailCarousel changeDefaultImg={changeDefaultImg} thumbnails={thumbnails} />
            )}
          </div>
        </div>

        <div className="rp-category" onClick={() => setShowDescription(!showDescription)} aria-hidden="true" onKeyPress={() => setShowDescription(!showDescription)}>
          {item.category}
        </div>

        <div className="rp-description">
          <div className="rp-desc-head">
            <p className="rp-name" onClick={() => updateProduct(item)} onKeyPress={() => updateProduct(item)} aria-hidden="true">{item.name}</p>
            {salePrice ? (
              <div className="rp-price">
                <p className="rp-defaultPrice">
                  Price:&nbsp;$
                  {item.default_price}
                </p>
                <p className="rp-salePrice">
                  Sale:&nbsp;$
                  {salePrice}
                </p>
              </div>
            ) : (
              <p>
                Price:&nbsp;$
                {item.default_price}
              </p>
            )}
          </div>
          {showDescription ? (
            <div className="rp-desc-content">
              <strong>Product Description:</strong>
              &nbsp;
              {item.description}
            </div>
          ) : <div />}
        </div>

        <div className="rp-rating">
          <div className="rp-star">
            Star Rating:
            &nbsp;
            <StarRatings rating={rating} />
            &nbsp;
            <p>
              (
              {numOfRatings}
              )
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RelatedProductCard;
