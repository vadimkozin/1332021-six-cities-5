import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import SmartRoute from './smart-route';
import {noop} from '../../mocks/utils';
import {AppRoute} from '../../const';

describe(`RoomPage`, () => {
  it(`should render RoomPage component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <SmartRoute render={noop} path={AppRoute.LOGIN} exact redirectTo={AppRoute.ROOT} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
