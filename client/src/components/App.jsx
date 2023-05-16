import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Product from './productDetails/Product';
import QAModule from './qa/QAModule';
import RelatedProductsList from './related-products/related/RelatedProductsList';
import ClosetList from './related-products/outfit/ClosetList';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';
import StarTemplate from './shared/StarTemplate';

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

  function updateProduct(newProd) {
    setProduct(newProd);
  }

  return (
    <div id="App">
      <StarTemplate />
      <Product product={product} setProduct={setProduct} />
      <QAModule product={product} />
      <RelatedProductsList product={product} updateProduct={updateProduct} />
      <ClosetList product={product} />
      <RatingsAndReviews product={product} />
    </div>
  );
}
