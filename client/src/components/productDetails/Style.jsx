import React, { useState, useEffect } from 'react';

export default function Style({ styleList }) {
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
 **/

  const [selection, setSelection] = useState(null);
  const [price, setPrice] = useState(null);
  const [salePrice, setsalePrice] = useState(null);


  return (
    <>
<div className="product-price-container">
<div className="product-price" >
{ salePrice ? <span style={{textDecoration: "line-through"}}>$
{price ? price : styleList[0].original_price}
</span>:<span >$
{price ? price : styleList[0].original_price}
</span>
}
</div>
<div className="sales-price">
<span> {salePrice ? '$' + salePrice : null}
</span>
</div>
  </div>
    <div>
      <i>
        <h2>Select Style</h2>
      </i>
      {styleList ? (
        <div>
       {selection ? <div><p>{selection}</p> </div>: styleList[0].name}
          <div className="thumbnail-container">
          {styleList.map((style, index) =>
        <img key={index} className="style-thumbnails" src={style.photos[index].thumbnail_url} onClick={(e)=> {
          setSelection(style.name)
          setPrice(style.original_price)
          setsalePrice(style.sale_price)
        }
        }></img>
          )}
           </div>
        </div>
      ) : (<h1>Style not available</h1>)}
    </div>
    </>
  )
}