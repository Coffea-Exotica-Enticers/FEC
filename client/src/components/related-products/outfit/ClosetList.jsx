import React, { useState, useEffect } from 'react';
import RelatedProductCard from '../related/RelatedProductCard';

function ClosetList({ product }) {
  const [closet, setCloset] = useState([]);
  const [index, setIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const listLength = closet.length;
  const styles = {
    transform: `translate(${width}px)`,
  };

  function addOutfit() {
    if (closet.filter((obj) => obj.id === product.id).length < 1) {
      setCloset([...closet, ...[product]]);
    }
  }
  function removeOutfit(itemID) {
    const outfitArr = JSON.parse(window.localStorage.getItem('userCloset'));
    outfitArr.forEach((obj, i) => {
      if (obj.id === itemID) {
        outfitArr.splice(i, 1);
      }
    });
    setCloset(outfitArr);
  }
  function moveRight() {
    if (index <= listLength - 3) {
      setIndex(index + 1);
      setWidth(-((index) * 300));
    }
  }
  function moveLeft() {
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
    <div className="outfit">
      {index !== 1 && (
        <div className="closet-Lbtn" onClick={() => moveLeft()}>
          <button type="button">&#5176;</button>
        </div>
      )}
      <div className="closet-container">
        <div className="closet-list" style={styles}>
          <h2>Your Outfit</h2>
          <div className="closet-container">
            <div className="closet-add">
              <button type="button" onClick={() => addOutfit()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
            {closet.length
              ? closet.map(
                (item) => <RelatedProductCard key={item.id} item={item} removeOutfit={removeOutfit} />,
              )
              : 'add an outfit!'}
          </div>
        </div>
      </div>

      {index <= listLength - 3 && listLength >= 5 && (
        <div className="closet-Rbtn" onClick={() => moveRight()}>
          <button type="button">&#5171;</button>
        </div>
      )}
    </div>
  );
}

export default ClosetList;
