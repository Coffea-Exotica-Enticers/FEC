import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (product) {
      axios.get(`/products/${product.id}/related`)
        .then(({ data }) => setRelatedProducts(data))
        .catch((err) => console.error('Error retrieving item data', err));
    }
  }, [product]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: 26 }}>
      <h2>Related Products List</h2>
      <div className="rp-list" style={{ display: 'flex', overflowX: 'hidden', scrollBehavior: 'smooth' }}>
        {relatedProducts.length
          ? relatedProducts.map((item) => <RelatedProductCard key={item.id} item={item} />)
          : 'Loading...'}
      </div>
    </div>
  );
}

export default RelatedProductsList;
