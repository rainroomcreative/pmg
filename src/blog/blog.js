import React, {useEffect, useState} from "react";
import ArticleCard from "./articleCard";
import { request } from 'graphql-request';
import Pagination from "./pagination";

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * postsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - postsPerPage;
    const currentPosts = blogPosts && blogPosts.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(blogPosts && blogPosts.length / postsPerPage);

    useEffect(() => {
        const fetchArticles = async () => {
            console.log('fetching articles');
            const {blogPosts} = await request(
                `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/${process.env.REACT_APP_BLOG_KEY}/master`,
                `
                {
                    blogPosts {
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
            setLoading(false);
        };
        fetchArticles();
    }, []);


    return (
        <div className="mx-auto container py-24 px-6 w-full">
            <div className="mb-24">
                <h1 className="text-5xl font-bold text-black pointer-events-none">Our Blog</h1>
            </div>
            <div className="flex flex-col gap-14 md:grid md:grid-cols-2">
                <h2 className={"pointer-events-none text-blue font-bold text-3xl" + `${loading ? " block" : " hidden"}`}>Loading...</h2>
                {currentPosts && currentPosts.map((blogPost, index) => ( 
                    <ArticleCard blogPost={blogPost} key={blogPost.id} index={index}/>
                ))}
            </div>
            <Pagination
                    totalPages = { totalPages }
                    currentPage = { currentPage } 
                    setCurrentPage = { setCurrentPage }
            />
        </div>
    )

}

export default Blog;