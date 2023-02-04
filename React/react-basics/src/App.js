import React from "react";
import logo from "./logo.svg";
import { Blog, Features, Footer, Header, Possibility } from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import "./dist/css/App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
