import React from 'react';
import HomeOwner from '../home-owner/home-owner';
import ReviewList from '../review-list/review-list';
import RatingStars from '../rating-stars/rating-stars';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import {ROOM_PAGE_TYPE} from '../../types/types';
import {OFFER_PICTURE_MAX, TypesOfferCard, TypesMap} from '../../const';
import {getHousingView, filterBy} from '../../utils';
import {getCityCenter} from '../../mocks/offers';

const RoomPage = (props) => {
  const {offers, reviews, offerId} = props;

  const offer = offers.find((offerCurrent) => offerCurrent.id === Number(offerId));

  // задание: 12. Личный проект: больше подробностей (часть 2):
  // "Отрисуйте на карте маркеры 3-х объявлений расположенных неподалёку."
  // "Функцию поиска объявлений неподалеку реализовывать не нужно. Используйте моки.
  const offersByCity = filterBy(offers, `city`, offer.city).slice(0, 3);

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
              <ReviewList reviews={reviews} />

            </div>
          </div>
          <section className="property__map map">
            <Map
              center={getCityCenter(offer.city)}
              offerCoords={offersByCity.map((it) => it.coordinates)}
              offerActiveCoords={offer.coordinates}
              layoutType={TypesMap.Horizontal}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OfferList
                offers={offersByCity}
                type={TypesOfferCard.NearPlace}
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
