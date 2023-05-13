import axios from 'axios';
import React from 'react';
import ReviewTile from './ReviewTile';

const { useState, useEffect } = React;

export default function ReviewsList({ product }) {
  const [shownReviews, setShownReviews] = useState([]);
  const [showCount, setShowCount] = useState(2);
  const [reviewsCache, setReviewsCache] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          count: 1000,
          product_id: product.id,
          sort: 'relevant',
        },
      })
        .then(({ data }) => setReviewsCache(data))
        .catch((err) => console.error('ERROR GETTING REVIEWS', err));
    }
  }, [product]);

  useEffect(() => {
    if (search.length < 3) {
      setShownReviews(reviewsCache.slice(0, showCount));
    } else {
      setShownReviews(
        reviewsCache.filter((review) => review.summary.toLowerCase().includes(search.toLowerCase())
        || review.body.toLowerCase().includes(search.toLowerCase())).slice(0, showCount),
      );
    }
  }, [showCount, reviewsCache, search]);

  const sort = (e) => {
    axios.get('/reviews', {
      params: {
        count: 1000,
        product_id: product.id,
        sort: e.target.value,
      },
    })
      .then(({ data }) => setReviewsCache(data))
      .catch((err) => console.error('ERROR GETTING & SORTING REVIEWS', err));
  };

  if (!product) return <div className="reviews-list">Loading...</div>;
  if (product && !shownReviews.length) return <div className="reviews-list">Add a review!</div>;
  if (product && shownReviews.length) {
    return (
      <div className="reviews-list">
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
          <select name="sort" id="reviews-sort-selector" onChange={sort}>
            <option value="relevant" selected>Relevance</option>
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
          </select>
        </div>
        <div className="reviews-container">
          {shownReviews.map((review) => <ReviewTile key={review.review_id} review={review} />)}
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
    );
  }
}
