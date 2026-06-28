import { ReactNode } from "react";

export default function CalloutMD({
  header,
  paragraph,
}: {
  header: ReactNode;
  paragraph: ReactNode;
}) {
  return (
    <>
      <div className="border-primary border-l-2 py-2 pl-6">
        <h2 className="text-primary mb-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          {header}
        </h2>
        <p className="text-on-surface-variant text-xl font-medium leading-relaxed tracking-tight">
          {paragraph}
        </p>
      </div>
    </>
  );
}
