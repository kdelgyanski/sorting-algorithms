const heapsort = (array) => {
    for (let i = array.length / 2 - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;

        heapify(array, i, 0);
    }
    console.log(array);
}

const heapify = (array, size, root) => {
    let largest = root;
    let left = 2 * root + 1;
    let right = 2 * root + 2;

    if (left < size && array[left] > array[largest]) {
        largest = left;
    }

    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== root) {
        let temp = array[largest];
        array[largest] = array[root];
        array[root] = temp;
        heapify(array, size, largest);
    }
}

module.exports = heapsort;