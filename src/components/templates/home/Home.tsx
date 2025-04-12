import React from "react";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import WelcomeText from "./welcomeText";
import Project from "./project";
import Experience from "./experience";

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
