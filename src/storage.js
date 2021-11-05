/* eslint-disable no-use-before-define */
function updateLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default updateLocalStorage;