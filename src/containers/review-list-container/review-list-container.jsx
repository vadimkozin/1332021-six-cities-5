import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import ReviewList from '../../components/review-list/review-list';
import {getIsAuth} from '../../store/selectors/user';
import {fetchComments} from '../../store/api-actions';
import {getCommentsGist} from '@selectors/offers';
import {isWaitingRequestData, isRequestError} from '@utils';

const ReviewListContainer = ({offerId}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchComments(offerId));
  }, []);

  const commentsGist = useSelector(getCommentsGist);
  const isAuth = useSelector(getIsAuth);

  if (isWaitingRequestData([commentsGist])) {
    return <h4>LOADING ..................................</h4>;
  }

  if (isRequestError([commentsGist])) {
    return <h4>Error receiving comments</h4>;
  }

  return <ReviewList reviews={commentsGist.data} isAuth={isAuth}/>;
};

ReviewListContainer.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default ReviewListContainer;
