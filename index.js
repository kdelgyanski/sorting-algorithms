const heapsort = require('./heapsort');
const gnomesort = require('./gnomesort');
const mergesort = require('./mergesort');

const sorted = [1,2,3,4,5,6,7,8,9,10];
const reversed = [10,9,8,7,6,5,4,3,2,1];
const unsorted = [5,2,9,6,1,10,3,7,4,8];

console.log(heapsort(unsorted));
console.log(heapsort(sorted));
console.log(heapsort(reversed));

console.log(gnomesort(unsorted));
console.log(gnomesort(sorted));
console.log(gnomesort(reversed));

console.log(mergesort(unsorted));
console.log(mergesort(sorted));
console.log(mergesort(reversed));