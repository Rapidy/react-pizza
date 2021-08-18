import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then((resp) => setPizzas(resp.data.pizzas));
  }, []);

  return (
    <div className='wrapper'>
      <Header />

      <Route exact path='/' render={() => <Home items={pizzas} />} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
