import React from "react";
import ExperienceCard from "@/ui/mollecule/card/ExperienceCard";
import ExperienceList from "@/lib/ExperienceList.json";

function Experience() {
  return (
    <div className="container mb-14">
      <h1 className="mb-4 text-center text-base font-bold">Experience</h1>

      {ExperienceList.map((data, index) => {
        return (
          <>
            <ExperienceCard
              title={data.title}
              place={data.location}
              date={data.date}
              details={data.details}
            />
          </>
        );
      })}
    </div>
  );
}

export default Experience;
