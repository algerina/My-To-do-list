import './style.css';

// const updateLocalStorage = require('./storage.js');

const renderTasks = require('./render.js');

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
const tasks = storedTasks || [];

// const list = document.getElementById('todoList');
const addInput = document.getElementById('newTask');
const addButton = document.getElementById('addBtn');
class Todo {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = tasks.length + 1;
  }

  addArray() {
    tasks.push({
      description: this.description,
      completed: this.completed,
      index: this.index,
    });
  }
}

if (storedTasks && storedTasks.length) {
  renderTasks(storedTasks);
}

function createTask() {
  const text = addInput.value;

  if (text === '') {
    return;
  }
  const task = new Todo(text);

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks.renderTasks(tasks);

  addInput.value = '';
}

addButton.addEventListener('click', createTask);

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTask();
  }
});
