/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { ProductContext } from './Product';

export default function Style() {
/**
 * 1. Display style name; appears above the thumbnail list
 * 2. Display thumbnails in rows of 4
 *    2.1  the user should be presented all the styles of the product
 * and have the ability to toggle between them
 *    2.2 Only one style can be selected at a time
 *    2.3 By default, the style selected will be the first in the list
 * 3. Display price info if SKU discounted true, show sale price in red
 * 4. The current selection should be indicated within the list by
 * the overlay of a checkmark on top of the thumbnail for that style
 *   4.1 The title for that style should appear typed out in full above the thumbnail list.
 * */

  const { styleList, selectedStyle, setSelectedStyle } = useContext(ProductContext);

  return (
    <>
      <div className="product-price-container">
        <div className="product-price">
          { selectedStyle.sale_price ? (
            <span style={{ textDecoration: 'line-through' }}>
              $
              {selectedStyle.original_price || styleList[0].original_price}
            </span>
          ) : (
            <span>
              $
              {selectedStyle.original_price || styleList[0].original_price}
            </span>
          )}
        </div>
        <div className="sales-price">
          <span>
            {selectedStyle.sale_price ? `$${selectedStyle.sale_price}` : null}
          </span>
        </div>
      </div>
      <div>
        <i>
          <h2>Select Style</h2>
        </i>
        {styleList ? (
          <div>
            {selectedStyle.name ? (
              <div>
                <p>{selectedStyle.name}</p>
              </div>
            ) : styleList[0].name}
            <div className="thumbnail-container">
              {styleList.map((style) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div key={style.style_id}>
                  {style.style_id === selectedStyle.style_id
                        && (<span className="checkmark"> &#10003; </span>)}
                  <img
                    key={style.style_id}
                    className="style-thumbnails"
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    onClick={() => {
                      setSelectedStyle(style);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (<h1>Style not available</h1>)}
      </div>
    </>
  );
}
