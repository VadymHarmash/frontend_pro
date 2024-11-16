import { loadData, loadComments, addPost } from "./api.js";
import { generateComment } from "./dom.js";

const postsList = document.querySelector('#posts');
let userId = 1;

const loadInitialData = async () => {
  try {
    const posts = await loadData();
    if (posts) {
      posts.forEach(post => generatePost(post));
    }
  } catch (error) {
    console.error('Error while loading posts:', error);
  }
};

const generatePost = (postsData) => {
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

  postButton.addEventListener('click', async () => {
    const loadedComment = await loadComments(postsData.id);
    if(loadedComment) generateComment(loadedComment, postComments)
    postButton.disabled = true;
  });

  postsList.appendChild(post);
  userId++;
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
  }

  if (newPostTitle && newPostBody) {
    try {
      const addedPost = await addPost(newPost);

      if (addedPost) {
        generatePost(addedPost);

        formTitle.value = '';
        formBody.value = '';
      }
    } catch (error) {
      console.error('Error while adding post:', error);
    }
  }
});

loadInitialData();
