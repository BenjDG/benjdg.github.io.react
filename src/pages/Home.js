import React from "react";
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Sites from '../components/Sites';

function Home() {
  return (
    <div>
      <Nav />
      <About />
      <Sites />
      <Contact />
    </div>
  );
}

export default Home;