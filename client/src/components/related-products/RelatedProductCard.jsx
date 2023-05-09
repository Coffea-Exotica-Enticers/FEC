import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';

function RelatedProductCard({ item }) {
  const [productStyles, setProductStyles] = useState({});
  const [rating, setRating] = useState(null);

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

  // Define multiple endpoints
  const styles = axios.get(`/products/${item.id}/styles`);
  const starRating = axios.get('/reviews/meta', { params: { product_id: item.id } });

  // Sends a GET request for item styles and star rating on render
  useEffect(() => {
    axios.all([styles, starRating]).then(axios.spread((prod, star) => {
      setProductStyles(prod.data);
      setRating(getAverageRating(star.data));
    }))
      .catch((err) => console.error('There was an error retrieving styles or rating data: ', err));
  }, []);

  return (
    <div className="rp-card" style={{ display: 'column', flexDirection: 'row' }}>
      <button type="button">star</button>
      <div className="preview">
        product preview
      </div>

      <div className="category">
        {item.category}
      </div>

      <div className="description">
        <p><em>{item.name}</em></p>
        <p>Price: {item.default_price}</p>
        <p>Product Description: {item.description}</p>
      </div>

      <div className="rating">
        <p>Star Rating: {rating}</p>
      </div>

    </div>
  );
}

export default RelatedProductCard;
