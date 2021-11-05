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

const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('#newTask');
const todoBtn = document.querySelector('.todo-button');

todoForm.addEventListener('submit', addTask);

function addTask(event, Tasks, description, completed) {
  event.preventDefault();
  const todoInput = (this.querySelector('[name=task]')).value;
  console.log("hello");
  Tasks.push({
    description: input.value,
    completed: false,
    index: Tasks.length,
  });


}

