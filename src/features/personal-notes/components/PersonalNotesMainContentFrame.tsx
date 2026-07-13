import { cn } from "@/src/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const psMainFrameVariants = cva(["py-16"], {
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

interface IPSMainFrame
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof psMainFrameVariants> {
  children: React.ReactNode;
}

function PSMainFrame({ className, variant, children }: IPSMainFrame) {
  return (
    <div className="container">
      <div className={cn(psMainFrameVariants({ variant }), className)}>
        {children}
      </div>
    </div>
  );
}

function PSMainFrameBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light-grey text-heavy-grey w-fit rounded-xl px-3 py-1 text-[10px] font-bold uppercase tracking-[1px]">
      {children}
    </div>
  );
}

function PSMainFrameTitle({ children }: { children: string }) {
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

function PSMainFrameDescription({ children }: { children?: string }) {
  return (
    <p className="text-heavy-grey text-sm font-normal leading-6">{children}</p>
  );
}

interface IPSMainFrameContent extends React.HtmlHTMLAttributes<HTMLElement> {
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
function PSMainFrameContent({ className, children }: IPSMainFrameContent) {
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
  PSMainFrame,
  PSMainFrameBadge,
  PSMainFrameTitle,
  PSMainFrameDescription,
  PSMainFrameContent,
};
