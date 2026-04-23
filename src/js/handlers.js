import { saveTask } from './local-storage-api';

export function onHeaderFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    return;
  }
  const task = { taskNameValue, taskDescriptionValue };
  saveTask(task);
}
