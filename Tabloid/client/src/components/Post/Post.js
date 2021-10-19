import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";


export const Post = ({ post }) => {

    const history = useHistory();

    return (
        <Card>
            <p className="post-title">
                <h2 onClick={() => {
                    history.push(`/GetPostById/${post.id}`)}}>{post.title}</h2>
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