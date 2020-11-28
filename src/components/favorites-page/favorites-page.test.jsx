import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import FavoritesPage from './favorites-page';

describe(`FavoritesPage`, () => {
  it(`should render FavoritesPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <FavoritesPage offers={offers}/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
