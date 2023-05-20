import React from 'react';

function PlaceholderCard({ addOutfit }) {
  return (
    <div className="placeholder-card">
      <div className="pc-img">Add an Outfit!</div>
      <div className="pc-desc">
        <div className="closet-add">
          <button type="button" data-testid="closet-addbtn" aria-label="add-outfit" onClick={() => addOutfit()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#7c7b5d" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderCard;
