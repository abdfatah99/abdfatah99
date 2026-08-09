import Link from "next/link";
import { Button } from "../button";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

interface MaterialCardProps {
  image?: string; // shown at sm+ (vertical layout)
  icon?: React.ReactNode; // shown below sm (horizontal layout)
  title: string;
  desc?: string;
  practiceCode?: string;
  materialLink?: string;
  className?: string;
  onClick?: () => void;
}

/** General Type of card
 *
 * Mobile-first: renders horizontal (icon + content side-by-side) by default,
 * switches to vertical (image on top, content below) at the sm breakpoint.
 *
 * Used by
 * - List of project
 * - List of main display material in personal-notes
 *
 * @param props
 * @returns
 */
function MaterialCard({
  image,
  icon,
  title,
  desc,
  practiceCode,
  materialLink,
  className,
  onClick,
}: MaterialCardProps) {
  return (
    // for next development, current stage is single column grid card
    // <div
    //   className={cn(
    //     "bg-light-grey flex flex-row items-start gap-3 rounded-xl p-4",
    //     "sm:h-83.75 sm:w-39 sm:flex-col sm:items-stretch sm:gap-0",
    //     className,
    //   )}
    //   onClick={onClick}
    // >
      <div
      className={cn(
        "bg-light-grey flex flex-row items-start gap-3 rounded-xl p-4",
        className,
      )}
      onClick={onClick}
    >
      {/* icon — horizontal (mobile) only */}
      {icon && <div className="flex-none sm:hidden">{icon}</div>}

      {/* image — vertical (sm+) only */}
      {/* {image && (
        <Image
          src={image}
          alt={title ?? ""}
          width={100}
          height={100}
          className="h-21.75 m-auto hidden w-32 flex-none rounded-t-xl sm:block"
        />
      )} */}

      <div className="flex grow flex-col sm:mt-2">
        <div className="grow">
          <Link href={materialLink ? materialLink : "#"}>
            <h1 className="mb-1 text-xs font-semibold leading-4 sm:mb-2">
              {title}
            </h1>
          </Link>
          {desc && <p className="text-xs font-normal text-slate-500">{desc}</p>}
        </div>

        <div className="flex h-5 flex-row items-center gap-1">
          {materialLink && (
            <Link href={materialLink}>
              <Button
                className="h-3 px-0 py-0 text-[10px] font-normal text-slate-500"
                variant={"link"}
              >
                Learn More
              </Button>
            </Link>
          )}

          {practiceCode && (
            <Link href={practiceCode}>
              <Button
                className="h-3 px-0 py-0 text-[10px] font-normal"
                variant={"link"}
              >
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MaterialCard;
