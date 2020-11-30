import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import Header from './header';

describe(`Header`, () => {
  it(`should render Header component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
