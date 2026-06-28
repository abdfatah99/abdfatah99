import { MoveUpRight } from "lucide-react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Material } from "@/src/utils/read-directory-content";

const blogCardVariants = cva(["flex h-auto flex-col gap-2 rounded-[8px] p-6"], {
  variants: {
    variant: {
      default: "bg-light-grey text-black",
      dark: "bg-black text-white",
    },
    orientation: {
      horizontal: "",
      vertical: "",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "vertical",
  },
});

// Extract the types automatically from the CVA definition
export interface BlogCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blogCardVariants> {
  // data: IContentFile
  data: Material;
}

/**
 * General Card for blog related content
 *
 * @returns
 */
export default function BlogCard({
  className,
  variant,
  orientation,
  data,
  ...props
}: BlogCardProps) {
  // Format the date nicely

  // const metadata = data.getMetadata();
  const metadata = data.getMetadata();

  // const formattedDate = new Date(data.metaData.date).toLocaleTimeString("en-US", {
  const formattedDate = new Date(metadata.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();

  let descriptionColor;
  if (variant == "dark") {
    descriptionColor = "text-medium-grey";
  }

  return (
    <div
      className={blogCardVariants({ variant, orientation, className })}
      {...props}
    >
      <div className="flex flex-row justify-between">
        <p className="text-[10px]">{formattedDate}</p>
        {/* <span className="material-symbols-outlined h-2 w-2 text-[8px]">
          arrow_outward
        </span> */}

        <MoveUpRight size={15} />
      </div>

      <h1 className="pt-6 text-2xl font-bold">{metadata.title}</h1>

      <p
        className={`${
          variant === "dark" ? "text-medium-grey" : "text-heavy-grey"
        } text-sm font-normal`}
      >
        {metadata.description}
      </p>

      <Link
        href={data.getDirNodeURLPath()}
        className="pt-4 text-[12px] font-bold"
      >
        READ ENTRY
      </Link>
    </div>
  );
}
