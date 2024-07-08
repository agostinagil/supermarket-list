import { ADD_FAV, REMOVE_FAV } from "../actions/favProducts";

export const initialState = {
  favProducts: JSON.parse(localStorage.getItem("favProds")) || [],
};

export const favProductsReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAV: {
      const newFavProds = [...state.favProducts, action.payload];
      localStorage.setItem("favProds", JSON.stringify(newFavProds));
      return {
        ...state,
        favProducts: newFavProds,
      };
    }
    case REMOVE_FAV: {
      const { product, category } = action.payload;
      console.log(action.payload);
      const updatedProducts = state.favProducts.filter(
        (favProduct) =>
          !(favProduct.product === product && favProduct.category === category)
      );
      localStorage.setItem("favProds", JSON.stringify(updatedProducts));
      return {
        ...state,
        favProducts: updatedProducts,
      };
    }
    default:
      return state;
  }
};
