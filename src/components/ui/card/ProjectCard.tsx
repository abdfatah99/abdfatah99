/**
 * Used by Project Card
 *
 * @returns
 */
import Image from "next/image";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

interface IProjectCard {
  image: string;
  title: string;
  desc: string;
  link?: string;
  website?: string;
  sourceCode?: string;
  goto?: string; // use as "go to the material" in personal-notes
  onClick?: () => void;
}

/** General Type of card
 *
 * Used by
 * - List of Projects
 * - List of main display material in personal-notes
 *
 * @param props
 * @returns
 */
function ProjectCard(props: IProjectCard) {
  return (
    // <div className="flex h-83.75 w-39 flex-col rounded-xl p-4 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
    <div className="flex h-83.75 w-39 flex-col  p-4 shadow-md inset-shadow-2xs">
      <Image
        src={props.image}
        alt={props.title}
        width={100}
        height={100}
        className="m-auto h-21.75 w-32 flex-none rounded-t-xl"
      />
      <div className="mt-2 flex grow flex-col ">
        <div className="grow">
          <Link href={props.link ? props.link : "#"}>
            <h1 className="text-xs font-semibold leading-7">{props.title}</h1>
          </Link>
          <p className="text-xs font-normal text-slate-500">{props.desc}</p>
        </div>

        <div className="flex h-5 flex-row items-center gap-1">
          {props.website ? (
            <>
              <Link href={props.website}>
                <Button
                  className="h-3 px-0 py-0 text-[10px] font-normal"
                  variant={"link"}
                >
                  Website
                </Button>
              </Link>

              <p className="h-3 text-[9px]">|</p>
            </>
          ) : (
            ""
          )}
          {props.goto ? (
            <>
              <Link href={props.goto}>
                <Button
                  className="h-3 px-0 py-0 text-[10px] font-normal text-slate-500"
                  variant={"link"}
                >
                  Learn More
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}

          {props.sourceCode ? (
            <Link href={props.sourceCode ? props.sourceCode : "/"}>
              <Button
                className="h-3 px-0 py-0 text-[10px] font-normal"
                variant={"link"}
              >
                Source Code
              </Button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
