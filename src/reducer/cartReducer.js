const initialCartSate = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const found = state.cartData.find((item) => {
        return item.id === action.payload.id;
      });
      if (!found) {
        return {
          ...state,
          cartData: [...state.cartData, { ...action.payload, showCart: true }],
        };
      } else {
        const updatedCart = state.cartData.map((cart) => {
          if (cart.id === action.payload.id) {
            return { ...cart, showCart: !cart.showCart };
          } else {
            return cart;
          }
        });
        return {
          ...state,
          cartData: [...updatedCart],
        };
      }
      break;
    }

    case "REMOVE_FROM_CART": {
      const updatedItem = state.cartData.filter(
        (cart) => cart.id !== action.payload
      );
      return {
        ...state,
        cartData: [...updatedItem],
      };
      break;
    }

    default: {
      return state;
    }
  }
};

export { cartReducer, initialCartSate };
