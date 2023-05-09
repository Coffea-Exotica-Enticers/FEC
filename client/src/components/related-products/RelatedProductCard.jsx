import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';
import StarRatings from '../shared/StarRatings';

function RelatedProductCard({ item }) {
  const [productStyles, setProductStyles] = useState({});
  const [rating, setRating] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [defaultImg, setDefaultImg] = useState([]);
  // const [thumbnails, setThumbnails] = useState(null);

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

// console.log('product styles', productStyles)
// console.log('items', item)

  return (
    <div className="rp-card" style={{ minWidth: 300, maxWidth: 300, minHeight: 300, margin: 10, border: 'solid', borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button type="button">star</button>
      </div>

      <div className="preview" style={{ display: 'flex', justifyContent: 'space-around', margin: 10 }}>
        {defaultImg.length ? <img src={defaultImg[0]} alt="default" style={{ minWidth: 260, maxWidth: 260, minHeight: 200, maxHeight: 200 }} /> : <img src="https://www.freeiconspng.com/uploads/no-image-icon-15.png" alt="No Img Found" />}
      </div>

      <div className="category" style={{ display: 'flex', marginLeft: 20 }}>
        {item.category}
      </div>

      <div className="description" onClick={() => setShowDescription(!showDescription)} style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
          <p><strong>{item.name}</strong></p>
          <p>
            Price:
            {item.default_price}
          </p>
        </div>
        {showDescription
          ? (<div style={{ display: 'flex', marginLeft: 20, marginRight: 20, marginBottom: 15 }}>Product Description: {item.description}</div>)
          : <div /> }
      </div>

      <div className="rating" style={{ display: 'flex', marginLeft: 21 }}>
        <div style={{ display: 'flex' }}>Star Rating: <StarRatings rating={rating} /> </div>
      </div>

    </div>
  );
}

export default RelatedProductCard;
