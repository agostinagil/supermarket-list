/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../../contexts/AuthContext";
import "./loginForm.css";

import Form from "../../Form/Form";

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [wrongData, setWrongData] = useState(false);

  const { login } = useAuth();

  const handleLogin = (formData) => {
    const { email, password } = formData;
    console.log(email, password);

    const jwt = login({ email, password });

    if (!jwt) return setWrongData(true);

    setWrongData(false);
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      <Form onSubmit={handleLogin} buttonContent="Login" />
      {wrongData && (
        <span className="login-error-msg">
          Usuario o contraseña incorrectos
        </span>
      )}
    </>
  );
};

export default LoginForm;
