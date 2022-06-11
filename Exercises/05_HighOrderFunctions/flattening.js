let arrays = [[1,2,3],[4,5], [6]];

const combineArray = arrays.reduce(
    (previousVal, currentVal) => previousVal.concat(currentVal),
[]);

console.log(combineArray);

// console.log(arrays.reduce((flat, current) => flat.concat(current), []));