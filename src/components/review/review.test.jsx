import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock, {comments} from '../../mocks/storeMock';
import Review from './review';

const review = comments[0];

describe(`Review`, () => {
  it(`should render Review component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <Review review={review}/>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
