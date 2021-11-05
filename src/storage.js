module.exports = function updateLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  localStorage.setItem('tasks', JSON.stringify(tasks));
};