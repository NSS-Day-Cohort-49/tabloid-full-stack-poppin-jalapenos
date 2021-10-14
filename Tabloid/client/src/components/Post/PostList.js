import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../modules/postManager.js";
import { Post } from "./Post.js"


export const PostList = () => {
    const [ posts, setPosts ] = useState([]);

    const getPosts = () => {
        getAllPosts()
        .then(posts => setPosts(posts));
    }


    useEffect(() => {
        getPosts()
    }, []);

    return (
        <>
            <section className="posts">
                {posts.map(post => {
                    return (
                        <Post post={post} id={post.id} />
                    )
                })}
            </section>
        </>
    );
}