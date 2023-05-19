/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { ProductContext } from './Product';

export default function Style() {
  const {
    styleList, selectedStyle, setSelectedStyle, isExpandedActive,
  } = useContext(ProductContext);

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
          <span className="span-salesprice">
            {selectedStyle.sale_price ? `$${selectedStyle.sale_price}` : null}
          </span>
        </div>
      </div>
      <div>
        <i className="selectStyle">
          <h2>Select Style</h2>
        </i>
        {styleList ? (
          <div className="stylename" data-testid="stylename">
            {selectedStyle.name ? (
              <div>
                <p className="stName">{selectedStyle.name}</p>
              </div>
            ) : styleList[0].name}
            <div className="product-thumbnail-container">
              {styleList.map((style) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div key={style.style_id}>
                  {style.style_id === selectedStyle.style_id
                      && !isExpandedActive ? ( // putting condition to not display checkmark @ popup
                        <span className="checkmark"> &#10003; </span>)
                    : null}
                  <img
                    key={style.style_id}
                    className="style-thumbnails"
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    onClick={() => {
                      setSelectedStyle(style);
                      // setSelectedPhoto(style.photos[0].thumbnail_url);
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
