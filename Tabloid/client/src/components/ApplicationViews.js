import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { PostList } from "./Post/PostList.js";
import { MyPost } from "./Post/MyPost.js";
import { PostDetail } from "./Post/PostDetail";
import { PostForm } from "./Post/PostForm";
import { EditPost } from "./Post/EditPost";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/myPost" exact>
          {isLoggedIn ? <MyPost /> : <Redirect to="/login" />}
        </Route>

        <Route path="/GetPostById/:postId(\d+)" exact>
          {isLoggedIn ? <PostDetail /> : <Redirect to="/login" />}
        </Route>

        <Route path="/create" exact>
          {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/GetPostById/edit/:id(\d+)" exact>
          {isLoggedIn ? <EditPost /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
