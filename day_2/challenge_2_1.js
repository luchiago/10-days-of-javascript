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

function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = s.split('');
  var only_vowels = [];
  var only_constants = [];

  for (var letter of letters) {
    vowels.includes(letter) ? only_vowels.push(letter) : only_constants.push(letter)
  }

  letters = [...only_vowels, ...only_constants];

  for (var letter of letters) {
    console.log(letter);
  }
}


function main() {
  const s = readLine();
  
  vowelsAndConsonants(s);
}
