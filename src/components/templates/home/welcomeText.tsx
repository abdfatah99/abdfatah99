import Image from "next/image";
import React from "react";

function WelcomeText() {
  return (
    <div className="container mb-6">
      {/* WELCOME TEXT */}
      <div className="m-auto mb-7 mt-9 flex w-[276px] flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">SOFTWARE ENGINEER</h1>

        <div className="w-[276px] items-center text-center text-gray-500">
          <p className="text-center text-xs font-normal">
            Eager to learn new things, active, and delighted to meet with new
            people
          </p>
        </div>
      </div>

      {/* TECH STACK */}
      <p className="m-auto mb-6 text-center text-xs text-gray-500">
        Tech Stack
      </p>

      {/* TECHNOLOGY ITEM */}
      <div className="grid grid-cols-5 items-center justify-items-center gap-2 gap-y-4">
        <Image
          src={"/icons/001-html-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-7"
        />
        <Image
          src={"/icons/002-css-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-7"
        />
        <Image
          src={"/icons/003-typescript-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-6"
        />
        <Image
          src={"/icons/004-react-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-7"
        />
        <Image
          src={"/icons/005-nextjs-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-8"
        />
        <Image
          src={"/icons/006-nestjs-logo.svg"}
          alt="HTML"
          width={100}
          height={100}
          className="w-7"
        />
        <Image
          src={"/icons/007-mongodb-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-7"
        />
        <Image
          src={"/icons/008-postgress-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-9"
        />
        <Image
          src={"/icons/009-rest-api-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-10"
        />
        <Image
          src={"/icons/010-python-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-8"
        />
        <Image
          src={"/icons/011-docker-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-10"
        />
        <Image
          src={"/icons/012-go-logo.png"}
          alt="HTML"
          width={100}
          height={100}
          className="w-10"
        />
      </div>
    </div>
  );
}

export default WelcomeText;
