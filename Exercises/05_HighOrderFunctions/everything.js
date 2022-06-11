function every(array, test) {
    for(elem in array){
        if(!test(array[elem])) return false;
    }
    return true;
}

function everySome(array, test) {
   return !array.some(element => !test(element));
}



console.log(every([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16],  n => n < 10));