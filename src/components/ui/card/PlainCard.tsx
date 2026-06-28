import { MoveUpRight } from "lucide-react";
import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils"

const blogCardVariants = cva(
  ["flex h-auto flex-col gap-2 rounded-[8px] bg-[#F8F8F8] p-6"]
)

/**
 * Plain Card is identity for a content without image
 *
 * used to display blog item and personal-notes
 */
export default function PlainCard() {
  return (
    <div className="max-w-85.5 flex h-auto flex-col gap-2 rounded-[8px] bg-[#F8F8F8] p-6">
    {/* // <div className="max-w-85.5 flex h-auto flex-col gap-2 rounded-[8px] bg-[#000000] p-6"> */}
      <div className="flex flex-row justify-between">
        <p className="text-[10px]">FEB 28, 2026</p>
        {/* <span className="material-symbols-outlined h-2 w-2 text-[8px]">
          arrow_outward
        </span> */}

        <MoveUpRight size={15} />
      </div>

      <h1 className="pt-6 text-2xl font-bold">
        Architecting for resilience in distributed system
      </h1>

      <p className="text-sm font-normal">
        exploration of fallback patterns and circuit breakers in
        high-concurrency environments
      </p>

      <Link href={"#"} className="pt-4 text-[12px] font-bold">
        READ ENTRY
      </Link>
    </div>
  );
}
