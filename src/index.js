import './style.css';
/* eslint-disable */
import renderTasks from './render.js';

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
let tasks = storedTasks || [];
const addInput = document.getElementById('newTask');
const addButton = document.getElementById('addBtn');
const deleteButton = document.getElementById('clear');
console.log(deleteButton);
class Todo {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = tasks.length + 1;
  }
}

if (tasks && tasks.length) {
  renderTasks(tasks);
}

function updatePosition(list) {
  list.forEach((task, id) => {
    task.index = id + 1;
  });
}

function createTask() {
  const text = addInput.value;

  if (text === '') {
    return;
  }
  const task = new Todo(text);

  updatePosition(tasks);
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);

  addInput.value = '';
}

const saveList = (list) => {
  window.localStorage.setItem('tasks', JSON.stringify(list));
  tasks = JSON.parse(localStorage.getItem('tasks'));
};

export default function editItem(event, index) {
  tasks.forEach((task) => {
    if (task.index === Number(index)) {
      task.description = event.target.value;
    }
  });
  saveList(tasks);
}

addButton.addEventListener('click', createTask);

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTask();
  }
});

export  function deleteTask(indx) {
  const newTasks = tasks.filter((task) => task.index !== Number(indx));

  updatePosition(newTasks);
  renderTasks(newTasks);
  saveList(newTasks);
}

// function for delete all completed
function deleteCompleted() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const newList = tasks.filter((task) => task.completed === false);

  updatePosition(newList);
  renderTasks(newList);
  saveList(newList);
}

deleteButton.addEventListener('click', deleteCompleted);

// export default editItem;