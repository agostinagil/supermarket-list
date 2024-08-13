import { Container, Typography } from "@mui/material";

import "./about.css";

const About = () => {
  return (
    <>
      <Container className="aboutSection">
        <h2>About Supermarkt</h2>
        <Typography className="aboutText">
          Our mission is to simplify your shopping experience. We know how
          frustrating it can be to forget to buy your favorite products, which
          is why we have created an intuitive and efficient tool to help you
          stay organized.
        </Typography>
        <Typography className="aboutText">
          With our app, you can store a list of favorite products that you never
          want to forget and, with just a few clicks, turn those favorites into
          a shopping list for your next grocery trip.
        </Typography>
        <Typography className="aboutText">
          We are committed to making your shopping easier and more enjoyable.
        </Typography>
        <Typography className="aboutClose">
          {" "}
          Welcome to a new way of organizing your life!
        </Typography>
      </Container>
    </>
  );
};

export default About;
