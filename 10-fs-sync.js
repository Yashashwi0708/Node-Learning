const {readFileSync, writeFileSync, read} = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} ${second}`,
    {flag : 'a'} //for appending in result-sync
);

console.log("done with this task");
console.log("starting the new one");