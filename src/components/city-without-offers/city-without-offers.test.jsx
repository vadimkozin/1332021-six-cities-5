import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import CityWithoutOffers from './city-without-offers';
import {CITIES_NAMES} from '../../const';

describe(`CityWithoutOffers`, () => {
  it(`should render CityWithoutOffers component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <CityWithoutOffers city={CITIES_NAMES[0]}/>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
