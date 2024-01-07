import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";

// you can import an image and rename it like this, but i this is too much
// import profileFoto from "../../../public/navbar/profile-foto.png"

function Navbar() {
  return (
    <>
      <nav className="container flex h-16 flex-row items-center justify-between">
        <div className="flex flex-row justify-center space-x-2">
          <Image
            src={"/navbar/profile-foto.png"}
            alt="Profile Foto"
            width={100}
            height={100}
            className="h-[33px] w-[33px] rounded-full "
          />
          <Image
            src={"/navbar/Abdul Fatah.svg"}
            alt="Fatah Name"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-row space-x-5 items-center">
          <SlMenu />
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
