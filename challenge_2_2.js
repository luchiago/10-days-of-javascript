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

function getGrade(score) {
  let grade;
  if (score >= 0 && score <= 5){
    grade = 'F';
  } else if (score >= 6 && score <= 10) {
    grade = 'E';
  } else if (score >= 11 && score <= 15) {
    grade = 'D';
  } else if (score >= 16 && score <= 20) {
    grade = 'C';
  } else if (score >= 21 && score <= 25) {
    grade = 'B';
  } else if (score >= 26 && score <= 30) {
    grade = 'A';
  }
  
  return grade;
}


function main() {
  const score = +(readLine());
  
  console.log(getGrade(score));
}
