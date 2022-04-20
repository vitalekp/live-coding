'use strict';

// TASK 1

// V1
// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[[keysList[index]]] = valuesList[index];
//   }

//   return obj;
// }

// V2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

// V3
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

// if code doesn't work - split by steps

// test data
const keys = ['hour', 'min', 'sec'];
const values = ['10', '13', '32'];
const result = buildObject(keys, values);
console.log(result);

// TASK 2

// input: obj1, obj2
// output: boolean

// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// algo
// 1 get keys, get values
// 2 chech keys length
// 3 compare every key/value with some method
// *** compare every key/value if some is not equal some method

function compareObjects(obj1, obj2) {
  if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
    return false;
  }
  const objFirstKeys = Object.keys(obj1);
  const objSecondKeys = Object.keys(obj2);
  const objFirstValues = Object.values(obj1);
  const objSecondValues = Object.values(obj2);

  return objFirstKeys.every(
    (key, index) =>
      (key === objSecondKeys[index]) === (objFirstValues[index] === objSecondValues[index]),
  );
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
const res = compareObjects(obj1, obj4); // ==> true

console.log(res);
