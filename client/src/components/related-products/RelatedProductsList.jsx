import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelated = () => {
    axios.get(`/products/${product.id}/related`)
      .then((results) => setRelatedProducts(results));
  };

  if (product) {
    getRelated();
  }

  return (
    <div>
      <h1>Related Products List</h1>
    </div>
  );
}

export default RelatedProductsList;
