import { loadData, loadComments } from "./js/api.js";
import { generatePost, generateComment, setupFormSubmit } from "./js/dom.js";

const handleLoadData = async () => {
  try {
    const posts = await loadData();
    if (posts) {
      posts.forEach(post => generatePost(post, handleLoadComments));
    }
  } catch (error) {
    console.log('Error while loading posts:', error);
  }
};

const handleLoadComments = async (postId, postComments, postButton) => {
  try {
    const loadedComment = await loadComments(postId);
    if (loadedComment) {
      generateComment(loadedComment, postComments);
      postButton.disabled = true;
    }
  } catch (error) {
    console.log('Error while loading comments:', error);
  }
};

setupFormSubmit(handleLoadComments);

handleLoadData();
