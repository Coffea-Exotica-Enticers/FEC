import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Retrieves an array of related products on render
  // (Also rerenders when user navigates to a different product)
  useEffect(() => {
    if (product) {
      axios.get(`/products/${product.id}/related`)
        .then(({ data }) => {
          const relatedIds = [];
          const relatedArr = [];
          data.forEach((prod) => {
            if (!relatedIds.includes(prod.id)) {
              relatedIds.push(prod.id);
              relatedArr.push(prod);
            }
          });
          setRelatedProducts(relatedArr);
        })
        .catch((err) => console.error('Error retrieving item data', err));
    }
  }, [product]);

  return (
    <div className="rp-list">
      <h2>Related Products List</h2>
      <div className="rp-container">
        {relatedProducts.length
          ? relatedProducts.map((item) =>
            <RelatedProductCard key={item.id} item={item} product={product} />)
          : 'Loading...'}
      </div>
    </div>
  );
}

export default RelatedProductsList;
