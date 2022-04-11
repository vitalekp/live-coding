// in: arr, callback
// out: arr

// callback
// el
// boolean

// algo
// 1. iterate arr
// 2. apply callback to el
// 3.if true - push to res arr

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }

  return res;
};

function sum(a, b) {
  console.log(arguments);
}

sum(1, 2);

// test data

const callback = num => num < 3;
const res = filterArrayElements([1, 2, 3, 4], callback);

console.log(res);
