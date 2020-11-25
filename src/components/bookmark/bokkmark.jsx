import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import history from '../../browser-history';
import PropTypes from 'prop-types';
import {AppRoute} from '@const';
import {getIsAuth} from '@selectors/user';
import {setFavorite} from '../../store/api-actions';
import {getOffers} from '@selectors/offers';
import {getOfferById} from '@utils';

export const BookmarkType = {
  PROPERTY: `property`,
  PLACE_CARD: `place-card`
};

const FROM_BOOKMARKTYPE_TO_CLASSNAME = {
  [BookmarkType.PROPERTY]: `property__bookmark-button`,
  [BookmarkType.PLACE_CARD]: `place-card__bookmark-button`,
};

const getPreposition = (isActive) => isActive ? `To` : `In`;

const getIconSize = (type) => {
  switch (type) {
    case BookmarkType.PROPERTY:
      return {width: 31, height: 33};
    case BookmarkType.PLACE_CARD:
      return {width: 18, height: 19};
    default:
      return {width: 18, height: 19};
  }
};

const Bookmark = (props) => {
  const {offerId, type} = props;

  const offers = useSelector(getOffers);
  const isAuth = useSelector(getIsAuth);

  const offer = getOfferById(offers, offerId);
  const isActive = offer.isFavorite;

  const className = FROM_BOOKMARKTYPE_TO_CLASSNAME[type];
  const size = getIconSize(type);
  const preposition = getPreposition(isActive);

  const dispatch = useDispatch();

  const handleBookmarkClick = useCallback((evt) => {
    evt.preventDefault();
    if (!isAuth) {
      history.push(AppRoute.LOGIN);
    }

    dispatch(setFavorite({hotelId: offerId, isFavorite: !isActive}));
  }, [isAuth, offers]);

  return (
    <button
      className={`${className} button ${isActive && `${className}--active`}`}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className="place-card__bookmark-icon" {...size}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{preposition} bookmarks</span>
    </button>
  );
};

Bookmark.propTypes = {
  offerId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Bookmark;
