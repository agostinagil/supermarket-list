/* eslint-disable react/prop-types */
import { Card, Divider, Grid, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

import "./category-card.css";
import { useProductsContext } from "../../../contexts/FavProducts";
import { useCart } from "../../../contexts/ShoppingCart";

const CategoryCard = ({ category, groupedProducts }) => {
  const { removeFavorite } = useProductsContext();
  const { state, addToCart } = useCart();

  const productIsInCart = (product) => {
    return state.nextPurchase.some((item) => item.product === product);
  };

  return (
    <>
      <Grid container className="grid-container-category">
        <Card className="card-category">
          <Typography className="card-title-category">{category}</Typography>
          <Divider />
          {groupedProducts[category].map((product) => (
            <Box key={product.id} className="card-product-box">
              <Typography className="card-products" key={product.id}>
                {product.product}
              </Typography>
              <Box className="card-product-actions">
                {productIsInCart(product.product) && (
                  <div className="tooltip">
                    <CheckIcon className="checked-icon" />
                    <span className="tooltiptext">
                      Added to the shopping list
                    </span>
                  </div>
                )}
                <div className="tooltip">
                  <ShoppingCartIcon
                    className="card-product-add-icon"
                    onClick={() => {
                      addToCart({ product: product.product });
                    }}
                  />

                  <span className="tooltiptext">
                    Add product to shopping list
                  </span>
                </div>
                <div className="tooltip">
                  <DeleteIcon
                    className="card-product-delete-icon"
                    onClick={() => removeFavorite(product.id)}
                  />
                  <span className="tooltiptext">Delete</span>
                </div>
              </Box>
            </Box>
          ))}
        </Card>
      </Grid>
    </>
  );
};

export default CategoryCard;
