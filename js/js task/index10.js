// algo
// 1 создать функцию defer которая будет принимать фун и количество ms на которые отложить фун
// 2 export func
// 2

const defer = (func, ms) => {
  return function () {
    setTimeout(func.apply(this, arguments), ms);
  };
};
