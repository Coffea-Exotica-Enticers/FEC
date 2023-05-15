import React from 'react';

export default function SearchReviews({ setSearch }) {
  return (
    <div className="reviews-search">
      <input
        type="text"
        className="reviews-search-bar"
        placeholder="Search reviews..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
