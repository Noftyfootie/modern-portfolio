import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Projects from "../../sections/Projects/Projects";
import Achievements from "../../sections/Achievements/Achievements";
import Articles from "../../sections/Articles/Articles";
import Contact from "../../sections/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Achievements />
        <Articles />
        <Contact />
      </main>
    </>
  );
}

export default Home;
