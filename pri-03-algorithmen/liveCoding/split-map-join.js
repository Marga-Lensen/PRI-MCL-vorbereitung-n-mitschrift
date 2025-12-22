// SPLIT → MAP → JOIN (One-Liner)
const capitaliseInitials = str => 
  str
    .split(" ")                    // 1️⃣ str → ["i", "love", "javascript"]
    .map(w => w[0].toUpperCase() + w.slice(1))  // 2️⃣ arr → ["I", "Love", "Javascript"]
    .join(" ");                    // 3️⃣ arr → "I Love Javascript"

console.log(capitaliseInitials("i love javascript"));  // I Love Javascript

/*  3 Schritte String -1- Array -2- Array -3- String
1️⃣ String Methode .split() : macht aus String ein Array
2️⃣ Array Methode .map() : ändert das Array (gleiche Länge)
3️⃣ Array Methode .join() : macht aus Array einen String
*/