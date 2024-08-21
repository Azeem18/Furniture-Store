import { useEffect } from "react";
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
    window.scrollTo(0, 0); // Scroll to the top of the page on refresh
    if (window.location.pathname !== "/#home") {
      window.history.replaceState(null, "", "/#home"); //To change path to /#home on refresh
    }
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
