const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const arrItems = [].concat(...Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalItems: arrItems.length,
        totalPrice: arrItems.reduce((sum, item) => item.price + sum, 0),
      };
    default:
      return state;
  }
};

export default cart;
