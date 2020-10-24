import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import Sort from '../sort/sort';
import {getCityCenter} from '../../mocks/offers';
import {MAIN_PAGE_TYPE} from '@types';
import {OfferCardType, MapType, SortingType} from '@const';
import {sorting} from '@utils';

const MainPage = (props) => {
  const {offers, city, cities, onCityChange, onOfferClick, onHoverCard, activeOfferId,
    sortActive = SortingType.POPULAR,
    onSortChange} = props;

  const offersSort = offers.slice().sort(sorting[sortActive]());

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

              <Sort
                sortActive={sortActive}
                onSortChange={onSortChange}
              />

              <div className="cities__places-list places__list tabs__content">

                <OfferList
                  offers={offersSort}
                  onOfferClick={onOfferClick}
                  type={OfferCardType.CITY_PLACE}
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
                  layoutType={MapType.VERTICAL}
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
  sortActive: state.sortActive,

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
  onSortChange(sortActive) {
    dispath(ActionCreator.changeSort(sortActive));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
