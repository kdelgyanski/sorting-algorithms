const gnomesort = (array) => {
    let i = 0;
    while (i < array.length) {
        if (array[i] >= array[i+1]) {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            if (i === 0) {
                i++;
            } else {
                i--;
            }
        } else {
            i++
        }
    }
    console.log(array);
};

module.exports = gnomesort;