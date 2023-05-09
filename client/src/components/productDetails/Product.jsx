import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import AddToCart from './AddToCart';
import Style from './Style';

function Product({ product }) {
  const [styleList, setStyleList] = useState(null);
  const [productObj, setProductObj] = useState(null);

  // trying for one product for now
  function getSpecificProduct() {
    if (product) {
      axios.get(`/products/${product.id}`, {
      })
        .then(({ data }) => {
          console.log('Product info', data);
          setProductObj(data);
        })
        .catch((err) => {
          console.log('There was a problem in the server retrieving specific product data: ', err);
        });
    }
  }

  function getProductStyles() {
    if (product) {
      axios.get(`/products/${product.id}/styles`, {
      })
        .then(({ data }) => {
          console.log('Product Styles available', data.results);
          setStyleList(data.results);
        })
        .catch((err) => {
          console.log('There was a problem in the server retrieving specific product styles: ', err);
        });
    }
  }

  useEffect(() => {
    getSpecificProduct();
    getProductStyles();
  }, [product]);

  return product && styleList ? (
    <div className="ProductPage">
      <div className="TopContent">
        <Image styleList={styleList} />
        <div className="RightPane">
          <div className="RightColumn-ProductDetails">
            <div className="titles-container">
              <div className="product-details">
                <h1 className="product-Name-Header">
                  <span className="product-name">
                    {product.name}
                  </span>
                </h1>
                <div className="product-features">
                  {productObj ? (
                    <p>
                      {productObj.features[0].feature}
                      {productObj.features[0].value}
                    </p>
                  ) : (<p>Feature not available</p>)}
                </div>
                <span className="product-category">
                  {product.category}
                </span>
                <p className="product-description">
                  {product.description}
                </p>
                <p>{product.slogan}</p>
                <span className="product-price">
                  {styleList[0].original_price}
                </span>
              </div>
            </div>
            <Style styleList={styleList} />
          </div>
        </div>
      </div>
      <AddToCart setStyleList={setStyleList} styleList={styleList} />
    </div>
  )
    : <div className="product-list"> Product is loading</div>;
}
export default Product;
