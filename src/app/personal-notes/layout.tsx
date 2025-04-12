// "use client";
// import { useState } from "react";
// import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Logger } from "@/lib/logging";
import Navbar from "@/components/organism/Navbar";

interface Params {
  slug: string | string[];
}

const log = new Logger("src/app/personal-notes/layout.tsx");

export default async function PersonalNotesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // params: Params;
  params: Promise<{ category: string | string[] }>;
}) {

  // Development Notes - 12/04/2025
  /**
   * Development Notes - 12/04/2025
   * Per
   */

  const { category } = await params || {}; // Optional chaining in case params is undefined

  if (!category) {
    // Render a list of categories if no specific slug is selected
    const categories = fs.readdirSync(
      path.join("src", "personal-notes", "content"),
    );

    log.logContext("Read Personal Notes Directory Content (readdirSync): ", {
      categories,
    });

    log.logFlow("Check Slug", { category })

    return (
      <div className="">
        <Navbar />
        <div className="">{children}</div>
        {/* <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/personal-notes/${category}`}>{category}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }


  return (
    <div>
      slug exist
      {`Params: ${params}`}
      {children}
    </div>
  );
}
