import React from 'react';
import StarRatings from '../../shared/StarRatings';
import HelpfulnessDisplay from './HelpfulnessDisplay';
import ReportButton from './ReportButton';
import ReviewPhoto from './ReviewPhoto';
import TextHighlight from '../../shared/TextHighlight';

const { useState, useEffect } = React;

export default function ReviewTile({ review, search }) {
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
      setBody(`${review.body.slice(0, 250)}...`);
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
    <div className="review-tile" aria-label="review">
      <div className="review-top-row">
        <div className="review-top-row-left"><StarRatings rating={review.rating} /></div>
        <div className="review-top-row-right">
          <span>{`${review.reviewer_name}, `}</span>
          <span>{new Date(review.date).toLocaleDateString('en-us', dateOptions)}</span>
        </div>
      </div>
      <div className="review-summary"><TextHighlight text={summary} search={search} /></div>
      <div className="review-body">
        <TextHighlight text={body} search={search} />
        {showMore
          ? <button type="button" className="show-more" aria-label="show rest of review body" onClick={handleShowMore}>Show more</button>
          : null}
      </div>
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
