/**
 * 

Example Usage 

// Image 3 — vertical
<MaterialCard
  variant="vertical"
  image="/logos/mysql.png"
  title="MySQL"
  desc="For Small to medium scale app"
  materialLink="/notes/mysql"
/>

// Image 1 — horizontal with icon
<MaterialCard
  variant="horizontal"
  icon={<Database className="h-6 w-6" />}
  title="Database"
  desc="Database Personal Notes"
  items={["SQL Database", "NoSQL Database"]}
  updatedAt="January 2024"
/>

// Image 2 — horizontal without icon
<MaterialCard
  variant="horizontal"
  title="UI/UX"
  desc="Minimum UI/UX for Software Engineer"
  updatedAt="January 2024"
/>
 */


import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import { Button } from "@src/components/ui/button";

const materialCardVariants = cva("bg-light-grey flex rounded-xl p-4", {
  variants: {
    variant: {
      vertical: "h-83.75 w-39 flex-col",
      horizontal: "w-full flex-row items-start gap-3",
    },
  },
  defaultVariants: {
    variant: "vertical",
  },
});

interface MaterialCardProps
  extends VariantProps<typeof materialCardVariants> {
  image?: string; // used in "vertical" variant (logo/illustration)
  icon?: React.ReactNode; // used in "horizontal" variant (small icon)
  title: string;
  desc?: string;
  items?: string[]; // bullet list, "horizontal" variant only
  updatedAt?: string; // e.g. "January 2024" — "horizontal" variant footer
  practiceCode?: string; // link to source code
  materialLink?: string; // link to the material in personal-notes
  className?: string;
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
function MaterialCard({
  variant,
  image,
  icon,
  title,
  desc,
  items,
  updatedAt,
  practiceCode,
  materialLink,
  className,
  onClick,
}: MaterialCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <div
      className={cn(materialCardVariants({ variant }), className)}
      onClick={onClick}
    >
      {/* vertical: centered image on top */}
      {!isHorizontal && image && (
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="h-21.75 m-auto w-32 flex-none rounded-t-xl"
        />
      )}

      {/* horizontal: icon on the left, only if provided */}
      {isHorizontal && icon && (
        <div className="flex-none">{icon}</div>
      )}

      <div
        className={cn(
          "flex flex-col",
          isHorizontal ? "grow" : "mt-2 grow"
        )}
      >
        <div className="grow">
          <Link href={materialLink ? materialLink : "#"}>
            <h1
              className={cn(
                "font-semibold leading-4",
                isHorizontal ? "mb-1 text-sm" : "mb-2 text-xs"
              )}
            >
              {title}
            </h1>
          </Link>
          {desc && (
            <p className="text-xs font-normal text-slate-500">{desc}</p>
          )}

          {isHorizontal && items && items.length > 0 && (
            <ul className="mt-1 list-disc pl-4 text-xs font-normal text-slate-500">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* horizontal footer: updated date */}
        {isHorizontal && updatedAt && (
          <div className="mt-2 flex flex-row items-center gap-1 text-slate-500">
            <Calendar className="h-3 w-3" />
            <span className="text-[10px]">Updated {updatedAt}</span>
          </div>
        )}

        {/* vertical footer: learn more / source code links */}
        {!isHorizontal && (
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
        )}
      </div>
    </div>
  );
}

export default MaterialCard