import React from "react";
import { PSDirectory } from "@/lib/personal-notes-directory";
import PSNotesMaterialCard from "../molecule/card/PersonalNotesMaterialCard";

interface IPSNotesMaterialGrid {
  directories: PSDirectory[];
}

export default function MaterialCardGrid({ directories }: IPSNotesMaterialGrid) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-4 bg-yellow-50">
      {directories
        .map((dir: PSDirectory, index: number) => {
          return (
            <PSNotesMaterialCard
              key={index}
              image="/personal-notes/sql-server.png"
              title={dir.getName()}
              desc={dir.getDescription()}
              materialLink={dir.getLink()}
            />
          );
        })}
    </div>
  );
}
