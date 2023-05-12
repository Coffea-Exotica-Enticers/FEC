import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductCard from '../related/RelatedProductCard';

function ClosetList({ product }) {
  const [closet, setCloset] = useState([]);

  function addOutfit() {
    if (closet.filter((obj) => obj.id === product.id).length < 1) {
      setCloset([...closet, ...[product]]);
    }
  }

  function removeOutfit(itemID) {
    let outfitArr = JSON.parse(window.localStorage.getItem('userCloset'));
    outfitArr.forEach((obj, i) => {
      if (obj.id === itemID) {
        outfitArr.splice(i, 1);
      }
    });
    setCloset(outfitArr);
    // setCloset(outfitArr);
  }
  useEffect(() => {
    setCloset(JSON.parse(window.localStorage.getItem('userCloset')));
  }, []);

  useEffect(() => {
    // const userCloset = JSON.parse(window.localStorage.userCloset);
    // if (userCloset.filter((obj) => obj.id === product.id).length < 1) {
    window.localStorage.setItem('userCloset', JSON.stringify(closet));
    // }
  }, [closet]);

  console.log('closet', closet)

  return (
    <div className="closet-list">
      <h2>Your Closet</h2>
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
  );
}

export default ClosetList;
