import React from "react";
import { SewingPinIcon } from "@radix-ui/react-icons";
import { CalendarIcon } from "@radix-ui/react-icons";

interface IExperienceCard {
  title: string;
  place: string;
  date: string;
  details: string[];
}

function ExperienceCard(props: IExperienceCard) {
  return (
    <div className=" mt-4 text-[12px]">
      <h1 className="font-semibold">{props.title}</h1>

      {/* location */}
      <div className="flex flex-row items-center gap-2">
        {/* <MdPlace /> */}
        <SewingPinIcon />
        <p>{props.place}</p>
      </div>

      {/* date */}
      <div className="mb-3 flex flex-row items-center gap-2">
        <CalendarIcon />
        <p>{props.date}</p>
      </div>

      <ul className="ml-7 list-disc">
        {props.details.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>

      <hr className="mt-3" />
    </div>
  );
}

export default ExperienceCard;
