import { nanoid } from 'nanoid';
import { getTasks, saveTask } from './local-storage-api';
import { renderTask, renderTasks } from './render-tasks';

export function onHeaderFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    return;
  }
  const task = { id: nanoid(), taskNameValue, taskDescriptionValue };
  saveTask(task);
  renderTask(task);
  event.target.reset;
}

export const initHomePage = () => {
  const tasks = getTasks();
  renderTasks(tasks);
};

export const onTaskListItemClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target);
};
