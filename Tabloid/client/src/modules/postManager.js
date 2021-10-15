import { getToken } from "./authManager";

const apiUrl = "/api/Post";

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get all posts.",
        );
      }
    });
  });
};

export const getByUser = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/GetByUser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get your posts.",
        );
      }
    });
  });
};

export const getPostById = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/GetPostById/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get your posts.",
        );
      }
    });
  });
};

export const addPost = (post) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new post.",
        );
      }
    });
  });
};

export const deletePost = (id) => {
  return getToken().then((token) => {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  });
};

export const editPost = (post) => {
  return getToken().then((token) => {
    return fetch(`{apiUrl}/${post.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  });
};
