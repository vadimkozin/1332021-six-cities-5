import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import {MAIN_PAGE_TYPE} from '../../types/types';
import {getCityCenter} from '../../mocks/offers';
import {TypesOfferCard, TypesMap} from '../../const';

const MainPage = (props) => {
  const {offers, city, cities, onCityChange, onOfferClick, onHoverCard, activeOfferId} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CityList
            city={city}
            cities={cities}
            onCityChange={onCityChange}
          />

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <!--
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                --> */}
              </form>
              <div className="cities__places-list places__list tabs__content">

                <OfferList
                  offers={offers}
                  onOfferClick={onOfferClick}
                  type={TypesOfferCard.CityPlace}

                  onHoverCard={onHoverCard}
                />

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  key={`${city}-${activeOfferId}`}
                  center={getCityCenter(city)}
                  offerCoords={offers.map((offer) => offer.coordinates)}
                  // offerActiveCoords={offer.coordinates}
                  // offerActiveCoords={offers.find((offer) => offer.id === activeOfferId).coordinates}
                  offerActiveCoords={activeOfferId !== null ? offers.find((offer) => offer.id === activeOfferId).coordinates : null}
                  layoutType={TypesMap.Vertical}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = MAIN_PAGE_TYPE;

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities,
  offers: state.offers,
  activeOfferId: state.activeOfferId,

});

const mapDispatchToProps = (dispath) => ({
  onCityChange(city) {
    dispath(ActionCreator.changeCity(city));
    dispath(ActionCreator.getOffers(city));
    dispath(ActionCreator.resetActiveOfferId());
  },
  onHoverCard(offer) {
    dispath(ActionCreator.changeOffer(offer.id));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
