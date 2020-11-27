import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SORT_TYPE} from '../../types/types';
import {SortingType} from '../../const';

const sortValues = {
  [SortingType.POPULAR]: `Popular`,
  [SortingType.LOW_TO_HIGH]: `Price: low to high`,
  [SortingType.HIGH_TO_LOW]: `Price: high to low`,
  [SortingType.TOP_RATED_FIRST]: `Top rated first`,
};

const Sort = (props) => {
  const {onSortChange} = props;
  const [sort, setSort] = useState(SortingType.POPULAR);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleSortChange = (evt) => {
    evt.preventDefault();

    const newSort = evt.target.dataset.sort;

    if (newSort !== sort) {
      setSort(newSort);
      onSortChange(newSort);
    }
  };

  const handleMenuToggle = useCallback((evt) => {
    evt.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const list = Object.entries(sortValues).map(([key, value]) => {
    return <li
      key={`${key}`}
      className={`places__option ${key === sort && `places__option--active`}`}
      data-sort={key}
      tabIndex="0">
      {value}
    </li>;
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleMenuToggle}>
        {sortValues[sort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={handleSortChange} className={`places__options places__options--custom ${isMenuOpen && `places__options--opened`}`}>
        {list}
      </ul>
    </form>
  );
};

Sort.propTypes = SORT_TYPE;

const mapDispatchToProps = (dispath) => ({
  onSortChange(sort) {
    dispath(ActionCreator.changeSort(sort));
  },
});

export {Sort};
export default connect(null, mapDispatchToProps)(Sort);
