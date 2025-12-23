// Problem: You need to convert boring text to cool text. Requirements:
// - Convert first and last characters to uppercase
// - For the other characters:
// - Convert "o"s to "0"s
// - Convert "l"s to "1"s
// - Convert "e"s to "3"s
// - Convert "s"s to "5"s
// - Convert "t"s to "7"s

const boringText = 'hello world, hello europe'

/*
Pseudocode

- Create a variable to store the output
- Loop over the characters of the input string
    - Looking at one character
    - If it's the first or last character
        - Add the uppercase version of the character to the output
    - If the character is an "o" Add a "0" to the output
    - If the character is an "l" Add a "1" to the output
    - If the character is an "e" Add a "3" to the output
    - If the character is an "s" Add a "5" to the output
    - If the character is an "t" Add a "7" to the output
    - Otherwise add the normal character to the output
*/

// Everybody, let's take 15 minutes to solve this problem
// TEACHER: Then code it yourself

let output = ''
for (let i = 0; i < boringText.length; i++) {
    const char = boringText[i]

    if (i === 0 || i === boringText.length - 1) {
        output += char.toUpperCase()
        continue // Stop the current loop iteration and go to the next
    }

    if (char === 'o') {
        output += '0'
    } else if (char === 'l') {
        output += '1'
    } else if (char === 'e') {
        output += '3'
    } else if (char === 's') {
        output += '5'
    } else if (char === 't') {
        output += '7'
    } else {
        output += char
    }
}

console.log(output) 
