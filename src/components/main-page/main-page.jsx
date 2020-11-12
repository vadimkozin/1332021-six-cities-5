import React from 'react';
import {connect} from "react-redux";
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import Sort from '../sort/sort';
import Header from '../header/header';
import {MAIN_PAGE_TYPE} from '@types';
import {OfferCardType, MapType} from '@const';
import {FROM_SORTINGTYPE_TO_FUNC_MAP} from '@utils';

const MainPage = ({city, offers, sort}) => {

  const offersSort = offers.slice().sort(FROM_SORTINGTYPE_TO_FUNC_MAP[sort]());

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CityList />

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>

              <Sort />

              <div className="cities__places-list places__list tabs__content">

                <OfferList
                  offers={offersSort}
                  type={OfferCardType.CITY_PLACE}
                />

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
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
  offers: state.offers,
  sort: state.sort,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
