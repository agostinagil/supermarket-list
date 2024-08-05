import { useAuth } from "../../contexts/AuthContext";
import Cards from "./Cards/Cards";

import "./dashboard.css";

const Dashboard = () => {
  const { getUserInfo } = useAuth();
  const { name } = getUserInfo();
  return (
    <>
      {name ? (
        <h1 className="welcome-text">Welcome {name} 🥳</h1>
      ) : (
        <h4>Error obteniendo la información del usuario</h4>
      )}
      <Cards />
    </>
  );
};

export default Dashboard;
