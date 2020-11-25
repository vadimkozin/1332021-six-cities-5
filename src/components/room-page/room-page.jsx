import React from 'react';
import HomeOwner from '../home-owner/home-owner';
import ReviewListContainer from '../../containers/review-list-container/review-list-container';
import RatingStars from '../rating-stars/rating-stars';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import {ROOM_PAGE_TYPE} from '../../types/types';
import {OFFER_PICTURE_MAX, OfferCardType, MapType} from '../../const';
import {getHousingView} from '../../utils';
import Bookmark, {BookmarkType} from '../bookmark/bokkmark';

const RoomPage = (props) => {
  const {offer, offersNearby} = props;
  const offersAround = [...offersNearby, offer];

  const photoList = offer.pictures
    .slice(0, Math.min(offer.pictures.length, OFFER_PICTURE_MAX))
    .map((picture, i) => {
      return (
        <div key={`${i}-${picture.src}`} className="property__image-wrapper">
          <img className="property__image" src={picture.src} alt={picture.alt} />
        </div>
      );
    });

  const householdItemList = offer.householdItems.map((item, i) => {
    return (
      <li key={`${i}-${item}`} className="property__inside-item">
        {item}
      </li>
    );
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photoList}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <Bookmark
                  offerId={offer.id}
                  type={BookmarkType.PROPERTY}
                />
              </div>
              <div className="property__rating rating">
                <RatingStars className={`property__stars rating__stars`} rating={offer.rating}/>
                <span className="property__rating-value rating__value">{offer.rating.toFixed(1)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getHousingView(offer.typeHousing)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsNumber} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guestsMax} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {householdItemList}
                </ul>
              </div>

              <HomeOwner owner={offer.owner} description={offer.description}/>
              <ReviewListContainer offerId={offer.id}/>

            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offersAround}
              city={offer.city}
              layoutType={MapType.HORIZONTAL}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OfferList
                offers={offersAround}
                type={OfferCardType.NEAR_PLACE}
                isTrackChangeCard={false}
              />

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

RoomPage.propTypes = ROOM_PAGE_TYPE;

export default RoomPage;
