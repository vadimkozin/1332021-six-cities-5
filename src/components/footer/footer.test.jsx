import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import Footer from './footer';

describe(`Footer`, () => {
  it(`should render Footer component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
