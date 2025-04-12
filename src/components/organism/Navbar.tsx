import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";
import config from "@/lib/constants";

import profilePhoto from "../../../public/navbar/profile-foto.png";

// you can import an image and rename it like this, but i this is too much
// import profileFoto from "../../../public/navbar/profile-foto.png"

function Navbar() {
  return (
    <>
      <nav className="container flex h-16 flex-row items-center justify-between">
        <Link href={"/"} className="flex flex-row justify-center space-x-2">
          <Image
            src={"/navbar/profile-foto.png"}
            alt="Profile Foto"
            width={100}
            height={100}
            className="h-[33px] w-[33px] rounded-full bg-red-300"
            priority
          />
          {/* untrigger aspect ratio warning */}
          <Image
            src={"/navbar/Abdul Fatah.svg"}
            alt="Fatah Name"
            width="0"
            height="0"
            // style={{ height: "33px", width: "auto" }}
            className="h-[33px] w-auto"
            // className=" bg-yellow-500"
            priority
          />
        </Link>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle
                className="flex flex-row items-center justify-start 
                           gap-2"
              >
                <LayersIcon />
                Fatah Space
              </SheetTitle>
              <SheetDescription className="flex flex-col items-start gap-2">
                {config.navbarMenu.map((menu: any, index) => (
                  <Link
                    key={index.toString()}
                    href={`/${menu.link}`}
                    className="cursor-pointer text-sm text-slate-400
                               hover:text-slate-900"
                  >
                    {menu.name}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet></Sheet>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
