function deepEqual(obj1, obj2) {
    //Evaluates whether values are strictly equal to each other
    if(obj1 === obj2){
    return true;
    }

    //Evaluates whether values are empty or are objects
    if(obj1 == null || typeof obj1 != 'object' ||
        obj2 == null || typeof obj2 != 'object')
    {
        return false;
    }

    // Initializes the object keys for both parameters
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    //Checks the length of both objects
    if(keysObj1.length != keysObj2.length) {
        return false;
    }

    //Checks equality of keys in both objects
    for(let key of keysObj1){
        if(!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])){
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
//true
console.log(deepEqual(obj, {here: 1, object: 2}));
//false
console.log(deepEqual("2",2));
//false
console.log(deepEqual(obj,{here: {is: "un"}, object:2}));
//false