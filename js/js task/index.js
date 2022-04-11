// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1 вернуть null если в промежутке нет целых чисел (if)
// 2 создать цикл с length итераций
// 3 при каждой итерации генерировать случайное число в массив
// return array

// input: (length, from, to)
// return: массив length элементы которого целые случайные числа в промежутке from => to

const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);
  let arrRandomsNums = [];

  for (let i = 0; i < length; i += 1) {
    arrRandomsNums.push(Math.round(Math.random() * (max - min) + min));
  }

  return arrRandomsNums;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

console.log(getRandomNumbers(5, 1.4, 3.22));
