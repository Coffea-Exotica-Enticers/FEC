import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({product}) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then(({ data }) => setRelatedProducts(data))
      .catch((err) => console.error('There was a problem retrieving related product data: ', err));
  }, []);

  return (
    <div>
      <h1>Related Products List</h1>
    </div>
  );
}

export default RelatedProductsList;
