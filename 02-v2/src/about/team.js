import React, {useState} from "react";
import { teamMembers } from "./teamMembers";
import TeamMember from "./teamMember";
import TeamMemberBio from "./teamMemberBio";

const Team = () => {
    const [showBio, setShowBio] = useState(0);

    function handleShowBio (id) {
        if (showBio === id) {
            document.body.style.overflow = "auto";
            return setShowBio(0);
        }
        setShowBio(id);
        document.body.style.overflow = "hidden";
    }

    return (
        <div className="font-bold text-white w-full bg-blue px-6 py-10 mt-52 relative">
            <div className="container mx-auto text-left mb-20">
                <h2 className="text-5xl pointer-events-none">Team</h2>
            </div>
            <div className="container mx-auto flex flex-col gap-24 md:gap-x-11 md:gap-y-20 md:place-content-center md:grid md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                    <TeamMember key={member.id} member={member} onClick={() => handleShowBio(member.id)}/>
                ))}
            </div>
            <div className={"fixed top-0 left-0 px-6 w-screen h-screen flex-col z-20 justify-center items-center delay-1000 ease-in-out duration-1000 opacity-0 transition-opacity" + `${showBio > 0 ? " flex opacity-100 transition-opacity" : " hidden"}`}>
                <div className={"absolute top-0 left-0 w-screen h-screen bg-popupGradient z-30 cursor-pointer"} onClick={() => handleShowBio(showBio)}>
                </div>
                {teamMembers.map((member) => (
                    <TeamMemberBio key={member.id} member={member} active={showBio === member.id} onClick={() => handleShowBio(member.id)}/>
                ))}
            </div>
        </div>
    )
}

export default Team;