const todoList = document.querySelector('#todoList');
const textInput = document.querySelector('#textInput');

const emptyListElement = document.querySelector('#emptyListAlert');

const checkIfListIsEmpty = () =>
  todoList.children.length === 0 ? emptyListElement.style.display = 'block' : emptyListElement.style.display = 'none';

checkIfListIsEmpty();

document.querySelector('#addButton').addEventListener('click', () => {
  if (textInput.value.trim() === '') return;

  const todoListItem = document.createElement('li');
  todoListItem.classList.add('todoList__item');
  todoListItem.textContent = textInput.value;

  textInput.value = '';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'Delete task';
  todoListItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    checkIfListIsEmpty();
  });

  console.log('s')

  todoList.appendChild(todoListItem);
  checkIfListIsEmpty();
});
