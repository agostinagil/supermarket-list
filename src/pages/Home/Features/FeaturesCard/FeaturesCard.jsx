/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import "./features-card.css";

const FeaturesCard = ({ feats }) => {
  return (
    <>
      <Grid container className="featuresGrid">
        {feats.map((feat) => (
          <Grid item key={feat.title}>
            <Card key={feat.title} className="featuresCard">
              <Box className="featuresCardHeader">
                <CircleIcon className="featuresCardAvatar" />
                <Typography className="featuresCardTitle" component="div">
                  {feat.title}
                </Typography>
              </Box>
              <CardContent>
                <Typography className="featuresCardDescription" variant="body2">
                  {feat.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FeaturesCard;
