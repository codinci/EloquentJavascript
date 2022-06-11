import SCRIPTS from "./script.js";

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
            } else {
        counts[known].count++;
        }
    }
    return counts;
}

function textDirection(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
        }).filter(({name}) => name != "none");

        if(counted.length == 0) return 'ltr';

        return counted.reduce((a,b) => a.count > b.count ? a:b).name;
}


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

console.log(textDirection("Hello!"));
console.log(textDirection("Hey, مساء الخير"));