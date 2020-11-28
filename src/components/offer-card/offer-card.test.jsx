import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import OfferCard from './offer-card';
import {OfferCardType} from '../../const';

const offer = offers[0];

describe(`OfferCard`, () => {
  it(`should render OfferCard component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <OfferCard offer={offer} type={OfferCardType.CITY_PLACE} isTrackChangeCard={true}/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
