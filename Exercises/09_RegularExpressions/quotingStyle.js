//replacing single quotes with double quotes except in contractions
let text = "'I'm the cook,' he said, 'it's my job'";

console.log(text.replace((/(^|\W)'|'(\W|$)/g), '$1"$2'));