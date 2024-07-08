/* eslint-disable react/prop-types */
import { Card, Divider, Grid, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "./category-card.css";
import { useProductsContext } from "../../../contexts/FavProducts";

const CategoryCard = ({ category, groupedProducts }) => {
  const { removeFavorite } = useProductsContext();

  return (
    <>
      <Grid container spacing={2} className="grid-container-category">
        <Card className="card-category">
          <Typography className="card-title-category">{category}</Typography>
          <Divider />
          {groupedProducts[category].map((product, i) => (
            <Box key={i} className="card-product-box">
              <Typography className="card-products-category" key={i}>
                {product}
              </Typography>
              <div className="tooltip">
                <DeleteIcon
                  className="card-product-delete-icon"
                  onClick={() => removeFavorite({ product, category })}
                />
                <span className="tooltiptext">Delete</span>
              </div>
            </Box>
          ))}
        </Card>
      </Grid>
    </>
  );
};

export default CategoryCard;
