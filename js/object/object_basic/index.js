/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, str, any
// output: obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: object1; obj2 ... objN
  // output: object
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// examples
const transaction = {
  value: 66600,
};
const test = addPropertyV4(transaction, 'currency', 'UAH'); // ==> { value: 170, currency: 'USD' }

console.log(test);
console.log(transaction);
