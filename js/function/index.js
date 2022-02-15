function getSenseOfLife() {
  return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife(55));

function getSquared(num) {
  // console.log(num * num);

  if (num < 0) {
    return num * num;
  } else {
    return num;
  }
}

console.log(getSquared(4));
const res1 = getSquared(-8);
console.log(res1);

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(10, 4);
console.log(5);

const first = 4;
const second = 10;
console.log(sum(first, second));

function print(num) {
  console.log(`I am ${num} years old`);
  console.log(`Sense of life is ${num}`);
}

print(10);

function sendEmail(userId) {}

/* ======> Arrow functions <======= */

// option1
// const mult = (firstNum, secondNum) => {
//     return firstNum * secondNum;
// }

// option2
const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(10, 2));

//2
const squaredArrow = num => num * num;

//3
const getMagicNumber = () => 17;

console.log(getMagicNumber());
