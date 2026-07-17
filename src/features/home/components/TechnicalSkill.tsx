import React from "react";
import { ITechnicalSkill } from "./TechnicalSkill.types";
import Link from "next/link";

export default async function TechnicalSkill({
  title,
  icon,
  data,
}: ITechnicalSkill) {
  return (
    <div className="bg-light-blue flex h-auto flex-col gap-6 rounded-[8px] p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      <ol className="flex flex-col gap-4">
        {data?.map((item) => (
          <li key={item.name}>
            <div className="flex flex-row items-center justify-between">
              <p className="text-sm font-medium">{item.name}</p>
              <div className="flex gap-1">
                {item.badges.map((badge, i) => {
                  const isLink = typeof badge !== "string";
                  const label = isLink ? badge.name : badge;

                  return isLink ? (
                    <Link
                      key={i}
                      href={badge.link}
                      className="rounded bg-black px-2 text-[10px] uppercase text-white"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span
                      key={i}
                      className="rounded bg-[#E3E1EC] px-2 text-[10px] uppercase"
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
