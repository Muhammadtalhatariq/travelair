import React from "react";
import Hero from "./components/Home/page.jsx";
import Experience from "./components/Experience/page.jsx";
import Explore from "./components/Explore/page.jsx"
import Contact from "./components/Contact/page.jsx"
import OurTeam from './components/Ourteam/page.jsx'
import Services from './components/Services/page.jsx'
import Airlines from './components/Airlines/page.jsx'
import Footer from './components/Footer/page.jsx'

const page = () => {
  return (
    <div className="!scroll-smooth">
      <Hero />
      <Experience />
      <Explore/>
      <OurTeam/>
      <Contact/>
      <Services/>
      <Airlines/>
      <Footer/>
    </div>
  );
};

export default page;
