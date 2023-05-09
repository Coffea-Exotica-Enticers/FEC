import axios from 'axios';
import React from 'react';
import ReviewTile from './ReviewTile';

const { useState, useEffect } = React;

export default function ReviewsList({ product }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(3);
  const [nextPage, setNextPage] = useState([]);
  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          page: 1,
          product_id: product.id,
        },
      })
        .then(({ data }) => setReviews(data))
        .then(() => axios.get('/reviews', {
          params: {
            page: 2,
            product_id: product.id,
          },
        }))
        .then(({ data }) => setNextPage(data));
    }
  }, [product]);

  const showMore = () => {
    axios.get('/reviews', {
      params: {
        page,
        product_id: product.id,
      },
    })
      .then(({ data }) => {
        setReviews((currentReviews) => [...currentReviews, ...nextPage]);
        setNextPage(data);
        setPage(page + 1);
      });
  };

  if (!product) return <div className="reviews-list">Loading...</div>;
  if (product && !reviews.length) return <div className="reviews-list">Add a review!</div>;
  if (product && reviews.length) {
    return (
      <div className="reviews-list">
        {reviews.map((review) => <ReviewTile key={review.review_id} review={review} />)}
        {
          nextPage.length
            ? (<button type="button" className="more-reviews" onClick={showMore}>More Reviews</button>)
            : null
        }
      </div>
    );
  }
}
