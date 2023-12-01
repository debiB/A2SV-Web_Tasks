const _ = require('lodash');

var arr = [100, 1, 2, 700, 3, 4, 5, 6, 7, 99, 8, 9, 10];

const sortedArr = _.sortBy(arr);
const filtered = _.filter(arr, (item) => item > 10);
const maxval = _.max(arr); // Corrected from _.max(numbers)
const chunkedArray = _.chunk(arr, 3);
console.log(sortedArr, filtered, maxval, chunkedArray);
const debounce = _.debounce(() => console.log('Hello'), 20);
debounce();
debounce();
