import axios from 'axios';
import React from 'react';
import ReviewTile from './ReviewTile';

const { useState, useEffect } = React;

export default function ReviewsList({ product }) {
  const [shownReviews, setShownReviews] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const [reviewsCache, setReviewsCache] = useState([]);

  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          count: 1000,
          product_id: product.id,
          sort: 'relevant',
        },
      })
        .then(({ data }) => {
          setShownReviews(data.slice(0, 2));
          setReviewsCache(data);
        });
    }
  }, [product]);

  const showMoreReviews = () => {
    setShownReviews(reviewsCache.slice(0, showCount));
    setShowCount(showCount + 2);
  };

  const sort = (e) => {
    axios.get('/reviews', {
      params: {
        count: 1000,
        product_id: product.id,
        sort: e.target.value,
      },
    })
      .then(({ data }) => {
        setShownReviews(data.slice(0, shownReviews.length));
        setReviewsCache(data);
      });
  };

  if (!product) return <div className="reviews-list">Loading...</div>;
  if (product && !shownReviews.length) return <div className="reviews-list">Add a review!</div>;
  if (product && shownReviews.length) {
    return (
      <div className="reviews-list">
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
              <button type="button" className="more-reviews" onClick={showMoreReviews}>
                More Reviews
              </button>
            )
            : null
        }
      </div>
    );
  }
}
