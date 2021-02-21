import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Product />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
