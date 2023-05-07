import React from 'react';
import StarRatings from '../shared/StarRatings';
import HelpfulnessDisplay from './HelpfulnessDisplay';
import ReportButton from './ReportButton';

const { useState, useEffect } = React;

export default function ReviewTile({ review }) {
  const [body, setBody] = useState('');
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (review.body.length > 250) {
      setBody(`${review.body.slice(0, 251)}...`);
      setShowMore(true);
    } else {
      setBody(review.body);
    }
  }, []);
  const handleShowMore = () => {
    setShowMore(false);
    setBody(review.body);
  };

  return (
    <div className="review-tile">
      <div className="top-row">
        <div className="top-row-left"><StarRatings rating={review.rating} /></div>
        <div className="top-row-right">
          {`${review.reviewer_name}, `}
          {new Date(review.date).toDateString()}
        </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{body}</div>
      {showMore
        ? <button type="button" className="show-more" onClick={handleShowMore}>Show more</button>
        : null}
      {review.recommend
        ? <div className="recommend-label">&#x2713; I recommend this product</div>
        : null}
      {review.response
        ? (
          <div className="review-response">
            <div className="review-response-header">Response from seller:</div>
            {review.response}
          </div>
        )
        : null}
      <div className="review-bottom-row">
        <HelpfulnessDisplay id={review.review_id} helpfulness={review.helpfulness} />
        |
        <ReportButton id={review.review_id} />
      </div>
    </div>
  );
}
