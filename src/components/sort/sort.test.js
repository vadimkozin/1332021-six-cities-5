import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import Sort from './sort';

describe(`Sort`, () => {
  it(`should render Sort component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <Sort />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
