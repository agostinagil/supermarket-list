/* eslint-disable react/prop-types */
import { Box, Card, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import "./testimonialCard.css";

const TestimonialCard = ({ testimonials }) => {
  return (
    <>
      <Card className="testimonialCard">
        <Box className="probando">
          <Box className="testimonialCardHeader">
            <CircleIcon className="testimonialAvatar" />
          </Box>

          <Box className="testimonialCardContent">
            <Typography>{testimonials.name}</Typography>
            <Typography>{testimonials.testimonial}</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TestimonialCard;
