import React, { useState } from 'react';
import axios from 'axios';

function Product({ product }) {
  // make a get request later to get price via styles endpoint

  // use ref
  console.log('Product', product);
  console.log('Product id', product.id);

  function getStyleDetails() {
    axios.get(`/products/${product.id}/styles`, {
    })
      .then((results) => {
        console.log('Results from style', results);
      });
  }

  if (product.id !== undefined) {
    getStyleDetails();
  }

  return (
    <div>
      Product name:
      {' '}
      {product.name}
      <div>
        Category:
        {' '}
        {product.category}
      </div>
      <div>
        Description:
        {' '}
        {product.description}
      </div>
      <div>
        Slogan:
        {' '}
        {product.slogan}
      </div>
    </div>

  );
}

export default Product;
