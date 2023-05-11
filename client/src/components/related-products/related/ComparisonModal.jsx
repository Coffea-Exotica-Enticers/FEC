import React, { useState, useEffect } from 'react';

function ComparisonModal({ modalToggle, item, product }) {
  console.log('product here', product)
  console.log('item here', item)

  return (
    <div className="compare-modal" style={{ backgroundColor: '#f1f1f1' }}>
        <button className="cm-btn">X</button>
      <div className="cm-header">
        <h3 className="cm-title" style={{ textAlign: 'center' }}>Comparing</h3>
        <div className="cm-products" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', whiteSpace: 'pre-line' }}>
          <h4>{product.name}</h4><h4></h4><h4>{item.name}</h4>
        </div>
      </div>

      <div className="cm-body">
      </div>

    </div>
  );
}

export default ComparisonModal;
