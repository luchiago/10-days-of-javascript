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

function getSecondLargest(nums) {
  nums.sort((x, y) => x - y).reverse();
  let largest_number = nums.shift();
  for (let num of nums) {
    if(num !== largest_number) {
      return num;
    }
  }
}

function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);
  
  console.log(getSecondLargest(nums));
}
