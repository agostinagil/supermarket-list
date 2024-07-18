import { useState } from "react";
import AddFavModal from "./AddFavModal/AddFavModal";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useProductsContext } from "../../contexts/FavProducts";
import CategoryCard from "./CategoryCards/CategoryCard";

import "./fav-products.css";

const FavProducts = () => {
  const [open, setOpen] = useState(false);

  const { groupedProducts } = useProductsContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box className="fav-products-top">
        <h1>Favorite Products</h1>
        <Typography className="fav-products-description">
          Add the products that you realized are essential for your pantry
        </Typography>
        <Button onClick={handleOpen} className="add-button">
          Add
        </Button>
      </Box>
      <AddFavModal
        open={open}
        onClose={handleClose}
        // setNewProduct={setNewProduct}
      />
      <Grid container spacing={2} className="grid-container">
        {Object.keys(groupedProducts).length > 0 ? (
          Object.keys(groupedProducts).map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CategoryCard
                category={category}
                groupedProducts={groupedProducts}
                key={index}
              />
            </Grid>
          ))
        ) : (
          <h3>No products in the list</h3>
        )}
      </Grid>
      {/* {Object.keys(groupedProducts).length > 0 ? (
        Object.keys(groupedProducts).map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
            <ul>
              {groupedProducts[category].map((product, i) => (
                <li key={i}>{product}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h3>No products in the list</h3>
      )} */}
    </>
  );
};

export default FavProducts;
