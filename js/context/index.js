'use strict';

// const obj = {
//   run: function () {
//     const bindedLog = console.log.bind({ name: 'Tom' });
//     bindedLog(this);
//   },
// };

// function run() {
//   console.log(this);
//   console.log(`I've done run in ${this.city}`);
// }

// function run2(city) {
//   console.log(`I've done run in ${city}`);
// }
// run();

// console.log(window);

// 1 what is context?
// 2 when context is lost (callback, если присвоить в переменную, вложенные функции)
// 3 how to fix context (=>, bind)

// когда используется класс, тогда используеться контекст

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  // none
  // undef
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      this.secondsPassed += 1;
      // console.log(this);
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }

    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// test data
// timer.startTimer();
// console.log(timer.getTime());
// timer.startTimer();
// console.log(timer.getTime());

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// }

// let user = makeUser();

// alert(user.ref.name);

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// alert(user.ref().name);
