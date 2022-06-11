let normalArray = ["car", "bus","truck"];

function reverseArray(normalArray) {
    let reversedArray = [];
    for(let i = normalArray.length-1; i >= 0; i--){
        reversedArray.push(normalArray[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(originalArray) {
    for (let i = 0; i < Math.floor(originalArray.length / 2); i++) {
        let reversedArray = originalArray[i];
        originalArray[i] = originalArray[originalArray.length - 1 - i];
        originalArray[originalArray.length - 1 - i] = reversedArray;
    }
    return originalArray;
}

function reverseInPlace(originalArray) {
    for(let i = 0; i < originalArray.length; i++){
        let temp = originalArray.splice(i,1)[0];
        originalArray.unshift(temp);
    }
    return originalArray;
}

let arrayReversal = normalArray.reduceRight((accumulator, element) => {
    accumulator.push(element);
    return accumulator;
}, []);

function customReverse(originalArray) {
    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;
    
    while(leftIndex < rightIndex) {
        //swap the elements with temp variable
        let temp = originalArray[leftIndex];
        originalArray[leftIndex] = originalArray[rightIndex];
        originalArray[rightIndex] = temp;

        //move Indices to the middle
        leftIndex ++;
        rightIndex --;
    }
}

let originalArray = [1,2,3,4,5];

console.log(normalArray);
console.log(reverseArray(normalArray));
console.log(normalArray);

console.log(originalArray);
reverseArrayInPlace(originalArray);
console.log(originalArray);

console.log(originalArray);
reverseInPlace(originalArray);
console.log(originalArray);

console.log(normalArray);
console.log(arrayReversal);
console.log(normalArray);

console.log(originalArray);
customReverse(originalArray);
console.log(originalArray);
