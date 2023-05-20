import React, { useState, useEffect } from 'react';
import RelatedProductCard from '../related/RelatedProductCard';
import PlaceholderCard from './PlaceholderCard';

function ClosetList({ product }) {
  const [closet, setCloset] = useState([]);
  const [index, setIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const listLength = closet.length;
  const styles = {
    transform: `translate(${width}px)`,
  };

  const addOutfit = () => {
    if (closet.filter((obj) => obj.id === product.id).length < 1) {
      setCloset([...closet, ...[product]]);
    }
  };
  const removeOutfit = (itemID) => {
    const outfitArr = JSON.parse(window.localStorage.getItem('userCloset'));
    outfitArr.forEach((obj, i) => {
      if (obj.id === itemID) {
        outfitArr.splice(i, 1);
      }
    });
    setCloset(outfitArr);
  };
  function slideRight() {
    if (index <= listLength - 1) {
      setIndex(index + 1);
      setWidth(-((index) * 300));
    }
  }
  function slideLeft() {
    if (index > 1) {
      setIndex(index - 1);
      setWidth((width + 300));
    }
  }

  useEffect(() => {
    setCloset(JSON.parse(window.localStorage.getItem('userCloset')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('userCloset', JSON.stringify(closet));
  }, [closet]);

  return (
    <div className="outfit-container">
      <div className="outfit">
        {index !== 1 && (
          <div className="closet-Lbtn">
            <button type="button" onClick={() => slideLeft()}>&#5176;</button>
          </div>
        )}
        <div className="closet-container">
          <div className="closet-list">
            <h2>Your Outfit</h2>
            <div className="closet-container">
              {closet.length ? (
                <PlaceholderCard addOutfit={addOutfit} />
              ) : <div /> }
              <div style={styles} className="stackcards">
                {closet.length
                  ? closet.map((item) => (
                    <RelatedProductCard
                      key={item.id}
                      item={item}
                      removeOutfit={removeOutfit}
                    />
                  )) : <PlaceholderCard addOutfit={addOutfit} />}
              </div>
            </div>
          </div>
        </div>
        {index <= listLength && index <= listLength - 1 && (
          <div className="closet-Rbtn">
            <button type="button" onClick={() => slideRight()}>&#5171;</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClosetList;
