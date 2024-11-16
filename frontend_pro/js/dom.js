import { addPost } from "./api.js";

const postsList = document.querySelector('#posts');
const postsForm = document.querySelector('#posts__form');
const formTitle = document.querySelector('#posts__title');
const formBody = document.querySelector('#posts__body');
let userId = 1;

const generatePost = (postsData, handleLoadComments) => {
  const post = document.createElement('li');
  const postTitle = document.createElement('p');
  const postText = document.createElement('p');
  const postComments = document.createElement('ul');
  const postButton = document.createElement('button');

  post.classList.add('post');
  postTitle.classList.add('post__title');
  postText.classList.add('post__body');
  postComments.classList.add('post__comments');
  postButton.classList.add('post__button');

  postTitle.innerText = postsData.title;
  postText.innerText = postsData.body;
  postButton.innerText = 'Load comments';

  post.appendChild(postTitle);
  post.appendChild(postText);
  post.appendChild(postComments);
  post.appendChild(postButton);

  postButton.addEventListener('click', async () =>
    handleLoadComments(postsData.id, postComments, postButton)
  );

  postsList.appendChild(post);
};

const generateComment = (commentData, postComments) => {
  commentData.forEach(comment => {
    const postAuthor = document.createElement('h4');
    const postEmail = document.createElement('p');
    const postComment = document.createElement('li');

    postAuthor.classList.add('comment__author');
    postEmail.classList.add('comment__email');
    postComment.classList.add('comment__body');

    postAuthor.innerText = comment.name;
    postEmail.innerText = comment.email;
    postComment.innerText = comment.body;

    postComments.appendChild(postAuthor);
    postComments.appendChild(postEmail);
    postComments.appendChild(postComment);
  });
};

const clearForm = (formTitle, formBody) => {
  formTitle.value = '';
  formBody.value = '';
};

const setupFormSubmit = (handleLoadComments) => {
  postsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
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
        console.log('Error while adding post:', error);
      }
    }
  });
};

export { generatePost, generateComment, setupFormSubmit };
