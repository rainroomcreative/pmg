import React from "react";

const TeamMember = ({ member, onClick }) => {
  const { name, title, image } = member;
  return (
    <div className="flex flex-col items-center gap-4 team-member" onClick={onClick}>
      <div className="w-full relative aspect-square">
        <img src={image} alt={name} className="rounded-3xl aspect-square object-cover w-full" />
        <p className="hidden on-hover absolute h-full w-full rounded-3xl z-10 inset-0 bg-hoverGradient aspect-square justify-center items-center text-white font-sm">Bio</p>
      </div>
      <h3 className="text-base font-bold">{name}</h3>
      <p className="text-sm font-normal">{title}</p>
    </div>
  );
}

export default TeamMember;