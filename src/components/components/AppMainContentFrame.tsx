/**
 * This is main content frame for entire App, while the generic structure
 * of common app is navbar on top and footer below of the app, but the main
 * content slightly arbitrary. In this portofolio design, the main content 
 * structure is same for entire app.
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

function AppMainFrame({ className, variant, children }: IAppMainFrame) {
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

interface IAppMainFrameContent extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * TODO:
 * layout change for bigger screen, it should manageable from variants
 * no, variant is used to manage theme
 *
 * @param param0
 * @returns
 */
function AppMainFrameContent({ className, children }: IAppMainFrameContent) {
  // main focus: structuring the layout of personal notes
  // - padding top
  // - padding bottom
  // 1. breadcrumb
  // 2. title
  // 3. message
  return (
    <section className={cn("flex flex-col gap-8 pt-16", className)}>
      {children}
    </section>
  );
}

export {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameTitle,
  AppMainFrameDescription,
  AppMainFrameContent,
};
