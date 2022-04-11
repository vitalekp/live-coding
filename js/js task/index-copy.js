'use strict';

// How to work on tech tasks. Step by step guide

// algo
// 1 округлить пять елементов разными способами
// 2 return arr

// input: number, prec(количество знаков после запятой)
// return: массив из пяти елементов

const superRound = (num, prec) => {
  return [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

// DATA TEST
console.log(superRound(6.11, 3));
