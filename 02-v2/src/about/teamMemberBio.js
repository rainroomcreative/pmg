import React from "react";
import {ReactComponent as Close} from "./images/close.svg";

const TeamMemberBio = ({ member, active, onClick }) => {
    const { name, title, bio } = member;
    return (
      <div className={"flex-col items-center gap-4 my-6 p-2.5 bg-white text-black m-h-160 overflow-scroll text-left rounded-3xl" + `${active ? " flex" : " hidden"}`}>
        <div className="flex flex-row justify-end w-full">
            <Close onClick={onClick}/>
        </div>
        <div className="flex flex-col gap-4 w-full">
            <h3 className="text-5xl font-bold">{name}</h3>
            <p className="text-sm font-normal">{title}</p>
        </div>
        <p className="text-base font-normal leading-8">{bio}</p>
      </div>
    );
}

export default TeamMemberBio;