import './style.css';
// Selectors
const addTasks = document.querySelector('.add-tasks');
const taskButton = document.querySelector('.task-button');

const Tasks = [];
let count = 0;

class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

Tasks.push(new Todo('Read', false, (count += 1)));
Tasks.push(new Todo('Yoga', false, (count += 1)));
Tasks.push(new Todo('Cook', false, (count += 1)));

const Items = document.createElement('div');

const addList = () => {
  Tasks.forEach((task) => {
    const taskItem = document.createElement('div');

    const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    taskItem.classList.add('element');
    taskItem.appendChild(checkBox);
    taskItem.appendChild(descriptionElem);
    Items.appendChild(taskItem);
  });

  document.getElementById('items').appendChild(Items);

  const removeButton = document.createElement('button');
  removeButton.classList.add('removeBtn');
  removeButton.innerText = 'Clear all completed';
  removeButton.type = 'button';
  Items.appendChild(removeButton);

  return Items;
};

addList();