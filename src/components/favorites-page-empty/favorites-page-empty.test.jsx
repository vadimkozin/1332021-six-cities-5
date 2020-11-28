import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import FavoritesPageEmpty from './favorites-page-empty';

describe(`FavoritesPageEmpty`, () => {
  it(`should render FavoritesPageEmpty component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <FavoritesPageEmpty offers={offers}/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
