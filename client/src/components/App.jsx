import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RelatedProductsList from './related-products/RelatedProductsList';

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((products) => setProduct(products.data[0]))
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <RelatedProductsList product={product} />
      <p>Hello, world!</p>
    </div>
  );
}
