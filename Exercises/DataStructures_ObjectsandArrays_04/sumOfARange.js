function range(start, end, step){
    let rangeArray = [];
    if(step !== undefined && step < 0){
        for(let i = start; i >= end; i += step){
            rangeArray.push(i);
        }
    } else if( step !== undefined ){
        for(let i = start; i <= end; i += step){
            rangeArray.push(i);
        }
    }
    else {
        for(let i = start; i <= end; i ++){
            rangeArray.push(i);
        }
    }
    return rangeArray;
}

function sum(rangeArray){
    let result = 0;
    for(let n of rangeArray){
        result = result + n;
    }
    return result;
}


console.log(range(1,10,2));
console.log(sum(range(1,10,2)));
console.log(range(5,2,-1));

