import { createContext, useContext, useReducer } from "react";
import { favProductsReducer, initialState } from "../reducers/favProducts";
import { REMOVE_FAV } from "../actions/favProducts";

export const ProductsContext = createContext();
const { Provider } = ProductsContext;

// eslint-disable-next-line react/prop-types
export const FavProdsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favProductsReducer, initialState);

  const products = state.favProducts;

  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);

    // acc[category].push(prodName);
    return acc;
  }, {});

  const removeFavorite = (id) => {
    dispatch({ type: REMOVE_FAV, payload: { id } });
  };

  return (
    <Provider value={{ state, dispatch, groupedProducts, removeFavorite }}>
      {children}
    </Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
