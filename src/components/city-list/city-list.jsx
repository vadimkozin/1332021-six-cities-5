import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import withActiveItem from '@hocs/with-active-item/with-active-item';
import {CITY_LIST_TYPE} from '@types';
import {getCity, getCities} from '@selectors/offers';

const CityList = (props) => {
  const {cities, onCityChange, activeItem, onActiveItemChange} = props;
  const activeCity = activeItem || cities[0];

  const handleCityClick = (evt) => {
    evt.preventDefault();

    const newCity = evt.target.innerText;

    if (newCity !== activeCity) {
      onCityChange(newCity);
      onActiveItemChange(newCity);
    }
  };

  const citiesList = cities.map((city, i) => (
    <li key={i} className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeCity === city && `tabs__item--active`}`}
        href="#"
        onClick={handleCityClick}
      >
        <span>{city}</span>
      </a>
    </li>
  ));

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList}
      </ul>
    </section>
  );
};


CityList.propTypes = CITY_LIST_TYPE;

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispath) => ({
  onCityChange(city) {
    dispath(ActionCreator.changeCity(city));
    dispath(ActionCreator.getOffers(city));
  },
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(CityList));
