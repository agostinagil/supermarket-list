import { Box } from "@mui/material";

import "./testimonials.css";
import TestimonialSlider from "./Slider/TestimonialSlider";

const testimonials = [
  {
    name: "John Harris",
    testimonial:
      "This app has completely transformed the way I do my grocery shopping. No more forgotten items! It's a lifesaver.",
  },
  {
    name: "Emily Carter",
    testimonial:
      "I love how easy it is to organize my shopping lists. The reminders are a game-changer. Highly recommended!",
  },
  {
    name: "Michael Thompson",
    testimonial:
      "As someone who always forgets things at the store, this app has been a godsend. It’s simple and effective.",
  },
  {
    name: "Jessica Adams",
    testimonial:
      "Creating lists is now a breeze. The interface is user-friendly, and it helps me save so much time and hassle.",
  },
  {
    name: "David Brooks",
    testimonial:
      "Finally, a shopping list app that actually works. It keeps me organized and ensures I never miss a thing.",
  },
  {
    name: "Sarah Miller",
    testimonial:
      "This app is fantastic! It’s incredibly intuitive and has made my grocery shopping so much more efficient.",
  },
  {
    name: "Daniel White",
    testimonial:
      "A must-have for anyone who wants to stay on top of their shopping. It’s reliable and easy to use.",
  },
];

const Testimonials = () => {
  return (
    <>
      <Box className="testimonialsSection">
        <h2>What Our Clients Say</h2>
        <Box className="testimonialsBox">
          <TestimonialSlider testimonials={testimonials} />
        </Box>
        <Box className="dotsContainer"></Box>
      </Box>
    </>
  );
};

export default Testimonials;
