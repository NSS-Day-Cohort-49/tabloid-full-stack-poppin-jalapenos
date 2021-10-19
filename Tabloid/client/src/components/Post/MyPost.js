import React, { useState, useEffect } from "react";
import { Post } from "./Post.js";
import { getByUser } from "../../modules/postManager.js";

export const MyPost = () => {
  const [posts, SetPosts] = useState([]);

  const getPost = () => {
    getByUser().then((posts) => SetPosts(posts));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1>My Posts</h1>
      <section className="posts">
        {posts.map((post) => {
          return <Post post={post} id={post.id} />;
        })}
      </section>
    </>
  );
};
