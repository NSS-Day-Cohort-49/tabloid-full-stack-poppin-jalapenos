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
