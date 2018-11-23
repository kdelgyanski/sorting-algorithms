const pancakesort = (array) => {
    let sorted = array.slice();
    for (let i = sorted.length - 1; i > 0; i--) {
        let max = findIndexOfMax(sorted, i+1);
        sorted = flip(sorted, max);
        sorted = flip(sorted, i);
    }

    return sorted;
}

/**
 * This method returns the index of the largest element in a subarray form 0 to index of the given array
 * @param {the array to be searched} array 
 * @param {the index where the search ends} index 
 */
const findIndexOfMax = (array, index) => {
    let subarray = array.slice(0,index);
    return subarray.reduce((max,a,i) => subarray[max] < a ? i : max, 0);
}
/**
 * The method flip a part of the array from 0 to index
 * @param {array to be modified} array 
 * @param {specifies the subarray from 0 to this index which will be flipped} index 
 */
const flip = (array, index) => {
    let reversed = [];
    let toBeReversed = array.slice(0, index + 1);
    reversed = toBeReversed.reverse();

    let rest = array.slice(index + 1, array.length);
    rest.forEach(element => {
        reversed.push(element);
    });
    
    return reversed;
}

module.exports = pancakesort;