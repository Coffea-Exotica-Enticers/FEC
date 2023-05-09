import axios from 'axios';
import React from 'react';
import Product from './productDetails/Product';

const { useState, useEffect } = React;

// note: if App parent re-renders child components will render too
export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((products) => {
        console.log('Product after axios', products.data);
        setProduct(products.data[0]);
      })
      .catch((err) => console.log('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <Product product={product} setProduct={setProduct} />
    </div>
  );
}
