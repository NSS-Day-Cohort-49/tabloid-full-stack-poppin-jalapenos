import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById, deletePost } from "../../modules/postManager";

import firebase from "firebase/app";
import "firebase/auth";

export const PostDetail = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  var user = firebase.auth().currentUser;
  console.log(user);


  const history = useHistory();

  useEffect(() => {
    getPostById(postId).then((p) => setPost(p));
  }, []);

  const handleDeletePost = (id) => {
    let yes = window.confirm("Are you sure you want to delete this post?");
    if (yes === true) {
      deletePost(postId).then(() => {
        history.push("");
      });
    }
  };

  return (
    <>
      <div className="detail_Wrapper">
        <img src={post.imageLocation} alt="Apes Not together not strong" />
        <h3>{post.title}</h3>
        <h5>{post.category?.name}</h5>
        <p>{post.userProfile?.displayName}</p>
        <p>{post.publishDateTime}</p>
        <p>{post.content}</p>
        <button onClick={handleDeletePost}>Delete</button>
      </div>
    </>
  );
};
