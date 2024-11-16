export const generateComment = (commentData, postComments) => {
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
