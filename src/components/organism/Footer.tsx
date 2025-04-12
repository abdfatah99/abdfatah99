import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="container mb-8 grid grid-cols-2 gap-x-4">
      <div className="">
        <p className="text-xs font-normal text-gray-500">
          Ilmu adalah yang memberikan manfaat, bukan yang sekadar hanya dihafal.
          <br />
          <br />
          Imam Syafi&apos;i
        </p>
      </div>
      <div className="ml-8">
        <p className="text-xs font-normal text-gray-500">Contact</p>
        <div className="mt-2 flex flex-row items-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/Footer/Linkedin.svg"}
              alt="Linkedin"
              width={100}
              height={100}
              className="h-4 w-4"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/Footer/Gmail.svg"}
              alt="Linkedin"
              width={100}
              height={100}
              className="h-4 w-4"
            />
          </Link>

          <Link href={"/"}>
            <Image
              src={"/Footer/Twitter.svg"}
              alt="Linkedin"
              width={100}
              height={100}
              className="h-3 w-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
