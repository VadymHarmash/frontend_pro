import { loadComments } from "./loadComments.js";

const api = 'https://jsonplaceholder.typicode.com/posts';
const postsList = document.querySelector('#posts');
let userId = 1;

fetch(`${api}?_limit=10`).then(response => response.json()).then(data => {
  data.forEach((post) => {
    generatePost(post);
  });
});

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

  postButton.addEventListener('click', () => {
    loadComments(api, postsData.id, postComments);
    postButton.disabled = true;
  });

  postsList.appendChild(post);
  userId++;
};

document.querySelector('#posts__form').addEventListener('submit', (e) => {
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

  if(newPostTitle && newPostBody) {
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost),
    }).then(response => response.json()).then(data => {
      generatePost(data);
      formTitle.value = '';
      formBody.value = '';
    }).catch(error => console.error('Error:', error));
  }
});
