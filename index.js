const heapsort = require('./heapsort');
const gnomesort = require('./gnomesort');

const sorted = [1,2,3,4,5,6,7,8,9,10];
const reversed = [10,9,8,7,6,5,4,3,2,1];
const unsorted = [5,2,9,6,1,10,3,7,4,8];

heapsort(unsorted);
heapsort(sorted);
heapsort(reversed);

gnomesort(unsorted);
gnomesort(sorted);
gnomesort(reversed);