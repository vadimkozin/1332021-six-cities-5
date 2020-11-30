import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import storeMock from '../../mocks/storeMock';
import withAddComment from './with-add-comment';

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
const MockComponentWrapped = withAddComment(MockComponent);

describe(`withAddComment`, () => {
  it(`should render withAddComment`, () => {
    const component = render(
        <Provider store={storeMock}>
          <MemoryRouter>
            <MockComponentWrapped
              onFormSubmit={noop}
              onStarChange={noop}
              onTextChange={noop}
              isDisabledSubmit={true}
            />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
