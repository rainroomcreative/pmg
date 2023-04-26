import React from "react";

const ReviewItem = ({ review, active }) => {
    const { companyName, reviewContent } = review;

    return (
        <div className={"flex-col justify-center items-center gap-14 opacity-0 duration-700 transition-opacity" + `${active? " opacity-100 flex" : " hidden"}`}>
            <h3 className="text-3xl pointer-events-none">{companyName}</h3>
            <p className="text-base leading-8 pointer-events-none">{reviewContent}</p>
        </div>
    );
};

export default ReviewItem;
