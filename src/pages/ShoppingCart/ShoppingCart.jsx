import { Card, Typography, Box, Divider } from "@mui/material";

import "./shopping-cart.css";
import { useCart } from "../../contexts/ShoppingCart";

const ShoppingCart = () => {
  const { state } = useCart();
  //   const products = state.nextPurchase;
  //   console.log(state);
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
              <li key={index}>{item.product}</li>
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
