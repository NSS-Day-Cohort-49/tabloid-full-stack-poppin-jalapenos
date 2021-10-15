import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../modules/postManager";

export const PostDetail = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    getPostById(postId).then((p) => setPost(p));
  }, []);

  return (
    <>
      <div className="detail_Wrapper">
        <img src={post.imageLocation} alt="Apes Not together not strong" />
        <h3>{post.title}</h3>
        <h5>{post.category?.name}</h5>
        <p>{post.userProfile?.displayName}</p>
        <p>{post.publishDateTime}</p>
        <p>{post.content}</p>
      </div>
    </>
  );
};
