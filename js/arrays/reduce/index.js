const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback
// out: acc (num)

// callback
// input: acc, el, (index, arr)
// out: acc

const res = transactions.reduce((acc, element) => acc + element);
console.log(res);

// transactions.reduce((acc, element) => {
//   console.log('acc = ' + acc);

//   acc += element;
//   return acc;

//   // console.log(acc);
//   // console.log(element);
//   // acc += 100;

//   // return acc;
// }, 0);
