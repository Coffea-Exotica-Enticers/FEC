import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAModule from './qa/QAModule';
import RelatedProductsList from './related-products/RelatedProductsList';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';
import StarTemplate from './shared/StarTemplate';

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((products) => {
        setProduct(products.data[0]);
        return products.data[0];
      })
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <StarTemplate />
      <QAModule product={product} />
      {/* <RelatedProductsList product={product} /> */}
      {/* <RatingsAndReviews product={product} /> */}
    </div>
  );
}
