import React from "react";
import { MdPlace } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

interface IExperienceCard {
    title: string
    place: string
    date: string
    details: string[]
}

function ExperienceCard(props: IExperienceCard) {
  return (
    <div className=" text-[12px] mt-4">
      <h1 className="font-semibold">{props.title}</h1>

      {/* location */}
      <div className="flex flex-row items-center gap-2">
        <MdPlace />
        <p>{props.place}</p>
      </div>

      {/* date */}
      <div className="flex flex-row items-center gap-2 mb-3">
        <IoCalendarOutline />
        <p>{props.date}</p>
      </div>

      <ul className="list-disc ml-7">
        {props.details.map((data, index) => {
            return (
                <li key={index}>{data}</li>
            )
        })}
      </ul>


      <hr className="mt-3" />
    </div>
  );
}

export default ExperienceCard;
