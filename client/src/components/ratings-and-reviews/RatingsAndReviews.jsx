import axios from 'axios';
import React from 'react';
import ReviewsList from './reviews/ReviewsList';
import WriteReviewModal from './write-review/WriteReviewModal';
import RatingsBreakdown from './ratings/RatingsBreakdown';
import CharacteristicsBreakdown from './characteristics/CharacteristicsBreakdown';

const { useState, useEffect } = React;

export default function RatingsAndReviews({ product }) {
  const [metaData, setMetaData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ratingsFilter, setRatingsFilter] = useState([]);
  useEffect(() => {
    if (product) {
      axios.get('/reviews/meta', {
        params: {
          product_id: product.id,
        },
      })
        .then(({ data }) => setMetaData(data))
        .catch((err) => console.error('PROBLEM GETTING METADATA', err));
    }
  }, [product]);

  if (product && metaData) {
    return (
      <div className="ratings-and-reviews">
        <div className="breakdowns">
          <RatingsBreakdown
            ratings={metaData.ratings}
            recommended={metaData.recommended}
            ratingsFilter={ratingsFilter}
            setRatingsFilter={setRatingsFilter}
          />
          <CharacteristicsBreakdown characteristics={metaData.characteristics} />
        </div>
        <ReviewsList product={product} ratingsFilter={ratingsFilter} />
        <button type="button" className="add-review" onClick={() => setShowModal(true)}>Add A Review</button>
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
    );
  }
  return <div className="ratings-and-reviews">Loading...</div>;
}
