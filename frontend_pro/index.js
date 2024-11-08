const api = 'https://jsonplaceholder.typicode.com/posts';
const postsList = document.querySelector('#posts');
let userId = 1;

fetch(`${api}?_limit=10`).then(response => response.json()).then(data => {
  data.forEach((post) => {
    generatePost(post);
  });
});

const loadComments = (postId, postComments) => {
  fetch(`${api}/${postId}/comments?_limit=2`).then(response => response.json()).then(data => {
    data.forEach((comment) => {
      generateComment(comment, postComments);
    });
  });
};

const generateComment = (commentData, postComments) => {
  const postAuthor = document.createElement('h4');
  const postEmail = document.createElement('p');
  const postComment = document.createElement('li');

  postAuthor.classList.add('comment__author');
  postEmail.classList.add('comment__email');
  postComment.classList.add('comment__body');

  postAuthor.innerText = commentData.name;
  postEmail.innerText = `(${commentData.email})`;
  postComment.innerText = commentData.body;

  postComments.appendChild(postAuthor);
  postComments.appendChild(postEmail);
  postComments.appendChild(postComment);
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

  postButton.addEventListener('click', () => {
    loadComments(postsData.id, postComments);
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
