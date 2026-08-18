"use client";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import React, { Children, createContext, useContext } from "react";
import { Material } from "@/src/utils/node";
import { cn } from "@/src/lib/utils";
import { MDFileMetadata } from "@/src/utils/node.types";

/** ---------------------------- Subject Card -----------------------------------
 *
 * SubjectCard component act as parent component, it also provide shared Context
 * providing for variant context for general structure of the card (for all
 * children).
 * Example the theme is dark, it only need to provided { variant=dark } at
 * SubjectCard and the children component will follow. For flexibility, the
 * children also able to receive their own custom variant if needed.
 *
 * The technical design for this component not use props drilling, instead it
 * use context, there for the SubjectCard also act as Context Provider
 * */

type SubjectCardVariant = "default" | "dark";

const SubjectCardContext = createContext<SubjectCardVariant>("default");

function useSubjectCardVariant(
  override?: SubjectCardVariant,
): SubjectCardVariant {
  const inherited = useContext(SubjectCardContext);

  // explicit props wins; otherwise fall back to parent's
  return override ?? inherited;
}

const subjectCardVariants = cva(
  ["flex h-auto flex-col gap-2 rounded-[8px] p-6"],
  {
    variants: {
      variant: {
        default: "bg-light-grey text-heavy-grey",
        dark: "bg-black text-light-grey",
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
  data: MDFileMetadata;
}

// Extract the types automatically from the CVA definition
export interface ISubjectCard
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof subjectCardVariants> {}

function SubjectCard({
  className,
  variant,
  children,
  orientation,
  ...props
}: ISubjectCard) {
  return (
    <SubjectCardContext.Provider value={variant ?? "default"}>
      <div
        className={subjectCardVariants({ variant, orientation, className })}
        {...props}
      >
        {children}
      </div>
    </SubjectCardContext.Provider>
  );
}

// ---------------------------- Subject Card Date ------------------------------
// ---- children component of Subject Card

const subjectCardDateVariants = cva("text-[10px]", {
  variants: {
    variant: {
      default: "text-black",
      dark: "text-white",
    },
  },

  defaultVariants: { variant: "default" },
});

/**
 *
 * @param formattedDate: string - formatted date of the subject
 * @returns
 */
function SubjectCardDate({
  children,
  variant,
}: {
  children: string;
  variant?: SubjectCardVariant;
}) {
  const resolvedVariant = useSubjectCardVariant(variant);
  return (
    <div className="flex flex-row justify-between">
      <p className={subjectCardDateVariants({ variant: resolvedVariant })}>
        {children}
      </p>
      <MoveUpRight size={15} />
    </div>
  );
}

// ---------------------------- Subject Card Title ------------------------------
// ---- children component of Subject Card

const subjectCardTitleVariants = cva("pt-6 text-2xl font-bold capitalize", {
  variants: {
    variant: {
      default: "text-black",
      dark: "text-white",
    },
  },
  defaultVariants: { variant: "default" },
});

function SubjectCardTitle({
  className,
  children,
  variant,
}: {
  className?: string;
  children?: string;
  variant?: SubjectCardVariant;
}) {
  const resolvedVariant = useSubjectCardVariant(variant);
  return (
    <h1
      className={cn(
        subjectCardTitleVariants({ variant: resolvedVariant }),
        className,
      )}
    >
      {children}
    </h1>
  );
}

// ---------------------------- Subject Card Description ------------------------------
// ---- children component of Subject Card

const subjectCardDescriptionVariants = cva("text-sm font-normal", {
  variants: {
    variant: {
      default: "text-heavy-grey",
      dark: "text-medium-grey",
    },
  },
  defaultVariants: { variant: "default" },
});

function SubjectCardDescription({
  className,
  children,
  variant,
}: {
  className?: string;
  children?: string;
  variant?: SubjectCardVariant;
}) {
  const resolvedVariants = useSubjectCardVariant(variant);
  return (
    <p
      className={cn(
        subjectCardDescriptionVariants({ variant: resolvedVariants }),
        className,
      )}
    >
      {children}
    </p>
  );
}

// ---------------------------- Subject Card Link ------------------------------
// ---- children component of Subject Card

const subjectCardLinkVariants = cva("pt-4 text-[12px] font-bold uppercase", {
  variants: {
    variant: {
      default: "text-dark",
      dark: "text-white",
    },
  },
  defaultVariants: { variant: "default" },
});

function SubjectCardLink({
  className,
  href,
  children,
  variant,
}: {
  className?: string;
  href: string;
  children?: string;
  variant?: SubjectCardVariant;
}) {
  const resolvedVariant = useSubjectCardVariant(variant);
  return (
    <Link
      href={href}
      className={cn(
        subjectCardLinkVariants({ variant: resolvedVariant }),
        className,
      )}
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

// -----------------------------------------------------------------------------

/**
 * General Card for blog related content
 *
 * @deprecated development version of subject card, for production, use SubjectCard
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
  // const metadata = data.getMetadata();

  // const formattedDate = new Date(data.metaData.date).toLocaleTimeString("en-US", {
  const formattedDate = new Date(data.date)
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

      <h1 className="pt-6 text-2xl font-bold">{data.title}</h1>

      <p
        className={`${
          variant === "dark" ? "text-medium-grey" : "text-heavy-grey"
        } text-sm font-normal`}
      >
        {data.description}
      </p>

      <Link href={data.url} className="pt-4 text-[12px] font-bold">
        READ ENTRY
      </Link>
    </div>
  );
}
