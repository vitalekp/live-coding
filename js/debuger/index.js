const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const taskStatusHandler = event => {
  if (!event.target.type === 'checkbox') {
    return;
  }

  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find(task => task.id === taskId);
  currentTask.done = !currentTask.done;

  renderTasks(tasks);
};

listElem.addEventListener('click', taskStatusHandler);

const createBtn = document.querySelector('.create-task-btn');

function createTaskHandler() {
  const inputElem = document.querySelector('.task-input');
  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

  tasks.push({
    text: newInput,
    done: false,
    id: tasks.length + 1,
  });

  inputElem.value = '';
  renderTasks(tasks);
}

createBtn.addEventListener('click', createTaskHandler);
