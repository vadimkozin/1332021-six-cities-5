import React from 'react';
import Review from '../review/review';
import AddComment from '../add-comment/add-comment';
import withAddComment from '@hocs/with-add-comment/with-add-comment';
import {REVIEW_LIST_TYPE} from '../../types/types';
import {REVIEW_OUTPUT_MAX} from '../../const';
import {getSorter} from '../../utils';

const AddCommentWrapped = withAddComment(AddComment);

const ReviewList = (props) => {
  const {reviews, isAuth} = props;
  const reviewsCount = reviews.length;

  const reviewsList = reviews
    .sort(getSorter(`date`, `des`))
    .slice(0, Math.min(reviewsCount, REVIEW_OUTPUT_MAX))
    .map((review) => <Review key={`${review.id}`} review={review} />);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
      {isAuth && (<AddCommentWrapped />)}
    </section>
  );
};

ReviewList.propTypes = REVIEW_LIST_TYPE;

export default ReviewList;
