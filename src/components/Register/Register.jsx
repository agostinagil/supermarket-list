/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import RegisterForm from "./RegisterForm.jsx/RegisterForm";

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

export default function Register({ open, onClose }) {
  return (
    <div className="login-modal">
      <Modal
        className="modal"
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="box-login">
            <Typography
              id="modal-modal-title"
              className="login-title"
              variant="h6"
              component="h2"
            >
              Create your account
            </Typography>
            <CloseIcon className="close-form-icon" onClick={onClose} />
          </Box>
          <RegisterForm onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}
