const locationUrl = 'orderField=id&page=32&orderMode=desc&status=1';

// разделить по амперсанту
// найти елемент с строкой page
// разделить по '='
// взять второй eлемент

const searchParams = new URLSearchParams(locationUrl);
console.log(searchParams.get('page'));

// const getPage = url =>
//   url
//     .split('&')
//     .find(el => el.includes('page'))
//     .split('=')[1];

// console.log(getPage(locationUrl));

// console.log(locationUrl.slice(locationUrl.indexOf('page'), locationUrl.indexOf('&o')));

const myLocation = 'orderField=id&page=22&orderMode=desc&status=1';
const temp = myLocation.slice(myLocation.indexOf('page') + 5);
console.log(temp);
console.log(temp.slice(0, temp.indexOf('&')));
