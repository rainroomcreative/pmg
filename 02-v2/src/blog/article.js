import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from 'graphql-request';
import RelatedPosts from "./relatedPosts";

const Article = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const { slug } = useParams();
    
    useEffect(() => {
        const fetchArticle = async () => {
            console.log('fetching article');
            const {blogPosts} = await request(
                `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/${process.env.REACT_APP_BLOG_KEY}/master`,
                `
                {
                    blogPosts(where: {slug: "${slug}"}) {
                        blogPost
                        datePosted
                        excerpt
                        id
                        tagLine
                        title
                        slug
                      }
                }
                `
            );
            setBlogPosts(blogPosts);
        };
        fetchArticle();
    }, [slug]);


    if (blogPosts.length === 0 || !blogPosts[0]) {
        return <div>Loading...</div>
    } else {
        const article = blogPosts[0]
        const dateFormatted = article ? new Date(article.datePosted).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) : null;

        return (
            <div className="w-full">
                <div className="flex flex-col text-left text-black font-bold py-24 px-6 gap-16 mx-auto container">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-5xl">{article.title}</h1>
                        <p className="text-sm">Date: {dateFormatted}</p>
                    </div>
                    <div className="text-base leading-8">
                        {article.blogPost}
                    </div>
                </div>
                <RelatedPosts slug={slug}/>
            </div>
        )
    }
   
}

export default Article;