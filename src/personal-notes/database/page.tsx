"use client";
import React, { useContext } from "react";
import IntroPostgree from "./content/001-intro-to-postgre.mdx";
import Navbar from "@/components/organism/Navbar";
import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
import ContentNavigation from "@/components/molecule/notes-content-navigation";

function DatabasePage() {
  const navigationValue = useContext(psContentNavContext);
  if (!navigationValue) {
    throw new Error("psContentNavContext is not provided");
  }
  const { nav, setNav } = navigationValue;

  return (
    <>
      <Navbar />
      <div className="container">
        <ContentNavigation nav={nav}></ContentNavigation>
        database page (Home)
        <IntroPostgree />
      </div>
    </>
  );
}

export default DatabasePage;
