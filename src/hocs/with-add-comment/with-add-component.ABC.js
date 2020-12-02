import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
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
  ]).isRequired,
};

const MockComponentWrapped = withAddComment(MockComponent);

it(`withAddComment is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onFormSubmit={noop}
      onStarChange={noop}
      onTextChange={noop}
      isDisabledSubmit={true}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
