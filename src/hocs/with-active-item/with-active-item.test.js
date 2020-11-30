import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withActiveItem from './with-active-item';

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

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem`, () => {
  it(`withActiveItem is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeItem={false}
        onActiveItemChange={noop}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
