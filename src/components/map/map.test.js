import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import {CITIES_NAMES} from '../../const';
import Map from './map';
import {MapType} from '../../const';

const offer = offers[0];
const city = CITIES_NAMES[0];

describe(`Map`, () => {
  it(`should render Map component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <Map
            city={city}
            offers={offers}
            offer={offer}
            layoutType={MapType.VERTICAL}
          />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
