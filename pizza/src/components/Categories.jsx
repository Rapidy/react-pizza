import React, { memo, useState } from 'react';

const Categories = memo(function Categories(props) {
  const [activeItem, setActiveItem] = useState(null);

  function onSelectItem(i) {
    setActiveItem(i);
    props.onClickItem(i);
  }

  const categories =
    props.items &&
    props.items.map((item, i) => (
      <li
        className={activeItem === i ? 'active' : ''}
        onClick={() => onSelectItem(i)}
        key={`${item}_${i}`}>
        {item}
      </li>
    ));

  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {categories}
      </ul>
    </div>
  );
});

export default Categories;
