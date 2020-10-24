import React from 'react';
import {SORT_TYPE} from '../../types/types';
import {SortingType} from '@const';

const sortValues = {
  [SortingType.POPULAR]: `Popular`,
  [SortingType.LOW_TO_HIGH]: `Price: low to high`,
  [SortingType.HIGH_TO_LOW]: `Price: high to low`,
  [SortingType.TOP_RATED_FIRST]: `Top rated first`,
};

const Sort = (props) => {
  const {sortActive, onSortChange} = props;

  const onClick = (evt) => {
    evt.preventDefault();

    const newSortActive = evt.target.dataset.sort;

    if (newSortActive !== sortActive) {
      onSortChange(newSortActive);
    }
  };

  const list = Object.entries(sortValues).map(([key, value]) => {
    return <li
      key={`${key}`}
      className={`places__option ${key === sortActive && `places__option--active`}`}
      data-sort={key}
      tabIndex="0">
      {value}
    </li>;
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortValues[sortActive]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick = {onClick} className="places__options places__options--custom places__options--opened">
        {list}
      </ul>
    </form>
  );
};

Sort.propTypes = SORT_TYPE;

export default Sort;

