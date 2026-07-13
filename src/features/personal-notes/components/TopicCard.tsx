import CardTemplate from "@/src/components/components/CardTemplate";
import { cn } from "@/src/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronRight, Divide, Terminal } from "lucide-react";
import Link from "next/link";

const topicCardVariants = cva(["flex flex-col gap-6"], {
  variants: {
    variant: {
      default: "",
      dark: "bg-black text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ITopicCard
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof topicCardVariants> {
  children: React.ReactNode;
}

function TopicCard({ className, variant, children }: ITopicCard) {
  return (
    <CardTemplate className={cn(topicCardVariants({ variant }), className)}>
      {children}
    </CardTemplate>
  );
}

function TopicCardHeader({
  className,
  // children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-row gap-3", className)} {...props} />
    // {children}
    // </div>
  );
}

function TopicCardIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("card-display-title", className)} {...props}>
      {children}
    </div>
  );
}

function TopicCardTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("card-display-title", className)} {...props}>
      {children}
    </div>
  );
}

function TopicCardDescription({
  className,
  children,
}: React.HtmlHTMLAttributes<"div">) {
  return (
    <div className={cn("card-display-description text-medium-grey", className)}>
      {children}
    </div>
  );
}

function TopicCardContent({
  className,
  children,
}: React.HtmlHTMLAttributes<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4")}>{children}</div>;
}

function TopicCardItemBadgeLink({
  href,
  children,
  className,
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row items-center justify-between rounded-sm bg-white p-4 text-sm text-black",
        className,
      )}
    >
      {children}
      <ChevronRight size={"10px"} />
    </Link>
  );
}

export {
  TopicCard,
  TopicCardIcon,
  TopicCardHeader,
  TopicCardTitle,
  TopicCardDescription,
  TopicCardContent,
  TopicCardItemBadgeLink,
};
