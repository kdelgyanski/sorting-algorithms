const gnomesort = (array) => {
    let sorted = array.slice();
    let i = 0;
    while (i < sorted.length) {
        if (sorted[i] >= sorted[i+1]) {
            let temp = sorted[i];
            sorted[i] = sorted[i+1];
            sorted[i+1] = temp;
            if (i === 0) {
                i++;
            } else {
                i--;
            }
        } else {
            i++
        }
    }
    return sorted;
};

module.exports = gnomesort;