import React, { useState } from 'react';

export default function Categories(props) {
  const [activeItem, setActiveItem] = useState(null);

  function onSelectItem(i) {
    setActiveItem(i);
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
}
