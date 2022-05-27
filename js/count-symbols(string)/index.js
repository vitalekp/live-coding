// task - написати функцію, яка знаходить кількість символів в рядку

// algo
// 1 розбити рядок на масив
// 2 пройтися по масиву і порахувати кількість символів

const tesStr = 'abcdfggad$64hdh20923463292-t=ytrh93405439t9gg0239743242564tgf';

// знаходить по одному символу
const countSymbols = (str, value) => str.split('').filter(el => el === value).length;

const test = countSymbols(tesStr, 'g');

console.log(test);

// знаходить будь яке слово
const countOccurrences = (str, text = '') => text.split(str).length - 1;

console.log(countOccurrences('ar', 'marcarbravoarca'));
