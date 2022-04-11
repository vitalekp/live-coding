// How to work on tech tasks. Step by step guide

// algo
// 1 вернуть null если 1 аргумент не строка +++
// 2 делить на подстроки длиной 10, если не задан 2 аргумент +++
// 2 разбить строку на длину num в массив
// 3 склеить массив, и віводить каждій кусочекк в новой строке

// input: number, prec(количество знаков после запятой)
// return: массив из пяти елементов

const splitText = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const arr = [];
  let startStr = 0;
  while (true) {
    let chunk = str.substr(startStr, num);
    if (chunk.length === 0) {
      break;
    }

    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startStr += num;
  }

  return arr.join('\n');
};

// DATA TEST
console.log(splitText('vasimatsnex', 4));
