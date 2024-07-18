import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";
import FavProducts from "../pages/FavProducts/FavProducts";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/fav-products"
          element={
            <PrivateRoute>
              <FavProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <PrivateRoute>
              <ShoppingCart />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
