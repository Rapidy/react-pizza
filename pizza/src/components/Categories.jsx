import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Categories = memo(function Categories(props) {
  const categories =
    props.items &&
    props.items.map((item, i) => (
      <li
        className={props.activeItem === i ? 'active' : ''}
        onClick={() => props.onClickItem(i)}
        key={`${item}_${i}`}>
        {item}
      </li>
    ));

  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => props.onClickItem(null)}
          className={props.activeItem === null ? 'active' : ''}>
          Все
        </li>
        {categories}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeItem: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  // activeItem: null,
  items: [],
};

export default Categories;
