import React, {useEffect, useState} from "react";
import ArticleCard from "./articleCard";
import { request } from 'graphql-request';

const RelatedPosts = ({slug}) => {
    const [blogPosts, setBlogPosts] = useState(null);
    const [loading, setLoading] = useState(true);

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

    let removeCurrentPost = [];
    let relatedPosts = [];

    if (!loading) { 
        removeCurrentPost = blogPosts.filter(post => post.slug !== slug);
        relatedPosts = removeCurrentPost.slice(0, 3);
    } 

    return (
        <div className="pb-24 pt-12 w-full border-t-solid border-t-black border-t">
            <div className="mx-auto container px-6">
                <div className="mb-12">
                    <h2 className="text-5xl font-bold text-black text-center">More Blog Posts</h2>
                </div>
                <div className={"flex-col gap-14 md:grid md:grid-cols-3" + `${loading ? " flex" : " hidden"}`}>
                    {!loading && relatedPosts.map((blogPost, index) => (
                        <ArticleCard blogPost={blogPost} key={blogPost.id} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedPosts;