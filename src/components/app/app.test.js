import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import App from './app';

describe(`App`, () => {
  it(`should render App component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <App />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});

