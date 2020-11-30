import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import MainPage from './main-page';

describe(`MainPage`, () => {
  it(`should render MainPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MainPage />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
