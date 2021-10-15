import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../modules/postManager.js";
import { Post } from "./Post.js";
import { Link } from "react-router-dom";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then((posts) => setPosts(posts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <section className="posts">
        <Link to="/create">
          <button>New Post</button>
        </Link>
        {posts.map((post) => {
          return <Post post={post} id={post.id} />;
        })}
      </section>
    </>
  );
};
