'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });
  
  main();    
});

function readLine() {
  return inputString[currentLine++];
}

function getLetter(s) {
  let letter = "D";
  let first = s[0];

  ['a', 'e', 'i', 'o', 'u'].includes(first) ? letter = "A" : NaN;
  ['b', 'c', 'd', 'f', 'g'].includes(first) ? letter = "B" : NaN;
  ['h', 'j', 'k', 'l', 'm'].includes(first) ? letter = "C" : NaN;
  
  return letter;
}


function main() {
  const s = readLine();
  
  console.log(getLetter(s));
}
