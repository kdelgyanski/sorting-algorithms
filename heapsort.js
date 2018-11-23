const heapsort = (array) => {
    let sorted = array.slice();
    for (let i = sorted.length / 2 - 1; i >= 0; i--) {
        heapify(sorted, sorted.length, i);
    }

    for (let i = sorted.length - 1; i >= 0; i--) {
        let temp = sorted[i];
        sorted[i] = sorted[0];
        sorted[0] = temp;

        heapify(sorted, i, 0);
    }
    return sorted;
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