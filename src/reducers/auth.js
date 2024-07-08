import { SET_AUTH, LOGOUT } from "../actions/auth";

export const initialState = {
  isLoggedIn: false,
  jwt: localStorage.getItem("auth"),
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const { jwt } = action.payload;
      return {
        isLoggedIn: true,
        jwt,
      };
    }

    case LOGOUT:
      return {
        isLoggedIn: false,
        jwt: null,
      };
    default:
      return state;
  }
};
