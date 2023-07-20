import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Authentication />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
