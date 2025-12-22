// capitaliseInitials.js
// INPUT
const input = "i love javascript";

// 1. for loop (Pseudocode → Code)
function capitaliseLoop(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}

// 2. arr.forEach()
function capitaliseForEach(str) {
  let result = [];
  str.split(" ").forEach(word => {
    result.push(word[0].toUpperCase() + word.slice(1));
  });
  return result.join(" ");
}

// 3. arr.map()
const capitaliseMap = str => 
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

// LIVE TESTS
console.log("Loop:    ", capitaliseLoop(input));
console.log("forEach: ", capitaliseForEach(input)); 
console.log("map:     ", capitaliseMap(input));