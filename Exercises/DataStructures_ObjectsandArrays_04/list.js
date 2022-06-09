function arrayToList(arr) {
    let listObject = null;
    for(let i = arr.length -1; i >= 0 ; i --){
        listObject = {value: arr[i], rest: listObject};
    }
    return listObject;
}

function listToArray(list) {
    let arr = [];
    for(let node = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}

function prepend(value, list) {
    return {value, rest:list};   
}


function nth(list, position) {
    if(!list){
        return undefined;
    }else if(position == 0){
        return list.value;
    } else {
        return nth(list.rest, position - 1);
    }
}

let arr = [1,2,3,4];
console.log(arrayToList(arr));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));