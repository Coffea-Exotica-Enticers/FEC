import React from 'react';
import StarRatings from '../../shared/StarRatings';
import HelpfulnessDisplay from './HelpfulnessDisplay';
import ReportButton from './ReportButton';
import ReviewPhoto from './ReviewPhoto';

const { useState, useEffect } = React;

export default function ReviewTile({ review }) {
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [showMore, setShowMore] = useState(false);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    if (review.body.length > 250) {
      setBody(`${review.body.slice(0, 251)}...`);
      setShowMore(true);
    } else {
      setBody(review.body);
    }
    if (review.summary.length > 60) {
      setSummary(`${review.summary.slice(0, 60)}...`);
    } else {
      setSummary(review.summary);
    }
  }, [review]);

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
          {new Date(review.date).toLocaleDateString('en-us', dateOptions)}
        </div>
      </div>
      <div className="review-summary">{summary}</div>
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
      <div className="review-photos">
        {review.photos.length
          ? review.photos.map((photo) => <ReviewPhoto key={photo.id} url={photo.url} />)
          : null}
      </div>
      <div className="review-bottom-row">
        <HelpfulnessDisplay id={review.review_id} helpfulness={review.helpfulness} />
        {' |'}
        <ReportButton id={review.review_id} />
      </div>
    </div>
  );
}
