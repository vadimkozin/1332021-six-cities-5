import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Bookmark, BookmarkType} from './bookmark';
import {offers} from '../../mocks/storeMock';

configure({adapter: new Adapter()});

test(`should Bookmark was clicked`, () => {
  const onSetFavorite = jest.fn();

  const wrapper = shallow(
      <Bookmark
        offerId={offers[0].id}
        type={BookmarkType.PROPERTY}
        isAuth={true}
        offers={offers}
        onSetFavorite={onSetFavorite}
      />
  );

  const button = wrapper.find(`.button`);
  button.simulate(`click`);
  expect(onSetFavorite).toHaveBeenCalledTimes(1);
});
