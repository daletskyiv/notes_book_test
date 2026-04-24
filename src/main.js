import {
  initHomePage,
  onHeaderFormSubmit,
  onTaskListItemClick,
} from './js/handlers';
import { refs } from './js/refs';

refs.headerForm.addEventListener('submit', onHeaderFormSubmit);
refs.tasksList.addEventListener('click', onTaskListItemClick);
document.addEventListener('DOMContentLoaded', initHomePage);
