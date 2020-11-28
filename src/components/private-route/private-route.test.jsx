import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import PrivateRoute from './private-route';
import {AuthorizationStatus, AppRoute} from '../../const';
import {noop} from '../../mocks/utils';

describe(`PrivateRoute`, () => {
  it(`should render PrivateRoute component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <PrivateRoute exact render={noop} path={AppRoute.ROOT} authorizationStatus={AuthorizationStatus.AUTH}/>
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
