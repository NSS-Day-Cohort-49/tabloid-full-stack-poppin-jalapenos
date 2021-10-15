import React, { useEffect, useState } from "react";
//import { getAllCategories } from '../../modules/categoryManager';
import { addPost } from "../../modules/postManager";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const PostForm = () => {
  
    const [post, setPost] = useState({
    title: "",
    content: "",
    imageLocation: "",
    publishDateTime: null,
    categoryId: 0,
  });


const history = useHistory();

const handleInputChange = (event) => {
  const newPost = { ...post };
  let sVal = event.target.value;
  if (event.target.id.includes("Id")) {
    sVal = parseInt(sVal);
  }
  newPost[event.target.id] = sVal;
  setPost(newPost);
};

const handleClickSavePost = (event) => {
  event.preventDefault();
  addPost(post).then((res) => {
    history.push(`/GetPostById/${res.id}`);
  });
}

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
          id="categoryId"
          onChange={handleInputChange}
          value={post.categoryId}
        ></Input>
      </FormGroup>
      <Button>Submit Post</Button>
    </Form>
  </>
)
}

