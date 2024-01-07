import React from "react";
import Navbar from "../../organism/Navbar";
import Footer from "../../organism/Footer";
import WelcomeText from "./WelcomeText";
import Project from "./Project";
import Experience from "./Experience";

function Home() {
  return (
    <>
      <Navbar />

      {/* -- Welcome Text */}
      <WelcomeText />

      {/* -- Project */}
      <Project />

      {/* -- Experience */}
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
