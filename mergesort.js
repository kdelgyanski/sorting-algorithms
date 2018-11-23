const mergesort = (array) => {
    let sorted = array.slice();
    let left = 0;
    let right = sorted.length;
    let middle = Math.floor(right/2);

    if (right > 1) {
        let leftArray = sorted.slice(left,middle);
        let rightArray = sorted.slice(middle, right);

        leftArray = mergesort(leftArray);
        rightArray = mergesort(rightArray);

        sorted = merge(leftArray, rightArray);
    }
    
    return sorted;
}

const merge = (left, right) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    addRest(i, left, sortedArray);
    addRest(j, right, sortedArray);

    return sortedArray;
}

const addRest = (index, array, sortedArray) => {
    if (index < array.length) {
        for (index; index < array.length; index++) {
            sortedArray.push(array[index]);
        }
    }
}

module.exports = mergesort;