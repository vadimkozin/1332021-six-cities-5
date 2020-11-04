import React from 'react';
import RatingStars from '../rating-stars/rating-stars';
import Header from '../header/header';
import {FAVORITES_PAGE_TYPE} from '../../types/types';
import {uniqArray, getHousingView} from '../../utils';

const FavoritesPage = (props) => {
  const {offers} = props;

  const offersFavorite = offers.filter((offer) => offer.isFavorite);
  const cities = uniqArray(offersFavorite.map((offer) => offer.city));
  const sortedCities = [...cities].sort();

  const getFavoriteList = (city) => {
    const offersByTown = offersFavorite.filter((offer) => offer.city === city);

    return offersByTown.map((offer) => (
      <article key={`${offer.id}`} className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" {...offer.pictures[0]} width="150" height="110"/>
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <RatingStars rating={offer.rating} />
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{getHousingView(offer.typeHousing)}</p>
        </div>
      </article>
    ));
  };

  const favoriteList = sortedCities.map((city, i) => {
    return (
      <li key={`${i}-${city}`} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {getFavoriteList(city)}
        </div>
      </li>
    );
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteList}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = FAVORITES_PAGE_TYPE;

export default FavoritesPage;
