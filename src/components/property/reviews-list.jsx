import React from 'react';
import {REVIEWS_TYPE} from '../types';
import {ReviewsItem} from './reviews-item';

export const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">{reviews.map((review, i) => <ReviewsItem key={i} review={review}/>)}</ul>
  );
};

ReviewsList.propTypes = REVIEWS_TYPE;
