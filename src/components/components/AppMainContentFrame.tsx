/**
 * This is main content frame for entire App, while the generic structure
 * of common app is navbar on top and footer below of the app, but the main
 * content slightly arbitrary. In this portofolio design, the main content
 * structure is same for entire app.
 *
 * Example design decision that same for entire app
 * 1. padding/
 *
 *
 * Code design
 *
 * I don't use interface for separate function type, but it embed into the function
 * as purpose reading the function one time (not scrolling back and forth function
 * and interface)
 *
 *
 * 1. replace `extends` with `&`: Typescript inline object types use intersection
 *    operator (&) to combine types instead of the `extends` keyword.
 * 2. add rest props (`...props`) argument to catch standard HTML attribute (
 *    like `id`, `style`, or `className`)
 * 3. Merge Class: combining style using class-variance-authority to manage
 *    default style for the component and custom style for specific need
 *    (passed via classname).
 *
 *
 * @packageDocumentation
 */

import { cn } from "@/src/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const appMainFrameVariants = cva(["py-16"], {
  variants: {
    variant: {
      defaut: "",
      mobile: "",
      tab: "",
      desktop: "",
    },
  },
  defaultVariants: {
    variant: "defaut",
  },
});

interface IAppMainFrame
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof appMainFrameVariants> {
  children: React.ReactNode;
}

function AppMainFrame({
  className,
  variant,
  children,
}: { children: React.ReactNode } & React.HtmlHTMLAttributes<HTMLElement> &
  VariantProps<typeof appMainFrameVariants>) {
  return (
    <main className="container">
      <div className={cn(appMainFrameVariants({ variant }), className)}>
        {children}
      </div>
    </main>
  );
}

function AppMainFrameBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light-grey text-heavy-grey w-fit rounded-xl px-3 py-1 text-[10px] font-bold uppercase tracking-[1px]">
      {children}
    </div>
  );
}

function AppMainFrameTitle({ children }: { children: string }) {
  // given argument is string, because the color is different each word, it should
  // use loop then apply the coloring techique

  const titleList: string[] = children.split(" ");

  return (
    <p className="leading-18 flex flex-row gap-1 text-3xl font-bold capitalize">
      {titleList.map((word, index) => {
        if (index === titleList.length - 1) {
          return (
            <span className="text-[#78767B]" key={index}>
              {word}
            </span>
          );
        }
        return (
          <span className="text-[#1A1B22]" key={index}>
            {word}
          </span>
        );
      })}
      <span></span>
    </p>
  );
}

function AppMainFrameDescription({ children }: { children?: string }) {
  return (
    <p className="text-heavy-grey text-sm font-normal leading-6">{children}</p>
  );
}

/**
 * Structuring the layout of content, used in personal-notes and blog.
 *
 * coverage:
 * - padding top and bottom
 * - layout flex, ordered as column
 *
 * TODO:
 * - Content layout change for bigger screen
 *
 * note: variants only used to manage theme
 *
 *
 *
 * @param param0
 * @returns
 */
function AppMainFrameContent({
  className,
  children,
}: { children: React.ReactNode } & React.HtmlHTMLAttributes<HTMLElement>) {
  // 1. breadcrumb
  // 2. title
  // 3. message
  return (
    <section className={cn("flex flex-col gap-8 pt-16", className)}>
      {children}
    </section>
  );
}

function AppMainFrameContentGrid({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
} & React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    // this commend code used for next development, current strike is to deploy
    // but in the mobile format
    // <div className={cn("mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2", className)} {...props}>

    <div className={cn("mt-3 grid grid-cols-1 gap-4", className)} {...props}>
      {children}
    </div>
  );
}

function AppMainFrameContentFlex() {}

export {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameTitle,
  AppMainFrameDescription,
  AppMainFrameContent,
  AppMainFrameContentGrid,
};
