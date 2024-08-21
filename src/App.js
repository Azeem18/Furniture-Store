import { useEffect } from "react";
import { scroller } from "react-scroll";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Scroll to the "home" section on page refresh
    scroller.scrollTo("nav", {
      duration: 800,
      delay: 0,
      smooth: "linear",
    });
  }, []);
  return (
    <div className="App">
      <div className="bg-gray-200">
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Services />
        <Testimonial />
        <Blog />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
