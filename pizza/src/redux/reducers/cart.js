const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      const currentPizzas = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzas,
          sum: currentPizzas.reduce((sum, item) => item.price + sum, 0),
        },
      };

      const arrItems = [].concat(...Object.values(newItems).map((obj) => obj.items));

      return {
        ...state,
        items: newItems,
        totalItems: arrItems.length,
        totalPrice: arrItems.reduce((sum, item) => item.price + sum, 0),
      };
    }

    case 'REMOVE_PIZZA': {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].sum;
      const currentTotalItems = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalItems: state.totalItems - currentTotalItems,
      };
    }

    case 'PLUS_PIZZA': {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newState = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          sum: newItems.reduce((sum, item) => item.price + sum, 0),
        },
      };

      const totalItems = Object.keys(newState).reduce(
        (sum, key) => newState[key].items.length + sum,
        0,
      );

      const totalPrice = Object.keys(newState).reduce(
        (sum, key) => newState[key].sum + sum,
        0,
      );

      return {
        ...state,
        items: newState,
        totalPrice,
        totalItems,
      };
    }

    case 'MINUS_PIZZA': {
      const oldItems = state.items[action.payload].items;
      const newItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      const newState = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          sum: newItems.reduce((sum, item) => item.price + sum, 0),
        },
      };

      const totalItems = Object.keys(newState).reduce(
        (sum, key) => newState[key].items.length + sum,
        0,
      );

      const totalPrice = Object.keys(newState).reduce(
        (sum, key) => newState[key].sum + sum,
        0,
      );

      return {
        ...state,
        items: newState,
        totalPrice,
        totalItems,
      };
    }

    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        totalItems: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
