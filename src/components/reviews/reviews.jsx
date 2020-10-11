import React from 'react';
import SendCommentForm from '../send-comment-form/send-comment-form';
import RatingStars from '../rating-stars/rating-stars';
import {ReviewsType} from '../../types/types';
import {REVIEW_OUTPUT_MAX} from '../../const';
import {formatDate} from '../../utils';

const Reviews = (props) => {
  const {reviews} = props;
  const reviewsCount = reviews.length;

  const reviewsList = reviews
    .slice(0, Math.min(reviews.length, REVIEW_OUTPUT_MAX))
    .map((review) => {
      return (
        <li key={`${review.id}`} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.name}
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
    });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
      <SendCommentForm />
    </section>
  );
};

Reviews.propTypes = ReviewsType;

export default Reviews;
