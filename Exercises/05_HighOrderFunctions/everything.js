//Loops through elements in an array and checks if each value passes a particular test
function every(array, test) {
    for(elem in array){
        if(!test(array[elem])) return false;
    }
    return true;
}

//Loops through elements using some function and checks whether each value passes a particular test
function everySome(array, test) {
   return !array.some(element => !test(element));
}



console.log(every([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16],  n => n < 10));