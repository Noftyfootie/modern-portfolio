import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import Projects from "../../sections/Projects/Projects";
import Achievements from "../../sections/Achievements/Achievements";
import Skills from "../../sections/Skills/Skills";
import Contact from "../../sections/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
