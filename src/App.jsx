import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { FavProdsProvider } from "./contexts/FavProducts";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <FavProdsProvider>
        <AppRoutes />
      </FavProdsProvider>
    </AuthProvider>
  );
}

export default App;
