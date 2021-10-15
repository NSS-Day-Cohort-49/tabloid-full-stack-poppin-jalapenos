import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const Post = ({ post }) => {
  const history = useHistory();

  return (
    <>
      <Card>
        <Link to={`/GetPostById/edit/${post.id}`}>
          <button>Edit Post</button>
        </Link>
        <p className="post-title">
          <h2
            onClick={() => {
              history.push(`/GetPostById/${post.id}`);
            }}
          >
            {post.title}
          </h2>
          Category: {post.category.name}
        </p>
        <CardBody>
          <p className="post-content">{post.content}</p>
          <p className="post-publishDate">Published: {post.publishDateTime}</p>
        </CardBody>
      </Card>
    </>
  );
};
