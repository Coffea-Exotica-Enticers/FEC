import axios from 'axios';
import React from 'react';

import Product from './productDetails/Product';

const { useState, useEffect } = React;

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((products) => setProduct(products.data[0]))
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  // useEffect(() => {
  //   axios.get(`${process.env.ATELIER_API}/products`, {
  //   })
  //     .then((products) => {
  //       setProduct(products.data[0]);
  //     });
  // }, []);

  return (
    <div id="App">
      <Product product={product} />
    </div>
  );
}
