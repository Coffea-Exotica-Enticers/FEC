import React from 'react';

export default function SortReviews({ reviewsCache, setSort }) {
  return (
    <div className="reviews-sort">
      {`${reviewsCache.length} reviews, sorted by `}
      <select
        className="reviews-sort-selector"
        defaultValue="relevant"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="relevant">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
    </div>
  );
}
