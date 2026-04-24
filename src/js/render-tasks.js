import { refs } from './refs';

export const renderTasks = tasks => {
  const markup = tasks
    .map(
      ({
        id,
        taskNameValue,
        taskDescriptionValue,
      }) => `<li class="task-list-item">
      <button class="task-list-item-btn data-id=${id}">Delete</button>
      <h3>${taskNameValue}</h3>
      <p>${taskDescriptionValue}</p>
  </li>`
    )
    .join('');
  refs.tasksList.innerHTML = markup;
};
export const renderTask = ({ id, taskNameValue, taskDescriptionValue }) => {
  refs.tasksList.insertAdjacentHTML(
    'beforeend',
    `<li class="task-list-item">
      <button class="task-list-item-btn data-id=${id}">Delete</button>
      <h3>${taskNameValue}</h3>
      <p>${taskDescriptionValue}</p>
  </li>`
  );
};
