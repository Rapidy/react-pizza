import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';

export default function Home({ items }) {
  const pizzas = items.map((obj) => {
    return <PizzaBlock key={obj.id} {...obj} />;
  });

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            onClickItem={(category) => console.log(category)}
            items={['Мясные', 'Вегетарианская', 'Закрытые', 'Острые', 'Гриль']}
          />

          <SortPopup items={['популярности', 'цене', 'алфавиту']} />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{pizzas}</div>
      </div>
    </div>
  );
}
