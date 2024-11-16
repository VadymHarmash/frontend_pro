import { loadData, loadComments, addPost } from "./api.js";
import { generatePost, generateComment, clearForm } from "./dom.js";

let userId = 1;

const handleLoadData = async () => {
  try {
    const posts = await loadData();
    if (posts) {
      posts.forEach(post => generatePost(post, handleLoadComments));
    }
  } catch (error) {
    console.error('Error while loading posts:', error);
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
    console.error('Error while loading comments:', error);
  }
};

document.querySelector('#posts__form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formTitle = document.querySelector('#posts__title');
  const formBody = document.querySelector('#posts__body');
  const newPostTitle = formTitle.value;
  const newPostBody = formBody.value;
  const newPost = {
    title: newPostTitle,
    body: newPostBody,
    userId
  };

  if (newPostTitle && newPostBody) {
    try {
      const addedPost = await addPost(newPost);

      if (addedPost) {
        generatePost(addedPost, handleLoadComments);
        clearForm(formTitle, formBody);
      }
    } catch (error) {
      console.error('Error while adding post:', error);
    }
  }
});

handleLoadData();
