import { Box } from "@mui/material";

import "./features.css";
import FeaturesCard from "./FeaturesCard/FeaturesCard";

const Features = () => {
  const feats = [
    {
      title: "Favorite Lists",
      description: "Save your essential products so you never forget them.",
    },
    {
      title: "Shopping List",
      description: "Easily generate shopping lists from your favorites.",
    },
    {
      title: "Intuitive Interface",
      description: "Simple navigation and user-friendly design.",
    },
    {
      title: "Expense Tracking",
      description:
        "[Coming soon] Enter the cost of each item and get an estimated total for your next shopping trip",
    },
  ];

  return (
    <>
      <div className="featuresContainer">
        <Box className="featuresBox">
          <h2>Features</h2>
          <FeaturesCard feats={feats} />
        </Box>
      </div>
    </>
  );
};

export default Features;
