import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from './RelatedProductCard';
import ComparisonModal from './ComparisonModal';

function RelatedProductsList({ product, updateProduct }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [compareItem, setCompareItem] = useState(false);
  const [showModal, setShowModal] = useState(null);
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

  function slideRight() {
    if (index <= listLength - 2) {
      setIndex(index + 1);
      setWidth(-((index) * 410));
    }
  }
  function slideLeft() {
    if (index > 1) {
      setIndex(index - 1);
      setWidth((width + 410));
    }
  }
  const closeModal = (() => setCompareItem(false));

  const openModal = ((relatedItem, overviewProd) => {
    setCompareItem(!compareItem);
    setShowModal(<ComparisonModal
      closeModal={closeModal}
      item={relatedItem}
      product={overviewProd}
    />);
  });

  return (
    <div className="rp-all">
      {compareItem && (showModal)}
      <div className="related-products" data-testid="rp-component">
        {index !== 1 && (
          <div className="rp-Lbtn">
            <button type="button" onClick={() => slideLeft()}>&#5176;</button>
          </div>
        )}
        <div className="rp-list">
          <h2>Related Products List</h2>
          <div className="rp-container" style={styles}>
            {listLength ? relatedProducts.map((item) => (
              <RelatedProductCard
                key={item.id}
                openModal={openModal}
                closeModal={closeModal}
                item={item}
                product={product}
                updateProduct={updateProduct}
              />
            ))
              : 'Loading...'}
          </div>
        </div>
        {index <= listLength - 2 && listLength >= 3 && (
          <div className="rp-Rbtn" data-testid="rpl-right">
            <button type="button" onClick={() => slideRight()}>&#5171;</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RelatedProductsList;
