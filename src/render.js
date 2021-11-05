const updateLocalStorage = require('./storage.js');

function renderTasks(tasks) {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  tasks.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-name');
    if (item.completed) {
      li.classList.add('checked');
    } else {
      li.classList.remove('checked');
    }
    const checked = item.completed ? 'checked' : '';

    li.innerHTML = `
            <input type="checkbox" class="checkbox" id=${item.index} ${checked}>
            <span>${item.description}</span>
            <button class="remove"></button>
          `;
    list.append(li);
  });
  //   const list = document.getElementById('todoList');

  const lis = list.querySelectorAll('.checkbox');

  lis.forEach((li) => {
    li.addEventListener('change', () => {
      tasks.forEach((task) => {
        if (Number(li.id) === task.index) {
          if (li.checked) {
            task.completed = true;
            li.parentElement.classList.add('checked');
            updateLocalStorage.updateLocalStorage();
          } else {
            task.completed = false;
            li.parentElement.classList.remove('checked');
            updateLocalStorage.updateLocalStorage();
          }
        }
      });
    });
  });
}

module.exports = { renderTasks };