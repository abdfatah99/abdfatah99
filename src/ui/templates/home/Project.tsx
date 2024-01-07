import React from "react";
import ProjectList from "@/lib/ProjectList.json";
import ProjectCard from "@/ui/mollecule/card/ProjectCard";

function Project() {
  return (
    <div className="container mb-6">
      <h1 className="mb-4 text-center text-base font-bold">Projects</h1>

      <div className="flex flex-row flex-wrap gap-4">
        {ProjectList.map((data: any, index: any) => {
          return (
            <ProjectCard
              key={index}
              image={data.image}
              title={data.title}
              desc={data.desc}
              website={`${data?.website}`}
              sourceCode={data?.sourceCode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
