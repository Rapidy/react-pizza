import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

import { Categories, PizzaBlock, SortPopup } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Закрытые', 'Острые', 'Гриль'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

export default function Home() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.pizzas.items);
  const pizzas = state.map((obj) => {
    return <PizzaBlock key={obj.id} {...obj} />;
  });

  const onSelectCategory = useCallback((i) => {
    dispatch(setCategory(i));
  }, []);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories onClickItem={onSelectCategory} items={categories} />

          <SortPopup items={sortItems} />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{pizzas}</div>
      </div>
    </div>
  );
}
