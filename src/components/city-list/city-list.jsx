import React from 'react';
import {CITY_LIST_TYPE} from '../../types/types';

const CityList = (props) => {
  const {city, cities, onCityChange} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();

    const newCity = evt.target.innerText;

    if (newCity !== city) {
      onCityChange(newCity);
    }
  };

  const citiesList = cities.map((nextCity, i) => (
    <li key={`${city}-${i}`} className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === nextCity && `tabs__item--active`}`}
        href="#"
        onClick={handleCityClick}
      >
        <span>{nextCity}</span>
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

export default CityList;

