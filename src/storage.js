/* eslint-disable no-use-before-define */
function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default updateLocalStorage;