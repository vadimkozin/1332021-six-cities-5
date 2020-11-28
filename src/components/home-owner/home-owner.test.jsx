import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import HomeOwner from './home-owner';

const offer = offers[0];

describe(`HomeOwner`, () => {
  it(`should render HomeOwner component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <HomeOwner owner={offer.owner} description={offer.description} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
