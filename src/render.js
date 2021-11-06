import updateLocalStorage from './storage.js';

function renderTasks(tasks) {
  list.innerHTML = '';
  tasks.forEach(function(item) {
      const li = document.createElement('li');
      li.setAttribute('class', 'list-name');
      item.completed ? li.classList.add('checked') : li.classList.remove('checked');
      const checked = item.completed ? 'checked' : '';
        
        li.innerHTML = `
          <input type="checkbox" class="checkbox" id=${item.index} ${checked}>
          <input onchange="editItem(event, ${item.index});" type="text" value="${item.description}" class="editable-input" contenteditable />
          <button class="remove" onclick="deleteTask(${item.index})">&#128465;</button>
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

export default renderTasks;
