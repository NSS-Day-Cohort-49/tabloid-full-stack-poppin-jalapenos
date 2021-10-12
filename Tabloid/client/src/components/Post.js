import React from "react";
import { Card, CardBody } from "reactstrap";
import "../styles/post.css";

export const Post = ({ post }) => {
    return (
        <Card>
            <p className="post-title">
                <h2>{post.title}</h2>
                Category: {post.category.name}
            </p>
            <CardBody>
                <p className="post-content">
                    {post.content}
                </p>
                <p className="post-publishDate">
                    Published: {post.publishDateTime}
                </p>
            </CardBody>
        </Card>
    )
}