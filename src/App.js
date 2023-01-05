import React from "react";
import { BrowserRouter } from 'react-router-dom'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <BrowserRouter>
      <main className="text-gray-400 bg-blue-100 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </BrowserRouter>
  );
}

export default App;
