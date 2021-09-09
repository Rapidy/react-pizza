import React from 'react';
import ContentLoader from 'react-content-loader';

export default function PizzaLoader() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={480}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='136' cy='130' r='125' />
      <rect x='0' y='275' rx='6' ry='6' width='280' height='24' />
      <rect x='0' y='315' rx='6' ry='6' width='280' height='83' />
      <rect x='0' y='420' rx='6' ry='6' width='90' height='26' />
      <rect x='129' y='410' rx='20' ry='20' width='150' height='44' />
    </ContentLoader>
  );
}
