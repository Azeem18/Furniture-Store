import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App bg-gray-200">
      <Navbar />
      <Hero />
      <Banner />
    </div>
  );
}

export default App;
