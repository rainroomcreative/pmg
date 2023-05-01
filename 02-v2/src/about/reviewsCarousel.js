import React, {useState} from "react";
import {reviews} from "./reviews";
import ReviewItem from "./reviewItem";
import {ReactComponent as Quote} from "./images/quote.svg";
import {ReactComponent as LeftArrow} from "./images/leftArrow.svg";
import {ReactComponent as RightArrow} from "./images/rightArrow.svg";
import {Link} from "react-router-dom";


const ReviewsCarousel = () => {
    const [isActiveSlide, setActiveSlide] = useState(1);

    function increment() {
        setActiveSlide(isActiveSlide + 1);
        console.log(isActiveSlide)
    }

    function decrement() {
        setActiveSlide(isActiveSlide - 1);
        console.log(isActiveSlide)
    }

    function handleClick(id) {
        return () => {
            setActiveSlide(id);
        }
    }

    return (
        <div className="bg-blue w-full text-white font-bold flex flex-col items-center py-20 px-6 relative md:flex-row md:justify-center md:py-8">
            <LeftArrow className={"hidden absolute left-6 md:block" + `${isActiveSlide <= 1 ? "hidden" : ""}`} onClick={decrement}/>
            <div className="flex flex-col gap-14 justify-center items-center w-full md:w-3/5">
                <Quote className="hidden md:block" />
                <div className="relative h-60 md:h-44 w-full">
                    {reviews.map((review) => (
                        <ReviewItem key={review.id} review={review} active={isActiveSlide === review.id}/>
                    ))}
                </div>
                <Link to="/portfolio" className="bg-white text-blue rounded-3xl py-2.5 w-full hover:bg-gold hover:text-white md:w-60">See Case Studies</ Link>
                <div className="flex justify-center absolute bottom-6 w-4/5 items-center md:hidden">
                    {reviews.map((review) => (
                        <span key={review.id} className={"border-b-solid border-b-white h-3 w-1/3" +`${isActiveSlide === review.id ? " border-b-2" : " border-b"}`} onClick={handleClick(review.id)}></span>
                    ))}
                </div>
            </div>
            <RightArrow className={"hidden absolute right-6 md:block" + `${isActiveSlide >= reviews.length ? "hidden" : ""}`} onClick={increment}/>
        </div>
    )
}

export default ReviewsCarousel;