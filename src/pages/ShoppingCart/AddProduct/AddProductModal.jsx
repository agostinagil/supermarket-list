/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./addProductModal.css";
import { useState } from "react";
import { useCart } from "../../../contexts/ShoppingCart";
import { ADD_TO_CART } from "../../../actions/shoppingCart";

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

const AddProductModal = ({ open, onClose }) => {
  const [errors, setErrors] = useState({ product: "" });

  const { dispatch } = useCart();

  const handleProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = formData.get("product");
    const tempErrors = {};

    if (!product) {
      tempErrors.product = "Fill out this field";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      dispatch({ type: ADD_TO_CART, payload: { product } });
      e.target.reset();
    }
  };

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={onClose}
        arial-labelldby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ boxShadow: "none", border: "none" }}
      >
        <Box sx={style}>
          <Box className="top-add-form-modal">
            <Typography
              id="modal-modal-title"
              variant="h6"
              className="top-add-form-modal-title"
            >
              Add product
            </Typography>
            <CloseIcon className="close-form-icon" onClick={onClose} />
          </Box>
          <form className="add-form" onSubmit={handleProduct}>
            <FormControl
              sx={{ marginY: 3 }}
              fullWidth
              className="add-form-control"
            >
              <InputLabel htmlFor="product" className="add-form-input-label">
                Product
              </InputLabel>
              <Input
                id="prodcut"
                name="product"
                type="text"
                className="add-form-input"
                error={!!errors.product}
              />
              {errors.product && (
                <FormHelperText error>{errors.product}</FormHelperText>
              )}
            </FormControl>
            <Button
              type="submit"
              sx={{ marginTop: 2 }}
              className="add-form-button"
            >
              Add product
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProductModal;
