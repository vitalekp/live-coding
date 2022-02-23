'use strict';

// message = 'Hello';
// console.log(message);

const numbersList1 = [1, 2, 3, 4, 5];

// массив это обьект класса Array. Через точку берет данные с класса Array
// мутировать данные плохо
// Понимать зачем метод существует. Что принимает и что возвращает.
// всегда использовать MDN
// обращать внимание на input, return

console.log('before pop ', numbersList1);

// pop

// input: none

// return: number

const res = numbersList1.pop();
console.log(res);

console.log('after pop ', numbersList1);

// push

const numbersList2 = [1, 2, 3, 4, 5];

console.log('before push ', numbersList2);

// input: number
// return: number (длину массива)

const pushRes = numbersList2.push(88);
console.log(pushRes);

console.log('after push ', numbersList2);

// shift
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ', numbersList3);

// input: none
// output: number (елемент который удалили)

console.log(numbersList3.shift());

console.log('after shift ', numbersList3);
