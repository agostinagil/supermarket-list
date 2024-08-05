import { Card, Typography, Box, Divider, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import "./shopping-cart.css";
import { useCart } from "../../contexts/ShoppingCart";
import { useState } from "react";

const ShoppingCart = () => {
  const { state } = useCart();
  const [checkedItems, setCheckedItems] = useState([]);

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
        <Card className="shopping-card">
          <Typography className="shopping-card-title">
            My shopping list
          </Typography>
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
