/* eslint-disable */
import editItem from './index.js';
/* eslint-disable */
import {deleteTask} from './index.js';
// /* eslint-disable */

import updateLocalStorage from './storage.js';

const list = document.getElementById('todoList');
function renderTasks(tasks) {
  list.innerHTML = '';
  tasks.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-name');
    if (item.completed) {
      li.classList.add('checked');
    } else {
      li.classList.remove('checked');
    }    const checked = item.completed ? 'checked' : '';

    li.innerHTML = `
          <input type="checkbox" class="checkbox" id=${item.index} ${checked}>
          <input  type="text" value="${item.description}" class="editable-input" contenteditable />
          <button class="remove">X</button>
        `;
        li.querySelector('.editable-input').addEventListener('change',  ()=> editItem(event, item.index));
        li.querySelector('.remove').addEventListener('click',  ()=> deleteTask(item.index));
    list.append(li);
  });

  const lis = list.querySelectorAll('.checkbox');

  lis.forEach((li) => {
    li.addEventListener('change', () => {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.forEach((task) => {
        if (Number(li.id) === task.index) {
          if (li.checked) {
            task.completed = true;
            li.parentElement.classList.add('checked');
            updateLocalStorage(tasks);
          } else {
            task.completed = false;
            li.parentElement.classList.remove('checked');
            updateLocalStorage(tasks);
          }
        }
      });
    });
  });
}

export default renderTasks;