const api = 'https://jsonplaceholder.typicode.com/posts';

export const loadData = async () => {
  try {
    const response = await fetch(`${api}?_limit=10`);
    return await response.json();
  } catch (e) {
    console.error("Error fetching data:", e);
    return [];
  }
};
