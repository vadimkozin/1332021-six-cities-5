import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import history from '../../browser-history';
import {AppRoute} from '../../const';
import {getIsAuth} from '../../store/selectors/user';
import {setFavorite} from '../../store/api-actions';
import {getOffers} from '../../store/selectors/offers';
import {getOfferById} from '../../utils';
import {BOOKMARK_TYPE} from '../../types/types';

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
  const {offerId, type, isAuth, offers, onSetFavorite} = props;

  const offer = getOfferById(offers, offerId);
  const isActive = offer.isFavorite;

  const className = FROM_BOOKMARKTYPE_TO_CLASSNAME[type];
  const size = getIconSize(type);
  const preposition = getPreposition(isActive);

  const handleBookmarkClick = useCallback(() => {
    if (!isAuth) {
      history.push(AppRoute.LOGIN);
    }

    onSetFavorite(offerId, !isActive);
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

Bookmark.propTypes = BOOKMARK_TYPE;

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  offers: getOffers(state),
});

const mapDispatchToPorps = (dispatch) => ({
  onSetFavorite: (hotelId, isFavorite) => {
    dispatch(setFavorite({hotelId, isFavorite}));
  },
});

export {Bookmark};
export default connect(mapStateToProps, mapDispatchToPorps)(Bookmark);
