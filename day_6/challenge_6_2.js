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

function getDayName(dateString) {
  let dayName;
  dayName = new Date(dateString);
  let weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
  ];
  return weekdays[dayName.getDay()];
}


function main() {
  const d = +(readLine());
  
  for (let i = 0; i < d; i++) {
    const date = readLine();
      
    console.log(getDayName(date));
  }
}
