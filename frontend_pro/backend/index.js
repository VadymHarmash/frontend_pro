const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTask = {
    id: uuidv4(),
    text: req.body.text,
    isDone: req.body.isDone || false
  };

  todos.push(newTask);
  res.status(200).json(newTask);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const task = todos.find(todo => todo.id === id);

  if(!task){
    res.status(404).json("Task is not defined");
  }

  task.isDone = !task.isDone;

  res.status(200).json(task);
});

app.put('/todos/:id/text', (req, res) => {
  const { id } = req.params;
  const { newText } = req.body;

  if (!newText || newText.trim() === '') {
    return res.status(400).json({ message: 'New text is required and cannot be empty' });
  }

  const task = todos.find(todo => todo.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.text = newText.trim();

  res.status(200).json(task);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = todos.findIndex(todo => todo.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  todos.splice(taskIndex, 1);

  res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
