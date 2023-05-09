import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import AddToCart from './AddToCart';

function Product({ product }) {
  const [styleList, setStyleList] = useState(null);


  // trying for one product now
  function getSpecificProduct() {
    if (product) {
      axios.get(`/products/${product.id}`, {
      })
        .then(({ data }) => console.log('Product info', data))
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

  console.log('styleList inside Product comp', styleList);

  function createImageDetails() {
    if (styleList) {
      styleList.forEach((data) => {
        setImages(data.photos);
        console.log('Images', data.photos);
      });
    }
  }

  // console.log('Iamges', images);
  console.log('styleList', styleList);

  useEffect(() => {
    getSpecificProduct();
    getProductStyles();
    createImageDetails();
  }, [product]);

  return product && styleList ? (
    <>
      <div>
        <div>
          <h2> Product name</h2>
          {product.name}
        </div>
        <div>
          <div>
            <h2> Category</h2>
            {product.category}
          </div>
        </div>
        <div>
          <div>
            <h2> Description</h2>
          </div>
          {product.description}
        </div>
        <div>
          <div>
            <h2> Slogan </h2>
          </div>
          {product.slogan}
        </div>
        <div>
          <h2> Product Default price</h2>
          {product.default_price}
        </div>
        <div>
          <h2> Product Features</h2>
          {product.features ? (
            <div>
              <h2> Feature:</h2>
              {product.features[0].feature}
              <h2> Value: </h2>
              {product.features[0].value}
            </div>
          ) : (<p>Feature not available</p>)}
        </div>
      </div>
      <div>
        <i>
          <h2>Product Styles</h2>
        </i>
        {styleList ? (
          <div>
            <h2> Name:</h2>
            {styleList[0].name}
            <h2> Price: </h2>
            {styleList[0].original_price}
          </div>
        ) : (<h1>Style not available</h1>)}
      </div>
      <Image styleList={styleList} />
      <AddToCart setStyleList={setStyleList} styleList={styleList} />
    </>
  )
    : <div className="product-list"> Product is loading</div>;
}
export default Product;
