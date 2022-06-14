import { run, topScope } from "./DependencyFile/code.js";

//Defines an array
topScope.array = (...values) => values;
//Defines the length of the array
topScope.length = array => array.length;
//Defines the last element of the array
topScope.element = (array, i) => array[i];

run(`
do(define(sum, fun(array,
        do(define(i, 0),
            define(sum, 0),
            while(<(i, length(array)),
            do(define(sum, +(sum, element(array, i))),
                define(i, +(i, 1)))),
            sum))),
    print(sum(array(1, 4, 3))))
`);
