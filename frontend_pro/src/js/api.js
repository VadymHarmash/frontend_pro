const api = 'https://jsonplaceholder.typicode.com/posts';

const loadData = () => {
  return fetch(`${api}?_limit=10`).then(response => response.json()).catch(e => console.log(e));
}

const loadComments = (postId) => {
  return fetch(`${api}/${postId}/comments?_limit=2`).then(response => response.json()).catch(e => console.log(e));
}

const addPost = async (newPost) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    return await response.json();
  } catch (error) {
    console.log('Error:', error);
  }
};

export { loadData, loadComments, addPost };
