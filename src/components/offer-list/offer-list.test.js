import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {offers} from '../../mocks/storeMock';
import OfferList from './offer-list';
import {OfferCardType} from '../../const';

describe(`OfferList`, () => {
  it(`should render OfferList component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <OfferList offers={offers} type={OfferCardType.CITY_PLACE} isTrackChangeCard={true}/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
