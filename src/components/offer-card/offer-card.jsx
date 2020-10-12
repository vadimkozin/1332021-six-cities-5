import React from 'react';
import RatingStars from '../rating-stars/rating-stars';
import {OFFER_CARD_TYPE} from '../../types/types';

const OfferCard = (props) => {
  const {onHover, offer, onOfferClick} = props;

  const _handleCardOver = (evt) => {
    evt.preventDefault();
    onHover(offer);
  };

  const _handleCardNameClick = (evt) => {
    evt.preventDefault();
    onOfferClick(offer.id);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={_handleCardOver}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
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
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={offer.rating}/>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={_handleCardNameClick}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.typeHousing}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = OFFER_CARD_TYPE;

export default OfferCard;
