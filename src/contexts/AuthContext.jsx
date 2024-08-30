/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { jwtDecode } from "jwt-decode";

import { LOGOUT, SET_AUTH } from "../actions/auth";
import { authReducer, initialState } from "../reducers/auth";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("auth")) return true;
    return false;
  };

  const getUserInfo = () => {
    if (!state.jwt) {
      return null;
    }
    try {
      return jwtDecode(state.jwt);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  };

  const login = ({ email, password }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("User doesn't exists");
      return null;
    }

    if (email === user.email && password === user.password) {
      const { jwt } = {
        ok: true,
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM",
      };
      setAuth({ jwt });
      localStorage.setItem("auth", jwt);
      return jwt;
    } else {
      return null;
    }
  };

  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } });
  };

  return (
    <Provider value={{ logout, isLoggedIn, getUserInfo, login, setAuth }}>
      {children}
    </Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be wrapped with AuthProvider");
  return context;
};
