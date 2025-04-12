// "use client";
// wrong statement:
// here where the context-of-navigation-material exist, because this component
// is the parent of personal-notes-pages;
// - here is the location of Context.provider
// then the children of this page can access the context of the page

// true statement:
// The most up parent of the personal-notes is the `layout`, then you should
// place the Context.provider under in the `layout.tsx`.

import PersonalNotes from "@/components/templates/personal-notes/PersonalNotes";
// import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
// import { useContext } from "react";

function PersonalNotesPage() {
  // const navigationValue = useContext(psContentNavContext);
  // if (!navigationValue) {
  //   throw new Error("psContentNavContext is not provided");
  // }

  // const { nav, setNav } = navigationValue;

  // const navigationAdder = (newNavItem: string) => {
  //   setNav((prevNav) => [...prevNav, ` > ${newNavItem}`]);
  // };

  // const navigationReducer = () => {
  //   setNav((prevNav) => prevNav.slice(0, -1));
  // };

  return <PersonalNotes />;
}
export default PersonalNotesPage;
