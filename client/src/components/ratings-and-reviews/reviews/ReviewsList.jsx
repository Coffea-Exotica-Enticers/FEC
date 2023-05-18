import React from 'react';
import ReviewTile from './ReviewTile';

const anotherReview = {
  review_id: 111,
  rating: 2,
  summary: 'This summary title is longer than 60 characters and will be cut off at the end',
  recommend: true,
  response: 'This is a response from the seller',
  body: 'Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus. In arcu cursus euismod quis. Ut tortor pretium viverra suspendisse potenti nullam. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.',
  date: '2011-10-25T14:48:00.000Z',
  reviewer_name: 'fake-user2',
  helpfulness: 0,
  photos: [
    {
      id: 2458844,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061481/p8ws58xsyzuqptegnt8a.jpg',
    },
    {
      id: 2458846,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061486/woj1rgsqzdinhgflhc48.jpg',
    },
    {
      id: 2458847,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061490/bpiys5nrvxm9w8awawp8.jpg',
    },
    {
      id: 2458845,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061484/xnhhcccgigf6s6r2n6ku.jpg',
    },
  ],
};

export default function ReviewsList({ shownReviews, search }) {
  return shownReviews.length
    ? (
      <div className="reviews-list">
        {
          shownReviews.map(
            (review) => <ReviewTile key={review.review_id} review={review} search={search} />,
          )
        }
      </div>
    )
    : <div className="reviews-list">No Reviews...</div>;
}
