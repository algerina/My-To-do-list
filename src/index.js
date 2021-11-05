import {updateLocalStorage} from './storage';
import './style.css';


class Todo {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = tasks.length + 1;
  }
    addArray() {
      tasks.push({description: this.description,
        completed: this.completed, 
        index: this.index})
    }

}

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
const tasks = storedTasks || [];

const list = document.getElementById('todoList');
const addInput = document.getElementById('newTask');
const addButton = document.getElementById('addBtn');

if (storedTasks && storedTasks.length) {
  renderTasks(storedTasks);
}

function createTask() {
  const text = addInput.value;

  if (text === "") {
      return;
  }
  const task = new Todo(text);
  
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);

  addInput.value = "";
}

 

function renderTasks(tasks) {
  list.innerHTML = '';
  tasks.forEach(function(item) {
      const li = document.createElement('li');
      li.setAttribute('class', 'list-name');
      item.completed ? li.classList.add('checked') : li.classList.remove('checked');
      const checked = item.completed ? 'checked' : '';
        
        li.innerHTML = `
          <input type="checkbox" class="checkbox" id=${item.index} ${checked}>
          <span>${item.description}</span>
          <button class="remove"></button>
        `;
        list.append(li);
  });

  const lis = list.querySelectorAll('.checkbox');

  lis.forEach(li => {
      li.addEventListener('change', function() {
          tasks.forEach(task => {
              if (Number(li.id) === task.index) {
                  if (li.checked) {
                      task.completed = true;
                      li.parentElement.classList.add('checked');
                      updateLocalStorage();
                  } else {
                      task.completed = false;
                      li.parentElement.classList.remove('checked');
                      updateLocalStorage();
                  }
                  
              }
          })
      })
  })
}

addButton.addEventListener("click", createTask);

addInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        createTask();
    }
});

