import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import Bookmark, {BookmarkType} from './bookmark';

// console.log(`storeMock:`, storeMock.getState());

describe(`Bookmark`, () => {
  it(`should render Bookmark component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <Bookmark offerId={1} type={BookmarkType.PLACE_CARD} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
