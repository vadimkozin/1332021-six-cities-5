import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Sort} from './sort';

configure({adapter: new Adapter()});

test(`should Sort was clicked on 'to-high'`, () => {
  const onSortChange = jest.fn();

  const wrapper = mount(
      <Sort
        onSortChange={onSortChange}
      />
  );


  const sort = wrapper.find(`.places__options li`).at(1);
  sort.simulate(`click`);
  expect(onSortChange).toHaveBeenCalledWith(`to-high`);
});
