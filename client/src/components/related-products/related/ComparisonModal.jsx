import React, { useState, useEffect } from 'react';

function ComparisonModal({ closeModal, item, product }) {
  const [features, setFeatures] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [compareItem, setCompareItem] = useState(null);

  const xMark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#E51515" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>;

  const checkMark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="14C011" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>;

  useEffect(() => {
    const view = {};
    const compare = {};
    const feature = [];
    const featureArr = [...product.features, ...item.features];
    featureArr.forEach((featObj) => {
      if (!feature.includes(featObj.feature)) {
        feature.push(featObj.feature);
      }
    });
    product.features.forEach((featObj) => {
      if (view[featObj.feature] === undefined) {
        view[featObj.feature] = featObj.value;
      }
    });
    item.features.forEach((featObj) => {
      if (compare[featObj.feature] === undefined) {
        compare[featObj.feature] = featObj.value;
      }
    });
    setViewItem(view);
    setCompareItem(compare);
    setFeatures(feature);
  }, []);

  function sameCategory(feature) {
    return (
      <div className="cm-same">
        {viewItem[feature]
          ? <h4>{viewItem[feature] || checkMark}</h4>
          : <h4><p>{xMark}</p></h4>}

        <h3>{feature}</h3>

        {compareItem[feature]
          ? <h4>{compareItem[feature] || checkMark}</h4>
          : <h4><p>{xMark}</p></h4>}
      </div>
    );
  }

  function diffCategory(feature) {
    return (
      <div className="cm-diff">
        {viewItem[feature]
          ? <h4>{viewItem[feature] || checkMark}</h4>
          : <h4><p>{xMark}</p></h4>}

        <h3>{feature}</h3>

        {compareItem[feature]
          ? <h4>{compareItem[feature] || checkMark}</h4>
          : <h4><p>{xMark}</p></h4>}
      </div>
    );
  }

  return (
    <div className="compare-modal">
      <div className="rp-overlay" />
      <div className="cm-body">

        <div className="cm-btn">
          <button className="cm-close" type="button" onClick={() => closeModal()}>X</button>
        </div>

        <div className="cm-header">
          <h2>Comparing</h2>
          <div className="cm-products">
            <h3>
              <strong>{product.name}</strong>
              <p>
                (
                {product.category}
                )
              </p>
            </h3>
            <h4 aria-hidden="true" />
            <h3>
              <strong>{item.name}</strong>
              <p>
                (
                {item.category}
                )
              </p>
            </h3>
          </div>
        </div>

        {product.category === item.category && features.length
          ? features.map((compare) => sameCategory(compare))
          : features.map((compare) => diffCategory(compare))}

      </div>
    </div>
  );
}

export default ComparisonModal;
