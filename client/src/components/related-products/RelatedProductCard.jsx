import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';

function RelatedProductCard({ item }) {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  const styles = axios.get(`./products/${item.id}/styles`);
  const starRating = axios.get(`./reviews/meta/${item.id}`);

  useEffect(() => {
    axios.all([styles, starRating]).then(axios.spread((prod, star) => {
      console.log('prod: ', prod.data, 'star: ', star);
      setProduct(prod.data);
      setRating(star.data);
    }));
  }, []);

  // useEffect(() => {
  //   axios.get(`./products/${item.id}/styles`)
  //     .then(({ data }) => {
  //       console.log('DATA', data)
  //       setProduct(data)})
  //     .catch((err) => console.error('Error retrieving item style', err));
  // }, []);

  console.log('item', item)

  return (
    <div className="rp-card">
      <button type="button">star</button>
      <div className="preview">
        product preview
      </div>

      <div className="category">
        {item.category}
      </div>

      <div className="description">
        <p><em>{item.name}</em></p>
        <p>
          Price:
          {item.default_price}
        </p>
        <p>
          Product Description:
          {item.description}
        </p>
      </div>

    </div>
  );
}

export default RelatedProductCard;
