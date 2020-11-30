import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import RatingStars from './rating-stars';

describe(`RatingStars`, () => {
  it(`should render RatingStars component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <RatingStars rating={3.5}/>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
