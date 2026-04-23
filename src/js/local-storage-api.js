export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function saveTask(task) {
  const tasks = getTasks() || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
