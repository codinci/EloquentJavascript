function countChars(s, char) {
    let countString = String(s);
    let count = 0;
    for(let i = 0; i < countString.length; i++) {
        if(countString[i] == char) {
            count ++;
        }
    }
    return count;
}

function countBs(s) {
    return countChars(s,'B');
}


console.log(countBs('BasketBall'));
// console.log(countChars('BasketBall', 't'));

