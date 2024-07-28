import {lazy,Suspense} from "react";
const Aside = lazy(()=>import("./Aside"));
const  Video = lazy(()=>import("./Video"));
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section>
        <aside ><Suspense fallback={<div>Loading...</div>}><Aside /></Suspense></aside>
        <main><Suspense fallback={<div>Loading...</div>}><Video /></Suspense></main>
      </section>
    </>
  );
};

export default Hero;
