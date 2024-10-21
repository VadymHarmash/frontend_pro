const todoList = document.querySelector('#todoList');
const textInput = document.querySelector('#textInput');
const emptyListElement = document.querySelector('#emptyListAlert');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const checkIfListIsEmpty = () => {
  todoList.children.length === 0
    ? (emptyListElement.style.display = 'block')
    : (emptyListElement.style.display = 'none');
};

checkIfListIsEmpty();

document.querySelector('#addButton').addEventListener('click', () => {
  if (textInput.value.trim() === '') return;

  tasks.push({
    value: textInput.value,
    isDone: false,
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  generateListItem(tasks[tasks.length - 1], tasks.length - 1);
  textInput.value = '';
  checkIfListIsEmpty();
});

const generateListItem = (task, index) => {
  const todoListItem = document.createElement('li');
  todoListItem.classList.add('todoList__item');

  const todoText = document.createElement('p');
  todoText.classList.add('todoList__item__text');
  todoText.textContent = task.value;
  task.isDone ? todoText.classList.add('todoList__item__text-done') : todoText.classList.remove('todoList__item__text-done');

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'Delete task';

  const todoListItemCheckbox = document.createElement('input');
  todoListItemCheckbox.classList.add('todoList__item__checkbox');
  todoListItemCheckbox.type = 'checkbox';
  todoListItemCheckbox.checked = task.isDone;

  todoListItemCheckbox.addEventListener('change', (e) => {
    tasks[index].isDone = todoListItemCheckbox.checked;
    e.target.previousElementSibling.classList.toggle('todoList__item__text-done');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  deleteButton.addEventListener('click', () => {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    todoListItem.remove();
    checkIfListIsEmpty();
  });

  todoListItem.appendChild(todoText);
  todoListItem.appendChild(todoListItemCheckbox);
  todoListItem.appendChild(deleteButton);

  todoList.appendChild(todoListItem);
};

const loadTasks = () => {
  tasks.forEach((task, index) => {
    generateListItem(task, index);
  });
  checkIfListIsEmpty();
};

loadTasks();
