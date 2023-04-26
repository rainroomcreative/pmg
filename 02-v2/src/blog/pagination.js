import React from "react";
import {ReactComponent as ArrowLeftIcon} from "./images/left-arrow.svg";
import {ReactComponent as ArrowRightIcon} from "./images/right-arrow.svg";

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

    return (
        <div className="w-full flex flex-col items-center justify-center mt-24">
            <ul className="flex gap-4 flex-row items-center justify-center">
                <li>
                    <button
                        className={"w-10 h-10 items-center justify-center flex" + `${currentPage === 1 ? " invisible" : " visible"}`}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeftIcon />
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            className={"border border-solid rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue hover:text-white hover:border-blue" + `${currentPage === number ? " bg-blue text-white border-blue" : " bg-white text-black border-black"}`}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        className={"w-10 h-10 items-center justify-center flex" + `${currentPage === totalPages ? " invisible" : " visible"}`}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowRightIcon />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;