import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload: payload,
});

export const fetchPizzas = (filter) => (dispatch) => {
  dispatch(setLoaded(false));

  axios
    .get(
      `http://localhost:3001/pizzas?${
        filter.category !== null ? `category=${filter.category}` : ''
      }&_sort=${filter.sortBy.type}&_order=${filter.sortBy.order}`,
    )
    .then((resp) => dispatch(setPizzas(resp.data)));
};

export const setPizzas = (pizzas) => ({
  type: 'SET_PIZZAS',
  payload: pizzas,
});
