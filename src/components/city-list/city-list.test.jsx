import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import CityList from './city-list';

describe(`CityList`, () => {
  it(`should render CityList component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <CityList />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
