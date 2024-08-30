import ShortUniqueId from "short-unique-id";

import { ADD_FAV, REMOVE_FAV } from "../actions/favProducts";

export const initialState = {
  favProducts: JSON.parse(localStorage.getItem("favProds")) || [],
};

export const favProductsReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAV: {
      const uid = new ShortUniqueId({ length: 10 });
      console.log(uid);
      const newFavProds = [
        ...state.favProducts,
        { ...action.payload, id: uid.rnd() },
      ];
      localStorage.setItem("favProds", JSON.stringify(newFavProds));
      return {
        ...state,
        favProducts: newFavProds,
      };
    }
    case REMOVE_FAV: {
      const { id } = action.payload;
      console.log(action.payload);
      const updatedProducts = state.favProducts.filter(
        (favProduct) => favProduct.id !== id
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
