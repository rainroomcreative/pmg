import React from "react";

const ReviewItem = ({ review, active }) => {
    const { companyName, reviewContent } = review;

    return (
        <div className={"w-full flex-col justify-center items-center gap-14 duration-1000 transition-opacity flex absolute top-0" + `${active? " opacity-100" : " opacity-0"}`}>
            <h3 className="text-3xl pointer-events-none">{companyName}</h3>
            <p className="text-base leading-8 pointer-events-none">{reviewContent}</p>
        </div>
    );
};

export default ReviewItem;
