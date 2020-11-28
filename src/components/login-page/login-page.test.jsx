import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import LoginPage from './login-page';

describe(`LoginPage`, () => {
  it(`should render LoginPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <LoginPage exact/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
