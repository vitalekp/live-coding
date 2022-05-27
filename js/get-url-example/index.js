const locationUrl = 'orderField=id&page=22&orderMode=desc&status=1';

// разделить по амперсанту
// найти елемент с строкой page
// разделить по '='
// взять второй eлемент

const getPage = url =>
  url
    .split('&')
    .find(el => el.includes('page'))
    .split('=')[1];

console.log(locationUrl.slice(locationUrl.indexOf('page'), locationUrl.indexOf('&o')));
