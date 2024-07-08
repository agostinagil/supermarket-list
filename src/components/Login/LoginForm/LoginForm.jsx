/* eslint-disable react/prop-types */
import { FormControl, InputLabel, Input, Button } from "@mui/material";

import "./loginForm.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [wrongData, setWrongData] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("username"));
    const username = formData.get("username");
    const password = formData.get("password");

    const jwt = login({ username, password });

    console.log(formData);
    if (!jwt) return setWrongData(true);

    setWrongData(false);
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <FormControl>
          <InputLabel htmlFor="username" mb={4}>
            Usuername
          </InputLabel>
          <Input
            id="username"
            name="username"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
          LOGIN
        </Button>
      </form>
      {wrongData && <span>Usuario o contraseña incorrectos</span>}
    </>
  );
};

export default LoginForm;
