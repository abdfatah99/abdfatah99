import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

const cardTemplate = cva(["flex h-auto flex-col gap-2 rounded-[8px] p-6"], {
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

export interface ICardTemplate
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardTemplate> {
  children: React.ReactNode;
}

export default function CardTemplate({
  className,
  variant,
  orientation,
  children,
  ...props
}: ICardTemplate) {
  return (
    <div className={cn(cardTemplate({ variant, orientation }), className)}>
      {children}
    </div>
  );
}
