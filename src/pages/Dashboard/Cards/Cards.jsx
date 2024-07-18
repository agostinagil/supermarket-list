import { Grid, Card, CardMedia, Typography, Button } from "@mui/material";

import foodImage from "../../../assets/food.jpeg";
import cartImage from "../../../assets/shopping-cart.jpeg";
import "./cards.css";

const Cards = () => {
  return (
    <Grid container spacing={2} className="grid-container">
      <Grid xs={4}>
        <Card sx={{ minWidth: 275 }} className="grid-card">
          <CardMedia
            component="img"
            height="194"
            image={foodImage}
            alt="Food"
            className="grid-card-img"
          />
          <Typography variant="h5" component="div" className="grid-card-title">
            My favorite products
          </Typography>

          <Typography variant="body2" className="grid-card-text">
            Create a list of essential products for your pantry
          </Typography>
          <a href="/fav-products">
            <Button className="grid-card-btn">Go!</Button>
          </a>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card sx={{ minWidth: 275 }} className="grid-card">
          <CardMedia
            component="img"
            height="194"
            image={cartImage}
            alt="Shopping cart"
            className="grid-card-img"
          />
          <Typography variant="h5" component="div" className="grid-card-title">
            My grocery list
          </Typography>
          <Typography variant="body2" className="grid-card-text">
            Here you can find the list for your next purchase
          </Typography>
          <a href="/shopping-cart">
            <Button className="grid-card-btn">Go!</Button>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
