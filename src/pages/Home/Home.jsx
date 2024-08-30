import About from "./About/About";
import HeroImage from "./HeroImage/HeroImage";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";

import "./Home.css";

const sections = [
  { id: "About", compt: About },
  { id: "Features", compt: Features },
  { id: "Testimonials", compt: Testimonials },
];

const Home = () => {
  return (
    <>
      <HeroImage />

      {sections.map((section) => {
        const Comp = section.compt;
        const sectionId = section.id.toLowerCase();

        return (
          <section key={sectionId} id={sectionId}>
            <Comp />
          </section>
        );
      })}

      {/* <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section> */}
    </>
  );
};

export default Home;
