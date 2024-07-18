import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { FavProdsProvider } from "./contexts/FavProducts";
import { ShoppingCartProvider } from "./contexts/ShoppingCart";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <FavProdsProvider>
        <ShoppingCartProvider>
          <AppRoutes />
        </ShoppingCartProvider>
      </FavProdsProvider>
    </AuthProvider>
  );
}

export default App;
