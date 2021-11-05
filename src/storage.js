export function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}