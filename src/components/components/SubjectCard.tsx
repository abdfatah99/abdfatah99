import { MoveUpRight } from "lucide-react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { Material } from "@/src/utils/read-directory-content";
import { cn } from "@/src/lib/utils";

const subjectCardVariants = cva(
  ["flex h-auto flex-col gap-2 rounded-[8px] p-6"],
  {
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
  },
);

// Extract the types automatically from the CVA definition
export interface ISubjectCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof subjectCardVariants> {
  data: Material;
}

/**
 * General Card for blog related content
 *
 * @deprecated development version of subject card
 * @returns
 */
export default function _SubjectCard({
  className,
  variant,
  orientation,
  data,
  ...props
}: ISubjectCardProps) {
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
      className={subjectCardVariants({ variant, orientation, className })}
      {...props}
    >
      <div className="flex flex-row justify-between">
        <p className="text-[10px]">{formattedDate}</p>
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

// Extract the types automatically from the CVA definition
export interface ISubjectCard
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof subjectCardVariants> {}

function SubjectCard({
  className,
  variant,
  orientation,
  ...props
}: ISubjectCard) {
  return (
    <div
      className={subjectCardVariants({ variant, orientation, className })}
      {...props}
    ></div>
  );
}

/**
 *
 * @param formattedDate: string - formatted date of the subject
 * @returns
 */
function SubjectCardDate({ children }: { children: string }) {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-[10px]">{children}</p>
      <MoveUpRight size={15} />
    </div>
  );
}
function SubjectCardTitle({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) {
  return (
    <h1 className={cn("pt-6 text-2xl font-bold", className)}>{children}</h1>
  );
}

function SubjectCardDescription({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) {
  return <p className={cn("text-sm font-normal", className)}>{children}</p>;
}

function SubjectCardLink({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("pt-4 text-[12px] font-bold uppercase", className)}
    >
      {children}
    </Link>
  );
}

export {
  SubjectCard,
  SubjectCardDate,
  SubjectCardTitle,
  SubjectCardLink,
  SubjectCardDescription,
};
