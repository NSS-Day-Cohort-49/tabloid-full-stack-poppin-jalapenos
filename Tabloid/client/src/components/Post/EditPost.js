import React, { useEffect, useState } from "react";
import { editPost, getPostById } from "../../modules/postManager";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const EditPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageLocation: "",
    publishDateTime: null,
    categoryId: 0,
  });
  const { id } = useParams();
  const history = useHistory();

  const getPosts = () => {
    return getPostById(id).then((post) => setPost(post));
  };

  //parse user Id
  const handleInputChange = (e) => {
    var newPost = { ...post };
    var selectedVal = e.target.value;

    if (e.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    newPost[e.target.id] = selectedVal;
    setPost(newPost);
  };

  //edits post and sends new info to the database
  const handleClickSavePost = (e) => {
    e.preventDefault();
    var newPost = { ...post };
    editPost(newPost).then((res) => {
      history.push(`/MyPost`);
    });
  };

  //renders getPosts method after dom updates
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Form onSubmit={handleClickSavePost}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            id="title"
            onChange={handleInputChange}
            value={post.title}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="content">Content:</Label>
          <Input
            id="content"
            onChange={handleInputChange}
            value={post.content}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="imageLocation">imageLocation:</Label>
          <Input
            id="imageLocation"
            onChange={handleInputChange}
            value={post.imageLocation}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="publishDateTime">PublishDate:</Label>
          <Input
            type="date"
            id="publishDateTime"
            onChange={handleInputChange}
            value={post.publishDateTime}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="categoryId">CategoryId:</Label>
          <Input
            type="int"
            id="categoryId"
            onChange={handleInputChange}
            value={post.categoryId}
          ></Input>
        </FormGroup>
        <Button>Submit Post</Button>
      </Form>
    </>
  );
};
