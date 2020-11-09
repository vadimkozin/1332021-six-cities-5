import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import RatingStars from '../rating-stars/rating-stars';
import {OFFER_CARD_NEW_TYPE} from '../../types/types';
import {OfferCardType} from '../../const';

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

const OfferCardNew = (props) => {
  const {offer, type, onOfferChange} = props;

  const opts = getOptionsByType(type);

  const handleCardOver = (evt) => {
    evt.preventDefault();
    onOfferChange(offer);
  };

  return (
    <article className={`${opts.classNameMain} place-card`} onMouseOver={handleCardOver}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className={`${opts.classNameImage} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" {...offer.pictures[0]} width="260" height="200" />
        </a>
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.typeHousing}</p>
      </div>
    </article>
  );
};

OfferCardNew.propTypes = OFFER_CARD_NEW_TYPE;

const mapDispatchToProps = (dispath) => ({
  onOfferChange(offer) {
    dispath(ActionCreator.changeOfferNew(offer));
  },
});

export {OfferCardNew};
export default connect(null, mapDispatchToProps)(OfferCardNew);
