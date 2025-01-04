import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./components/Category/Category";
const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  )
}
export default App