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
