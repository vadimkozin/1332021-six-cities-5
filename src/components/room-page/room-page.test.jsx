import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock, {hotel, hotelsNearby} from '../../mocks/storeMock';
import RoomPage from './room-page';

describe(`RoomPage`, () => {
  it(`should render RoomPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <RoomPage offer={hotel} offersNearby={hotelsNearby} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
