import React from "react";
import renderer from "react-test-renderer";
import AddComment from './add-comment';
const noop = () => {};

it(`Should AddComment render correctly`, () => {
  const tree = renderer
    .create(<AddComment
      onFormSubmit={noop}
      onStarChange={noop}
      onTextChange={noop}
      isDisabledSubmit={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
