import { getTasks, addTask, changeTask, changeTaskText, deleteTask } from "./api.js";

const todoList = document.querySelector('#todoList');
const textInput = document.querySelector('#textInput');

let tasks = [];

export const showData = async () => {
  tasks = await getTasks();
};

document.querySelector('#addButton').addEventListener('click', async () => {
  if (textInput.value.trim() === '') return;

  const task = {
    text: textInput.value.trim(),
    isDone: false
  };

  const newTask = await addTask(task);
  generateListItem(newTask, tasks.length);
  tasks.push(newTask);
  textInput.value = '';
});

const generateListItem = (task, index) => {
  const todoListItem = document.createElement('li');
  todoListItem.classList.add('todoList__item');

  const todoText = document.createElement('p');
  todoText.classList.add('todoList__item__text');
  todoText.textContent = task.text;
  task.isDone ? todoText.classList.add('todoList__item__text-done') : todoText.classList.remove('todoList__item__text-done');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'Delete task';

  const editButton = document.createElement('button');
  editButton.classList.add('editButton');
  editButton.textContent = 'Edit task';

  const todoListItemCheckbox = document.createElement('input');
  todoListItemCheckbox.classList.add('todoList__item__checkbox');
  todoListItemCheckbox.type = 'checkbox';
  todoListItemCheckbox.checked = task.isDone;

  todoListItemCheckbox.addEventListener('change', async () => {
    try {
      await changeTask(task.id);
      tasks[index].isDone = todoListItemCheckbox.checked;

      if (todoText) {
        if (todoListItemCheckbox.checked) {
          todoText.classList.add('todoList__item__text-done');
        } else {
          todoText.classList.remove('todoList__item__text-done');
        }
      }
    } catch (error) {
      console.error('Failed to change task status:', error);
    }
  });

  editButton.addEventListener('click', async () => {
    const newText = prompt('Enter new text:', task.text);

    if (newText && newText.trim() !== task.text) {
      try {
        const updatedTask = await changeTaskText(task.id, newText.trim());
        task.text = updatedTask.text;
        todoText.textContent = updatedTask.text;
      } catch (error) {
        console.error('Failed to update task text:', error);
      }
    }
  });

  deleteButton.addEventListener('click', async () => {
    tasks.splice(index, 1);

    await deleteTask(task.id);

    todoListItem.remove();

    tasks.forEach((task, newIndex) => {
      const listItem = todoList.children[newIndex];
      const checkbox = listItem.querySelector('.todoList__item__checkbox');
      checkbox.addEventListener('change', async (e) => {
        await changeTask(task.id);
        task.isDone = checkbox.checked;
        e.target.previousElementSibling.classList.toggle('todoList__item__text-done');
      });
    });
  });

  todoListItem.appendChild(todoText);
  todoListItem.appendChild(todoListItemCheckbox);
  todoListItem.appendChild(editButton);
  todoListItem.appendChild(deleteButton);

  todoList.appendChild(todoListItem);
};

const loadTasks = async () => {
  await showData();
  tasks.forEach((task, index) => {
    generateListItem(task, index);
  });
};

loadTasks();
