import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAModule from './qa/QAModule';
import RelatedProductsList from './related-products/related/RelatedProductsList';
import RelatedProductCard from './related-products/related/RelatedProductCard';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';
import StarTemplate from './shared/StarTemplate';
import Product from './productDetails/Product';

// note: if App parent re-renders child components will render too
export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products/40344')
      .then((products) => {
        setProduct(products.data);
        return products.data;
      })
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <Product product={product} setProduct={setProduct} />
      <StarTemplate />
      <QAModule product={product} />
      <RelatedProductsList product={product} />
      <RatingsAndReviews product={product} />
    </div>
  );
}
