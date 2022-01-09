import React, {useState} from 'react';
import {SortState} from '../../constants';
import {SORT_TYPES} from '../types';

export const Sort = ({sortState, onSortChange}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortMenuOpen = () => {
    setIsOpened(!isOpened);
  };

  const handleSortMenuClose = (sortType) => {
    setIsOpened(false);
    onSortChange(sortType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleSortMenuOpen}
      >
        {sortState}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={
          isOpened ?
            `places__options places__options--custom places__options--opened` :
            `places__options places__options--custom`
        }
      >
        {Object.entries(SortState).map((item) => <li
          onClick={() => handleSortMenuClose(item[0])}
          key={item}
          className="places__option"
          tabIndex="0">{item[1]}</li>)}
      </ul>
    </form>
  );
};

Sort.propTypes = SORT_TYPES;
