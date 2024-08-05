/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useAuth } from "../../../contexts/AuthContext";
import "./loginForm.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#5a5a5a",
            "--TextField-brandBorderHoverColor": "#676767",
            "--TextField-brandBorderFocusedColor": "#83698d",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHovercolor)",
            },
            "&.Mui-focused:after": {
              borderBottom: "2px solid var(--TextField-brandBorderFocusedColor",
            },
          },
        },
      },
    },
  });

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [wrongData, setWrongData] = useState(false);
  const [showPassword, setShowpassword] = useState(false);
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

  const handleShowPassword = () => setShowpassword(!showPassword);

  const outerTheme = useTheme();

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Box className="login-inputs">
            <TextField
              label="Username"
              variant="standard"
              id="username"
              name="username"
            />
            <TextField
              label="Password"
              variant="standard"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </ThemeProvider>
        <Button
          type="submit"
          className="login-form-btn"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          LOGIN
        </Button>
      </form>
      {wrongData && (
        <span className="login-error-msg">
          Usuario o contraseña incorrectos
        </span>
      )}
    </>
  );
};

export default LoginForm;
