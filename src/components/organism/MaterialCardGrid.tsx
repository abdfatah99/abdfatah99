import React from "react";
import { PSDirectory } from "@/src/utils/PSNode";
import PSNotesMaterialCard from "../molecule/card/PersonalNotesSubjectCard";

interface IPSNotesMaterialGrid {
  directories: PSDirectory[];
}

export default function MaterialCardGrid({
  directories,
}: IPSNotesMaterialGrid) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-4">
      {directories.map((dir: PSDirectory, index: number) => {
        return (
          <PSNotesMaterialCard
            key={index}
            image="/personal-notes/sql-server.png"
            title={dir.getName()}
            desc={dir.getDescription()}
            materialLink={dir.getURLPath()}
          />
        );
      })}
    </div>
  );
}
