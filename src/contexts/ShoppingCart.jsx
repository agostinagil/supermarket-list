/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/shoppingCart";
import { ADD_TO_CART } from "../actions/shoppingCart";

export const ShoppingCartContext = createContext();

const { Provider } = ShoppingCartContext;

export const ShoppingCartProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = ({ product }) => {
    dispatch({ type: ADD_TO_CART, payload: { product } });
  };

  return <Provider value={{ state, addToCart }}>{children}</Provider>;
};

export const useCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context)
    throw new Error("useCart must be initialized within ShoppingCartProvider ");
  return context;
};
