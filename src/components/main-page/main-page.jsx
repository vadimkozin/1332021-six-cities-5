import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

// import OfferList from '../offer-list/offer-list';
import OfferListNew from '../offer-list/offer-list-new';

// import Map from '../map/map';
import MapNew from '../map/map-new';

// import CityList from '../city-list/city-list';
import CityListNew from '../city-list/city-list-new';

// import Sort from '../sort/sort';
import SortNew from '../sort/sort-new';

import Header from '../header/header';
// import {getCityCenter} from '../../mocks/offers';
import {MAIN_PAGE_TYPE} from '@types';
import {OfferCardType, MapType, SortingType} from '@const';
import {FROM_SORTINGTYPE_TO_FUNC_MAP} from '@utils';

const MainPage = (props) => {
  const {offers, city, sort,
    // cities, onCityChange, onOfferClick, onHoverCard, activeOfferId,
    // onSortChange
  } = props;

  const offersSort = offers.slice().sort(FROM_SORTINGTYPE_TO_FUNC_MAP[sort]());

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          {/* <CityList
            city={city}
            cities={cities}
            onCityChange={onCityChange}
          /> */}

          <CityListNew />


        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>

              {/* <Sort
                sortActive={sortActive}
                onSortChange={onSortChange}
              /> */}
              <SortNew />

              <div className="cities__places-list places__list tabs__content">

                {/* <OfferList
                  offers={offersSort}
                  onOfferClick={onOfferClick}
                  type={OfferCardType.CITY_PLACE}
                  onHoverCard={onHoverCard}
                /> */}

                <OfferListNew
                  offers={offersSort}
                  type={OfferCardType.CITY_PLACE}
                  // onOfferClick={onOfferClick}
                  // onHoverCard={onHoverCard}
                />

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MapNew
                  key={city}
                  offers={offers}
                  city={city}
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

  offer: state.offer,
  sort: state.sort,
});

const mapDispatchToProps = (dispath) => ({
  // onCityChange(city) {
  //   dispath(ActionCreator.changeCity(city));
  //   dispath(ActionCreator.getOffers(city));
  //   dispath(ActionCreator.resetActiveOfferId());
  // },
  onHoverCard(offer) {
    dispath(ActionCreator.changeOffer(offer.id));
  },
  // onSortChange(sortActive) {
  //   dispath(ActionCreator.changeSort(sortActive));
  // },
  onSortChange(sort) {
    dispath(ActionCreator.changeSortNew(sort));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
