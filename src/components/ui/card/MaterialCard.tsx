/**
 * MaterialCard component used to represent subject and material, displayed as
 * Card
 *
 * Usage:
 * - display subject of personal notes
 * - display material from subject of material notes
 * - display blog
 *
 * @returns
 */
import Image from "next/image";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

interface MaterialCardProps {
  image?: string;
  title: string;
  desc?: string;
  practiceCode?: string; // use as link to the practice code in github
  materialLink?: string; // use as "go to the material" in personal-notes
  onClick?: () => void;
}

/** General Type of card
 *
 * Used by
 * - List of project
 * - List of main display material in personal-notes
 *
 * @param props
 * @returns
 */
function MaterialCard(props: MaterialCardProps) {
  return (
    // <div className="flex h-83.75 w-39 flex-col rounded-xl p-4 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
    <div className="h-83.75 w-39 bg-light-grey flex flex-col rounded-xl p-4">
      {props.image && (
        <Image
          src={props.image ? props.image : "#"}
          alt={props.title}
          width={100}
          height={100}
          className="h-21.75 m-auto w-32 flex-none rounded-t-xl"
        />
      )}

      <div className="mt-2 flex grow flex-col ">
        <div className="grow">
          {/* {props.materialLink} */}
          <Link href={props.materialLink ? props.materialLink : "#"}>
            <h1 className="mb-2 text-xs font-semibold leading-4">
              {props.title}
            </h1>
          </Link>
          <p className="text-xs font-normal text-slate-500">{props.desc}</p>
        </div>

        <div className="flex h-5 flex-row items-center gap-1">
          {props.materialLink ? (
            <>
              <Link href={props.materialLink}>
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

          {props.practiceCode ? (
            <Link href={props.practiceCode ? props.practiceCode : "/"}>
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

export default MaterialCard;
