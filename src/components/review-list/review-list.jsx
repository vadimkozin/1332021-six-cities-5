import React from 'react';
import Review from '../review/review';
import SendCommentForm from '../send-comment-form/send-comment-form';
import {REVIEW_LIST_TYPE} from '../../types/types';
import {REVIEW_OUTPUT_MAX} from '../../const';
import {getSorter} from '../../utils';

const ReviewList = (props) => {
  const {reviews} = props;
  const reviewsCount = reviews.length;

  const reviewsList = reviews
    .slice(0, Math.min(reviewsCount, REVIEW_OUTPUT_MAX))
    .sort(getSorter(`date`, `des`))
    .map((review) => <Review key={`${review.id}`} review={review} />);

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

ReviewList.propTypes = REVIEW_LIST_TYPE;

export default ReviewList;
