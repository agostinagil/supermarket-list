/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm/LoginForm";

import "./login.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #999999",
  boxShadow: 10,
  p: 4,
};

export default function LoginModal({ open, onClose }) {
  return (
    <div className="login-modal">
      <Modal
        className="modal"
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box-login">
          <Typography
            id="modal-modal-title"
            className="login-title"
            variant="h6"
            component="h2"
          >
            Login
          </Typography>
          <LoginForm onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}
