import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bookmark, {BookmarkType} from './bookmark';
import {offers} from '../../mocks/storeMock';
// import {AuthorizationStatus, OfferCardType} from '../../const';

configure({adapter: new Adapter()});

it(`should Bookmark was pressed`, () => {
  const onChangeFavoriteOffer = jest.fn();

  const wrapper = shallow(
      <Bookmark
        offerId={offers[0].id}
        type={BookmarkType.PROPERTY}
      />
  );

  const bookmarkButton = wrapper.find(`.button`);
  bookmarkButton.simulate(`click`);
  expect(onChangeFavoriteOffer).toHaveBeenCalledTimes(1);
});
