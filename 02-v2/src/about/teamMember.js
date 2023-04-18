import React from "react";

const TeamMember = ({ member }) => {
  const { name, title, image } = member;
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={image} alt={name} className="rounded-full" />
      <h3 className="text-base font-bold">{name}</h3>
      <p className="text-sm font-normal">{title}</p>
    </div>
  );
}

export default TeamMember;