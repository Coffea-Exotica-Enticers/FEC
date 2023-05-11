import React, { useContext, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { ProductContext } from './Product';

export default function Cart() {
  const { selectedStyle } = useContext(ProductContext);

  //  /cart
  /*
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
}
