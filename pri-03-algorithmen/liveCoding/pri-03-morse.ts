export {};

const morseNumbers: string[] = [
    '-----', '.----', '..---', '...--', '....-', 
    '.....', '-....', '--...', '---..', '----.'
];

const input: string = '...-- .---- ...-- ...-- --...';

let output: string = '';
const morseArray: string[] = input.split(' ');
for (let i = 0; i < morseArray.length; i++) {
    const morse: string = morseArray[i];
    for (let j = 0; j < morseNumbers.length; j++) {
        if (morse === morseNumbers[j]) {
            output += j.toString();
        }
    }
}

console.log('Decoded:', output);      // "31337"
console.log('Test:', output === '31337');  // true
