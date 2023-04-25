import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({blogPost, index}) => {
    let dateFormatted = new Date(blogPost.datePosted).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    return (
        <Link to={`/blog/${blogPost.slug}`} >
            <div className="flex flex-col w-full bg-blue rounded-3xl text-white font-bold gap-7 p-9 text-left hover:text-black hover:bg-grid-lines hover:drop-shadow-3xl">
                <div className="gap-4 flex flex-col">
                    <h2 className="text-3xl">{blogPost.title}</h2>
                    <p className="text-sm">Date: {dateFormatted}</p>
                </div>
                <p className="text-base leading-8">{blogPost.excerpt}</p>
            </div>
        </Link>
    )
}

export default ArticleCard;