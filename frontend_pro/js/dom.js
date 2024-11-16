const generateComment = (commentData, postComments) => {
  const postAuthor = document.createElement('h4');
  const postEmail = document.createElement('p');
  const postComment = document.createElement('li');

  commentData.forEach(comment => {
    postAuthor.classList.add('comment__author');
    postEmail.classList.add('comment__email');
    postComment.classList.add('comment__body');

    postAuthor.innerText = comment.name;
    postEmail.innerText = comment.email;
    postComment.innerText = comment.body;

    postComments.appendChild(postAuthor);
    postComments.appendChild(postEmail);
    postComments.appendChild(postComment);
  })
};

export { generateComment };
