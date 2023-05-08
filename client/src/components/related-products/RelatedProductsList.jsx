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
    <div>
      <h1>Related Products List</h1>
      <div className="rp-list" style={{ display: 'flex', flexDirection: 'row' }}>
        {
          relatedProducts.length
            ? relatedProducts.map((item) => <RelatedProductCard key={item.id} item={item} />)
            : 'Loading...'
        }
      </div>
    </div>
  );
}

export default RelatedProductsList;
