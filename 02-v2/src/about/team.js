import React from "react";
import { teamMembers } from "./teamMembers";
import TeamMember from "./teamMember";

const Team = () => {
    return (
        <div className="font-bold text-white w-full bg-blue px-6 py-10">
            <div className="container mx-auto text-left">
                <h2 className="text-5xl">Team</h2>
            </div>
            <div className="container mx-auto flex flex-col gap-10 md:gap-20 md:flex-row md:justify-center md:items-center">
                {teamMembers.map((member) => (
                    <TeamMember key={member.id} member={member}/>
                ))}
            </div>
        </div>
    )
}

export default Team;