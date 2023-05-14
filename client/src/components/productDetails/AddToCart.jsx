/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import React, {
  useContext, useState, useEffect, useRef,
} from 'react';
import * as _ from 'underscore';
import axios from 'axios';
import { ProductContext } from './Product';

// eslint-disable-next-line import/no-cycle

export default function Cart() {
  const { selectedStyle } = useContext(ProductContext);
  const [isInStock, setIsInStock] = useState(false);
  // const [skus, setSkus] = useState(null);
  const [skuID, setSkuID] = useState('');
  // const [sizes, setSizes] = useState([]);
  const [sizeShow, setSizeShow] = useState(false);
  const [sizeTitle, setSizeTitle] = useState(true);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quantityShow, setQuantityShow] = useState(false);

  //  /cart
  /* "skus": {
                "1394769": {
                    "quantity": 8,
                    "size": "XS"
                },
                "1394770": {
                    "quantity": 16,
                    "size": "S"
                },
                "1394771": {
                    "quantity": 17,
                    "size": "M"
                },
                "1394772": {
                    "quantity": 10,
                    "size": "L"
                },
 * [
    {
        "sku_id": 1,
        "count": 2
    },
    {
        "sku_id": 3,
        "count": 1
    }
    ....
]
 */

  const limit = useRef(0);
  console.log('quantity', quantity);

  const skus = Object.entries(selectedStyle.skus)
    .map((item) => ({ sku_id: item[0], quantity: item[1].quantity, size: item[1].size }));

  const res = function getQuantityLimit() {
    // setSizes([]);
    skus.forEach((sku) => {
      if (sku.sku_id === skuID) {
        setQuantity(sku.quantity);
      }
    });
  };

  // console.log('qqq', res());
  console.log('skuID', skuID);
  console.log('skus', skus);
  // console.log('ress', res[0]);
  useEffect(() => {
    // setSizes([]);
    skus.forEach((sku) => {
      if (sku.quantity > 0) {
        setIsInStock(true);
      }
    });

    console.log('skus', skus);
  }, [selectedStyle.sku_id]);

  return (

    <div className="AddToCart-Container">
      <div className="main-container">
        <div className="size-container">
          <button
            type="button"
            label="size"
            className="size-dropdown"
            disabled={!isInStock}
            onClick={(e) => {
              e.preventDefault();
              setSizeShow(!sizeShow);
            }}
          >
            { sizeTitle && (
            <div className="select-size" style={{ textAlign: 'center' }}>
              <span>Select Size</span>
            </div>
            )}
            {isInStock ? (
              <span>
                {size || null}
              </span>
            ) : 'OUT OF STOCK'}
            <span>
              <svg width="12px" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor" /></svg>
            </span>
          </button>
          {sizeShow && (
          <div
            className="dropdown-list"
            onMouseEnter={() => setSizeShow(true)}
            onMouseLeave={() => {
              setSizeShow(false);
            }}
          >
            {skus.map((sku) => (
              <a
                href="#"
                className="dropdown-item"
                key={sku.sku_id}
                onClick={(e) => {
                  e.preventDefault();
                  setSizeShow(false);
                  setSkuID(sku.sku_id);
                  setSize(sku.size);
                  setQuantity(1); // selecting size, add quantity
                }}
              >
                {sku.size}
              </a>
            ))}
          </div>
          )}
        </div>

        <div className="quantity-container">
          <div className="quantity-selector">
            <div className="select-quantity">
              <span style={{ color: 'black', margin: 'auto' }}>QUANTITY</span>
              <button
                disabled={!size}
                type="button"
                label="quantity"
                className="quantity-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  res();
                  setQuantityShow(!quantityShow);
                  console.log('is button clicked?');
                }}
              >
                {size ? (
                  <span>
                    {quantity}
                  </span>
                ) : '-'}
                <span>
                  <svg width="12px" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.6a.54.54 0 00-.78 0L6 5.21 1.39.6a.54.54 0 00-.78 0 .55.55 0 000 .77L6 6.76l5.39-5.39a.55.55 0 000-.77z" fill="currentColor" /></svg>
                </span>
              </button>
              {quantityShow && (
                <div
                  className="quantity-dropdown-list"
                  onMouseEnter={() => setQuantityShow(true)}
                  onMouseLeave={() => {
                    setQuantityShow(false);
                  }}
                >
                  {skus[0]
                  && _.range(1, Math.min(16, quantity + 1)).map((qty) => (
                    <a
                      href="#"
                      className="quantity-dropdown-item"
                      key={qty}
                      onClick={(e) => {
                        e.preventDefault();
                        setQuantity(qty); // selecting size, add quantity
                        setQuantityShow(false);
                      }}
                    >
                      {qty}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
