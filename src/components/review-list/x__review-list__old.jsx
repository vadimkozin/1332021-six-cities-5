import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Review from '../review/review';
import AddComment from '../add-comment/add-comment';
import withAddComment from '@hocs/with-add-comment/with-add-comment';
import {REVIEW_LIST_TYPE} from '../../types/types';
import {REVIEW_OUTPUT_MAX} from '../../const';
import {getSorter} from '../../utils';
import {getIsAuth} from '../../store/selectors/user';
import {fetchComments} from '../../store/api-actions';
import {getHotelId, getComments} from '@selectors/offers';

const AddCommentWrapped = withAddComment(AddComment);

const ReviewList = (props) => {
  // const {reviews} = props;
  // const reviewsCount = reviews.length;

  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const hotelId = useSelector(getHotelId);

  React.useEffect(() => {
    dispatch(fetchComments(hotelId));
  }, []);

  const reviews = useSelector(getComments);
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
      {isAuth && (<AddCommentWrapped />)}
    </section>
  );
};

ReviewList.propTypes = REVIEW_LIST_TYPE;

export default ReviewList;
