import React from 'react';

export default function DisplayErrors({ rating, email }) {
  if (rating === 0 || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    return (
      <div className="write-review-errors">
        <div className="error-header">You must enter the following: </div>
        <ul>
          {
            rating === 0
              ? <li>Please rate this product.</li>
              : null
          }
          {
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
              ? <li>Please enter a correct email.</li>
              : null
          }
        </ul>
      </div>
    );
  }
}
