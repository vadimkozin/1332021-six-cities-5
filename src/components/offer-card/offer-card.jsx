import React from 'react';
import {OfferCardType} from '../../types/types';
import {RATING_STAR_MAX} from '../../const';

const OfferCard = (props) => {
  const {onHover, offer} = props;
  const ratingStyle = {width: offer.rating / RATING_STAR_MAX * 100 + `%`};

  const handleCardOver = (evt) => {
    evt.preventDefault();
    onHover(offer);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleCardOver}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          {/* <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" /> */}
          <img className="place-card__image" src={offer.pictures[0].src} width="260" height="200" alt={offer.pictures[0].alt} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            {/* <b className="place-card__price-value">&euro;120</b> */}
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
          <div className="place-card__stars rating__stars">
            {/* <span style={{width: `80%`}}></span> */}
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {/* <a href="#">Beautiful &amp; luxurious apartment at great location</a> */}
          <a href="#">{offer.title}</a>
        </h2>
        {/* <p className="place-card__type">Apartment</p> */}
        <p className="place-card__type">{offer.typeHousing}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = OfferCardType;

export default OfferCard;
