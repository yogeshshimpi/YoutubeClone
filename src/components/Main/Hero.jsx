import React from "react";
import Aside from "./Aside";
import Video from "./Video";
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section>
        <aside ><Aside /></aside>
        <main><Video /></main>
      </section>
    </>
  );
};

export default Hero;
