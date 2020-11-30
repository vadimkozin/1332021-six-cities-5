import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import storeMock, {comments} from '../../mocks/storeMock';
import ReviewList from './review-list';

describe(`ReviewList`, () => {
  it(`should render ReviewList component`, () => {
    const component = render(
        <Provider store={storeMock}>
          <ReviewList reviews={comments} isAuth={true}/>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
