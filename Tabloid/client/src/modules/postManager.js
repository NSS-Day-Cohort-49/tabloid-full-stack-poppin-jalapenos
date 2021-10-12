const apiUrl = "/api/Post";

export const getAllPosts = () => {
    return fetch(apiUrl)
    .then(res => res.json());
}