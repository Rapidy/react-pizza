import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

import { Categories, PizzaBlock, PizzaLoader, SortPopup } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Закрытые', 'Острые', 'Гриль'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

export default function Home() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const filters = useSelector((state) => state.filters);

  useEffect(() => dispatch(fetchPizzas(filters)), [filters]);

  const pizzas = isLoaded
    ? state.map((obj) => {
        return <PizzaBlock key={obj.id} {...obj} />;
      })
    : Array(12)
        .fill(0)
        .map((item, i) => <PizzaLoader key={i} />);

  const onSelectCategory = useCallback((i) => {
    dispatch(setCategory(i));
  }, []);

  const onSelectSort = useCallback((sortType) => {
    dispatch(setSortBy(sortType));
  }, []);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            activeItem={filters.category}
            onClickItem={onSelectCategory}
            items={categories}
          />

          <SortPopup
            onClickItem={onSelectSort}
            activeItem={filters.sortBy.type}
            items={sortItems}
          />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{pizzas}</div>
      </div>
    </div>
  );
}
