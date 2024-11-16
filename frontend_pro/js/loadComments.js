import { generateComment } from "./generator.js";

export const loadComments = (api, postId, postComments) => {
  fetch(`${api}/${postId}/comments?_limit=2`).then(response => response.json()).then(data => {
    data.forEach((comment) => {
      generateComment(comment, postComments);
    });
  });
};
