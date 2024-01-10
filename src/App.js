import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/scrollButton/ScrollButton";
import SignUp from "./components/signup/SignUp";
// import SignIn from './components/signup/SignIn';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<SignUp/>} />
          {/* <Route path="/SignIn" element={<SignIn />} /> */}
        </Routes>
        <div>
     <Hero/>
          <Element name="About">
            <About />
          </Element>
          <Element name="Service">
            <Service />
          </Element>
          <Element name="Portfolio">
            <Portfolio />
          </Element>
          <Element name="Blog">
            <Blog />
          </Element>
          <Element name="Contact">
            <Contact />
          </Element>
          <Footer />
          <ScrollButton />
        </div>
        
      </div>

    </Router>
  );
};

export default App;
