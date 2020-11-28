import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import NotFoundPage from './not-found';

describe(`NotFoundPage`, () => {
  it(`should render NotFoundPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <NotFoundPage />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
