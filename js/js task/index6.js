// algo
// 1 2 арг пустоая строка, вернуть null
// 2 найти количество вхождений

// input: строка в которой будем искать, строка - предмет поиска
// return: число вхождений

const countOccurrences = (text, str) => {
  if (str.length === 0) {
    return null;
  }

  return text.split(str).length - 1;
};

// DATA TEST
console.log(countOccurrences('abcdaggagg', 'a'));
