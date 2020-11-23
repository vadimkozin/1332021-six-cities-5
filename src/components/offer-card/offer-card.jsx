import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import RatingStars from '../rating-stars/rating-stars';
import {OFFER_CARD_TYPE} from '../../types/types';
import {OfferCardType, AppRoute} from '../../const';

const getOptionsByType = (type) => {
  switch (type) {
    case OfferCardType.CITY_PLACE:
      return {
        classNameMain: `cities__place-card`,
        classNameImage: `cities__image-wrapper`,
        nameBookmark: `To bookmarks`,
      };
    case OfferCardType.NEAR_PLACE:
      return {
        classNameMain: `near-places__card`,
        classNameImage: `near-places__image-wrapper`,
        nameBookmark: `In bookmarks`,
      };
    default:
      return {};
  }
};

const OfferCard = (props) => {
  const {offer, type, isTrackChangeCard, onOfferChange} = props;

  const opts = getOptionsByType(type);
  const routeOffer = `${AppRoute.OFFER}/${offer.id}`;

  const handleCardOver = useCallback((evt) => {
    evt.preventDefault();
    if (isTrackChangeCard) {
      onOfferChange(offer);
    }
  });

  const handleCardLeave = useCallback((evt) => {
    evt.preventDefault();
    if (isTrackChangeCard) {
      onOfferChange(null);
    }
  });

  return (
    <article
      className={`${opts.classNameMain} place-card`}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className={`${opts.classNameImage} place-card__image-wrapper`}>
        <Link
          to={routeOffer}
          onMouseEnter={handleCardOver}
          onMouseLeave={handleCardLeave}
        >
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{opts.nameBookmark}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={offer.rating}/>
        </div>
        <h2 className="place-card__name">
          <Link
            key={offer.id}
            to={routeOffer}
            onMouseEnter={handleCardOver}
            onMouseLeave={handleCardLeave}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.typeHousing}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = OFFER_CARD_TYPE;

const mapDispatchToProps = (dispath) => ({
  onOfferChange(offer) {
    dispath(ActionCreator.changeOffer(offer));
  },
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
