import { Card, Typography, Box, Divider, Grid, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import "./shopping-cart.css";
import { useCart } from "../../contexts/ShoppingCart";
import { useState } from "react";
import AddProductModal from "./AddProduct/AddProductModal";

const ShoppingCart = () => {
  const { state, removeFromCart } = useCart();
  const [checkedItems, setCheckedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const productChecked = (index) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(index)
        ? prevCheckedItems.filter((item) => item !== index)
        : [...prevCheckedItems, index]
    );
  };

  return (
    <>
      <Box className="shopping-cart-page">
        <Box className="shopping-top">
          <Button className="add-button" onClick={handleOpen}>
            Add product
          </Button>
        </Box>
        <AddProductModal onClose={handleClose} open={open} />
        <Card className="shopping-card">
          <div className="shopping-card-top">
            <Typography className="shopping-card-title" variant="h1">
              My shopping list
            </Typography>
            <div className="shopping-tooltip">
              <DeleteIcon
                className="shopping-delete"
                fontSize="large"
                onClick={() => removeFromCart()}
              />
              <span className="tooltip-text">Delete List</span>
            </div>
          </div>
          <Divider />
          {state.nextPurchase.length > 0 ? (
            state.nextPurchase.map((item, index) => (
              <Grid container key={index} className="shopping-item">
                <Grid item xs={10}>
                  <li className={checkedItems.includes(index) ? "checked" : ""}>
                    {item.product}
                  </li>
                </Grid>
                <Grid item xs={2}>
                  {checkedItems.includes(index) ? (
                    <CloseIcon
                      className="shopping-delete-icon"
                      onClick={() => productChecked(index)}
                    />
                  ) : (
                    <CheckIcon
                      className="shopping-check-icon"
                      onClick={() => productChecked(index)}
                    />
                  )}
                </Grid>
              </Grid>
            ))
          ) : (
            <p>No products here</p>
          )}
        </Card>
      </Box>
    </>
  );
};

export default ShoppingCart;
