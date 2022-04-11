// How to work on tech tasks. Step by step guide

// algo
// 1 не массив, вернуть null
// 2 поделить на строку длиной num
// 3 дополнить последнюю строку точками
// 4 вернуть массив

// input: str, num
// return: массив

const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const arrStr = [];
  let startCount = 0;
  while (true) {
    const chunk = str.substr(startCount, num);

    if (chunk.length < num) {
      arrStr.push(chunk + '.'.repeat(num - chunk.length));
      break;
    }

    arrStr.push(chunk.slice());
    startCount += num;
  }

  return arrStr;
};

// DATA TEST
console.log(splitString('dfgjigrnvaofj', 3));
