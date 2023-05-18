import axios from 'axios';
import React from 'react';
import ReviewsList from './reviews/ReviewsList';
import WriteReviewModal from './write-review/WriteReviewModal';
import RatingsBreakdown from './ratings/RatingsBreakdown';
import CharacteristicsBreakdown from './characteristics/CharacteristicsBreakdown';
import ReviewsButtons from './ReviewsButtons';
import SearchReviews from './reviews/SearchReviews';
import SortReviews from './reviews/SortReviews';

const { useState, useEffect } = React;

export default function RatingsAndReviews({ product, metaData }) {
  const [showModal, setShowModal] = useState(false);
  const [ratingsFilter, setRatingsFilter] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);
  const [showCount, setShowCount] = useState(2);
  const [reviewsCache, setReviewsCache] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('relevant');

  useEffect(() => {
    if (product) {
      axios.get('/reviews', {
        params: {
          count: 1000,
          product_id: product.id,
          sort,
        },
      })
        .then(({ data }) => setReviewsCache(data))
        .catch((err) => console.error('ERROR GETTING REVIEWS', err));
    }
  }, [product, sort]);

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

  if (product && metaData) {
    return (
      <div className="ratings-and-reviews">
        <h2 className="ratings-and-reviews-header">Ratings & Reviews</h2>
        <div className="reviews-container">
          <div className="breakdowns">
            <RatingsBreakdown
              ratings={metaData.ratings}
              recommended={metaData.recommended}
              ratingsFilter={ratingsFilter}
              setRatingsFilter={setRatingsFilter}
            />
            <CharacteristicsBreakdown characteristics={metaData.characteristics} />
          </div>
          <div className="reviews">
            <div className="reviews-filters">
              <SortReviews reviewsCache={reviewsCache} setSort={setSort} />
              <SearchReviews setSearch={setSearch} />
            </div>
            <ReviewsList
              shownReviews={shownReviews}
              search={search}
            />
            <ReviewsButtons
              shownReviews={shownReviews}
              reviewsCache={reviewsCache}
              showCount={showCount}
              setShowCount={setShowCount}
              setShowModal={setShowModal}
            />
            {
            showModal
              ? (
                <WriteReviewModal
                  product={product}
                  characteristics={metaData.characteristics}
                  setShowModal={setShowModal}
                />
              )
              : null
            }
          </div>

        </div>
      </div>
    );
  }
  return <div className="ratings-and-reviews">Loading...</div>;
}
