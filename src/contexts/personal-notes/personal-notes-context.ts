"use client";
import React, { createContext } from "react";

interface IpsContentNavContext {
  /**
   * Note: ps == personal notes
   * 
   * from chatGPT
   * - The setNav function now accepts a parameter (newNav: string[])
   *   representing the new value for the nav array.
   * - The return type of setNav is set to void assuming it's intended to be a
   *   function that sets the context state without returning anything.
   */
  nav: string[];
  //   setNav: (newNav: string[]) => void;
  setNav: React.Dispatch<React.SetStateAction<string[]>>;
}

// const psContentNavContext = createContext<IpsContentNavContext>({
//   nav: [],
//   setNav: () => {},
// });

const psContentNavContext = createContext<IpsContentNavContext | undefined>(
  undefined,
);

export { psContentNavContext };
