import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


const App = () => {
  return (
    <>
      {/* Header component */}
      <Header />
      {/* Hero section */}
      <Hero />
      {/* About me component */}
      <About />
      {/* Projects component */}
      <Projects />
      {/* Footer component */}
      <Footer />
    </>
  );
}

export default App;
