import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3001/pizzas')
      .then((resp) => dispatch(setPizzas(resp.data)));
  }, []);

  return (
    <div className='wrapper'>
      <Header />

      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
