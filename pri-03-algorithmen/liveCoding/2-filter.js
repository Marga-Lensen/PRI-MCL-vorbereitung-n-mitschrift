// Stufe 1: Pure Loop
const input = [6,4,5,8,52,9,1,6,11]
let results = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 1 && input[i] < 10) {
    results.push(input[i]);
  }
}

// Stufe 2: forEach()
let results2 = [];
input.forEach(num => {
  if (num % 2 === 1 && num < 10) {
    results2.push(num);
  }
});

// Stufe 3: filter() 
const results3 = input.filter(num => num % 2 === 1 && num < 10);

console.log("loop: ",results); // [ 5, 9, 1 ]
console.log("forEach: " ,results2); //
console.log("filter: " , results3); //