import axios from 'axios';
import React from 'react';
import StarRatings from '../shared/StarRatings';

const { useState, useEffect, useRef } = React;

export default function ReviewTile({ review }) {
  const [body, setBody] = useState('');
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [reported, setReported] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const clickedHelpful = useRef(false);
  useEffect(() => {
    if (review.body.length > 250) {
      setBody(`${review.body.slice(0, 251)}...`);
      setShowMore(true);
    } else {
      setBody(review.body);
    }
  }, []);
  const handleHelpful = () => {
    if (!clickedHelpful.current) {
      axios.put(`/reviews/${review.review_id}/helpful`);
      setHelpfulness(helpfulness + 1);
      clickedHelpful.current = true;
    }
  };
  const handleReport = () => {
    if (!reported) {
      axios.put(`/reviews/${review.review_id}/report`);
      setReported(true);
    }
  };
  const handleShowMore = () => {
    setShowMore(false);
    setBody(review.body);
  };
  let title;
  let summaryRemainder;
  if (review.summary.length > 60) {
    title = `${review.summary.slice(0, 61)}...`;
    summaryRemainder = `...${review.summary.slice(61)}`;
  } else {
    title = review.summary;
  }

  return (
    <div className="review-tile">
      <div className="top-row">
        <div className="top-row-left">
          <StarRatings rating={review.rating} />
        </div>
        <div className="top-row-right">
          {`${review.reviewer_name}, `}
          {new Date(review.date).toDateString()}
        </div>
      </div>
      <div className="review-summary">
        {title}
      </div>
      <div className="review-body">
        {summaryRemainder}
        {body}
      </div>
      {
        showMore
          ? <button type="button" className="show-more" onClick={handleShowMore}>Show more</button>
          : null
      }
      {
      review.recommend
        ? <div className="recommend-label">&#x2713; I recommend this product</div>
        : null
      }
      {
        review.response
          ? (
            <div className="review-response">
              <div className="review-response-header">Response from seller:</div>
              {review.response}
            </div>
          )
          : null
      }
      <div className="review-bottom-row">
        Helpful?
        <button type="button" className="review-helpful" onClick={handleHelpful}>Yes</button>
        <span className="review-helpfulness-display">
          (
          {helpfulness}
          )
        </span>
        |
        <button type="button" className="report-review" onClick={handleReport}>
          {reported ? 'Reported' : 'Report'}
        </button>
      </div>
    </div>
  );
}
