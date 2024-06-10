import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/NavbarAndFooter/HomePage/ExploreTopBooks";
import { Carousel } from "./layouts/NavbarAndFooter/HomePage/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
