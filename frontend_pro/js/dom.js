const postsList = document.querySelector('#posts');

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

export { generatePost, generateComment, clearForm };
