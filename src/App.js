import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App ">
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
    </div>
  );
}

export default App;
