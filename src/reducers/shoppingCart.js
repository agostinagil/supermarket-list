import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/shoppingCart";

export const initialState = {
  nextPurchase: JSON.parse(localStorage.getItem("nextPurchase")) || [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newCart = [...state.nextPurchase, action.payload];

      localStorage.setItem("nextPurchase", JSON.stringify(newCart));
      return {
        ...state,
        nextPurchase: newCart,
      };
    }

    case REMOVE_FROM_CART: {
      localStorage.removeItem("nextPurchase");
      return {
        ...state,
        nextPurchase: [],
      };
    }

    default:
      return state;
  }
};
