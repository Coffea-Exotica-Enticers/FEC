/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelated = () => {
    axios.get(`/products/${product.id}/related`)
      .then((results) => setRelatedProducts(results))
      .catch((err) => console.error('Error retrieving item data', err));
  };

  useEffect(() => {
    if (product) {
      getRelated();
    }
  }, [product]);

  return (
    <div>
      <h1>Related Products List</h1>
      <div className="rp-list">
        {relatedProducts.length ? relatedProducts.map((item) => <RelatedProductCard key={item.id} item={item} />) : <div>No available items</div>}
      </div>
    </div>
  );
}

export default RelatedProductsList;
