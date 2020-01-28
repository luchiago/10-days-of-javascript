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

function factorial(number) {
  if (number == 1) return number;

  return factorial(number - 1) * number;
}


function main() {
  const n = +(readLine());
    
  console.log(factorial(n));
}
