import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Services } from "./components/services/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
