import React from 'react';
import RatingStars from '../rating-stars/rating-stars';
import {REVIEW_TYPE} from '../../types/types';
import {formatDate} from '../../utils';

const Review = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <RatingStars className={`reviews__stars rating__stars`} rating={review.rating}/>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={formatDate.ymd(review.date)}>{formatDate.my(review.date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = REVIEW_TYPE;

export default Review;
