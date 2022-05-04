// LIZA

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

// LIZA - bad

// const changeTaskStatus = (event) => {
//   const taskId = Number(event.target.dataset.id);
//   const currentTask = tasks.find((task) => task.id === taskId);
//   currentTask.done = !currentTask.done;
//   renderTasks(tasks);
// };

// listElem.addEventListener("click", changeTaskStatus);

// const addTasks = () => {
//   const inputElem = document.querySelector(".task-input");
//   const obj = {};
//   const newInput = inputElem.value;

//   if (!newInput) {
//     return;
//   }

//   obj.text = newInput;
//   obj.done = false;
//   obj.id = tasks.length + 1;
//   tasks.unshift(obj);
//   inputElem.value = "";
//   renderTasks(tasks);
// };

// buttonELem.addEventListener("click", addTasks);

// LIZA - good

// const taskStatusHandler = event => {
//   const taskId = Number(event.target.dataset.id);
//   const currentTask = tasks.find(task => task.id === taskId);
//   currentTask.done = !currentTask.done;
//   renderTasks(tasks);
// };

// listElem.addEventListener('click', taskStatusHandler);

// const createTaskHandler = () => {
//   const inputElem = document.querySelector('.task-input');
//   const newInput = inputElem.value;

//   if (!newInput) {
//     return;
//   }

//   tasks.push({
//     text: newInput,
//     done: false,
//     id: tasks.length + 1,
//   });

//   inputElem.value = '';
//   renderTasks(tasks);
// };

// buttonELem.addEventListener('click', createTaskHandler);
