import axios from 'axios';
import React from 'react';
import ReviewTile from './ReviewTile';

const { useState, useEffect } = React;

export default function ReviewsList({ product, ratingsFilter }) {
  const [shownReviews, setShownReviews] = useState([]);
  const [showCount, setShowCount] = useState(2);
  const [reviewsCache, setReviewsCache] = useState([]);
  const [search, setSearch] = useState('');
  const [sortState, setSortState] = useState('relevant');
  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          count: 1000,
          product_id: product.id,
          sort: sortState,
        },
      })
        .then(({ data }) => setReviewsCache(data))
        .catch((err) => console.error('ERROR GETTING REVIEWS', err));
    }
  }, [product, sortState]);

  useEffect(() => {
    const filtered = ratingsFilter.length
      ? reviewsCache.filter((review) => ratingsFilter.includes(review.rating))
      : reviewsCache;
    if (search.length < 3) {
      setShownReviews(filtered.slice(0, showCount));
    } else {
      setShownReviews(
        filtered.filter((review) => review.summary.toLowerCase().includes(search.toLowerCase())
        || review.body.toLowerCase().includes(search.toLowerCase())).slice(0, showCount),
      );
    }
  }, [showCount, reviewsCache, search, ratingsFilter]);

  if (!product) return <div className="reviews-list">Loading...</div>;

  return (
    <div className="reviews-container">
      <div className="reviews-search">
        <input
          type="text"
          className="reviews-search-bar"
          placeholder="Search reviews..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="reviews-sort">
        {`${reviewsCache.length} reviews, sorted by`}
        <select name="sort" id="reviews-sort-selector" defaultValue="relevant" onChange={(e) => setSortState(e.target.value)}>
          <option value="relevant">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      {
        shownReviews.length
          ? (
            <div className="reviews-wrapper">
              <div className="reviews-list">
                {
                shownReviews.map(
                  (review) => <ReviewTile key={review.review_id} review={review} search={search} />,
                )
                }
              </div>
              {
                shownReviews.length < reviewsCache.length
                  ? (
                    <button
                      type="button"
                      className="more-reviews"
                      onClick={() => setShowCount(showCount + 2)}
                    >
                      More Reviews
                    </button>
                  )
                  : null
              }
            </div>
          )
          : (<div className="reviews-list">No Reviews...</div>)
      }
    </div>
  );
}
