import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';

function RelatedProductsList({ product, updateProduct }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [index, setIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const listLength = relatedProducts.length;
  const styles = {
    transform: `translate(${width}px)`,
  };

  // Retrieves an array of related products on render
  // (Also rerenders when user navigates to a different product)
  useEffect(() => {
    setIndex(1);
    setWidth(0);
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

  function moveRight() {
    if (index <= listLength - 4) {
      setIndex(index + 1);
      setWidth(-((index) * 300));
    }
  }
  function moveLeft() {
    if (index > 1) {
      setIndex(index - 1);
      setWidth((width + 300));
    }
  }

  return (
    <div className="related-products">
      {index !== 1 && (
        <div className="rp-Lbtn" onClick={() => moveLeft()}>
          <button type="button">&#5176;</button>
        </div>
      )}
      <div className="rp-list">
        <h2>Related Products List</h2>
        <div className="rp-container" style={styles}>
          {listLength
            ? relatedProducts.map((item) =>
              <RelatedProductCard key={item.id} item={item} product={product} updateProduct={updateProduct}/>)
            : 'Loading...'}
        </div>
      </div>

      {index <= listLength - 4 && listLength >= 5 && (
        <div className="rp-Rbtn" onClick={() => moveRight()}>
          <button type="button">&#5171;</button>
        </div>
      )}
    </div>
  );
}

export default RelatedProductsList;
