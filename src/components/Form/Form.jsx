/* eslint-disable react/prop-types */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  createTheme,
  IconButton,
  InputAdornment,
  useTheme,
  Button,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

import "./form.css";

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

const Form = ({ onSubmit, buttonContent }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const outerTheme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Box className="login-inputs">
          <TextField
            label="Email"
            variant="standard"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
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
        {buttonContent}
      </Button>
    </form>
  );
};

export default Form;
