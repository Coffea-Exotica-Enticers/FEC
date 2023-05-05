import axios from 'axios';
import React from 'react';

import Product from './productDetails/Product';

const { useState, useEffect } = React;

export default function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((products) => {
        console.log('Axios result', products.data);
        setProduct(products.data[0]);
      });
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
