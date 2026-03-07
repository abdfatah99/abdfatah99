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
} from "@/src/components/ui/sheet";

import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";
import config from "@/src/utils/config";
import { Dancing_Script } from "next/font/google";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

function Navbar() {
  return (
    <>
      <nav className="container flex h-16 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Image
                  src={"/navbar/profile-foto.png"}
                  alt="Profile Foto"
                  width={100}
                  height={100}
                  className="h-[33px] w-[33px] rounded-full bg-red-300"
                  priority
                />
              </DialogTrigger>

              <DialogContent className="rounded-3xl sm:max-w-[425px]">
                <Image
                  src={"/navbar/profile-foto.png"}
                  alt="Profile Foto"
                  width={100}
                  height={100}
                  className="h-full w-full rounded-full"
                  priority
                />
              </DialogContent>
            </form>
          </Dialog>

          <Link href={"/"} className="flex flex-row justify-center space-x-2">
            <div className="w-auto text-center">
              <div className={dancing_script.className}>
                <p className="h-[33px] text-2xl font-medium">Abdul Fatah</p>
              </div>
            </div>
          </Link>
        </div>

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
