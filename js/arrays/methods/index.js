// ---filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func
// output: arr

// input: num, index(optional), arr(optional)
// output: boolean

// option 1

// function filterCallback(num) {
//   console.log('filterCallback is called ', num);

//   return num > 500;
// };

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

// option 2
// const filterRes = anotherNumbersList.filter(function(num) {
//     return num > 500;
//   };);
// console.log(filterRes);

// option 3
const filterRes = anotherNumbersList.filter(num => num > 500);
console.log(filterRes);

// хорошо понимать метод, и только тогда писать в одну строку

// ---map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func, obj
// output: arr

// input: el
// output: modified el
const mapRes = numbersList.map(el => {
  if (el < 0) {
    return 'number is negative';
  }
  return el * el;
});

console.log(mapRes);

// ---find

// input: func
// output: el

// input: el
// output: boolean

// option 1
// const findRes = numbersList.find(el => {
//   if (el % 2 === 1) {
//     return true;
//   }
//   return false;
// });

// option 2
const findRes = numbersList.find(el => el % 2 === 1);

console.log(findRes);

// ---some
// input: func
// output: boolean

// ---forEach
// input: func
// output: undefined

// callback
// input: el
// output: undefined

const forEachRes = numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});

console.log(forEachRes);
