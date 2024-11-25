const apiUrl = 'http://localhost:3000';

export const getTasks = async () => {
  const response = await fetch(`${apiUrl}/todos`, {
    method: 'GET',
  });
  return await response.json();
};

export const addTask = async (task) => {
  const response = await fetch(`${apiUrl}/todos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  const newTask = await response.json();
  return newTask;
};

export const changeTask = async (id) => {
  await fetch(`${apiUrl}/todos/${id}`, {
    method: 'PUT',
  });

  await getTasks();
};

export const changeTaskText = async (id, newText) => {
  const response = await fetch(`${apiUrl}/todos/${id}/text`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newText }),
  });

  if (!response.ok) {
    throw new Error('Failed to update task text');
  }

  return await response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${apiUrl}/todos/${id}`, {
    method: 'DELETE',
  });

  await getTasks();
};
