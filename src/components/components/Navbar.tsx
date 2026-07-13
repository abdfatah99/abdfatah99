import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";
import config from "@/src/utils/config";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

// todo
// home page: pocket prime (with logo)
// about me: abdul fatah (with my foto)

function Navbar() {
  return (
    <>
      <nav className="shadow-lg">
        <div className="container flex h-16 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Image
                    src={"/navbar/profile-foto.png"}
                    alt="Profile Foto"
                    width={100}
                    height={100}
                    className="h-8.25 w-8.25 rounded-full bg-red-300"
                    priority
                  />
                </DialogTrigger>

                <DialogContent className="sm:max-w-106.25 rounded-full">
                  <DialogTitle></DialogTitle>
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
                <span className="text-lg font-black uppercase tracking-tighter text-zinc-900">
                  ABDUL FATAH
                </span>
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
                    <SheetClose asChild key={index.toString()}>
                      <Link
                        // key={index.toString()}
                        href={`/${menu.link}`}
                        className="cursor-pointer text-sm text-slate-400
                               hover:text-slate-900"
                      >
                        {menu.name}
                      </Link>
                    </SheetClose>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {/* <hr /> */}
    </>
  );
}

export default Navbar;
