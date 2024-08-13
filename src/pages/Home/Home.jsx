import About from "./About/About";
import HeroImage from "./HeroImage/HeroImage";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";

import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroImage />

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
