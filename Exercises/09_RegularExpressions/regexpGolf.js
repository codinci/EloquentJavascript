//string contains 'car' or 'cat'
verify(/ca[rt]/,
        ["my car", "bad cats"],
        ["camper", "high art"]);

//string contains 'prop' or 'pop'
verify(/pr?op/,
        ["pop culture", "mad props"],
        ["plop", "prrrop"]);

// string contains 'ferret', 'ferry' or 'ferrari'
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

//string ending in 'ious'
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// a string that ends in a whitespace followed, by a 'period', 'comma'. 'colon' or 'semicolon'
verify(/\s[.,:;]/,
    ["bad punctuation .", "I bought :"],
    ["escape the dot","hi."]);

//A string longer than 6 characters
verify(/\w{7}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

// a word without the letter 'e' or 'E'
verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}