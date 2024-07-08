/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  Typography,
  OutlinedInput,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./add-fav-modal.css";
import { useState } from "react";
import { useProductsContext } from "../../../contexts/FavProducts";
import { ADD_FAV } from "../../../actions/favProducts";

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

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddFavModal = ({ open, onClose }) => {
  const categories = [
    "Vegetables",
    "Fruits",
    "Meat & Seafood",
    "Snacks",
    "Beverages",
    "Dairy & Eggs",
    "Canned Goods",
    "Bakery",
    "Frozen Foods",
    "Pantry Staples",
    "Personal Care",
    "Household Items",
    "Others",
  ];

  const [category, setCategory] = useState("");
  const { dispatch } = useProductsContext();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = formData.get("product");
    const category = formData.get("category");

    dispatch({ type: ADD_FAV, payload: { product, category } });
    e.target.reset();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        boxShadow: "none",
        border: "none",
      }}
    >
      <Box sx={style}>
        <Box className="top-add-form-modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="top-add-form-modal-title"
          >
            Add your favorite products
          </Typography>
          <CloseIcon className="add-form-icon" onClick={onClose} />
        </Box>

        <form onSubmit={handleProduct} className="add-form">
          <FormControl
            sx={{ marginY: 3 }}
            fullWidth
            className="add-form-form-control"
          >
            <InputLabel htmlFor="product" className="add-form-input-label">
              Products name
            </InputLabel>
            <Input
              id="product"
              name="product"
              type="text"
              required
              className="add-form-input"
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginY: 3 }}>
            <InputLabel id="category">Category</InputLabel>
            <Select
              id="category"
              name="category"
              label="Category"
              value={category}
              onChange={handleChange}
              MenuProps={MenuProps}
              input={<OutlinedInput label="Category" />}
            >
              {categories.map((category, i) => (
                <MenuItem key={i} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
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
  );
};

export default AddFavModal;
