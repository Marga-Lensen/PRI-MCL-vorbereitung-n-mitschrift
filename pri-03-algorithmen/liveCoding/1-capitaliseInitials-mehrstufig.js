// capitaliseInitials.js
// INPUT
const input = "i love javascript";

/// I. AUSFÜHRLICH – Schritt-für-Schritt
// Ia. manuelle for loop (Grundlogik)
function capitLoopI(str) {
// 1. String → Array (split nach Leerzeichen)
  let words = str.split(" ");
  
  // 2. Neues Array für Ergebnisse
  let result = [];
  
  // 3. JEDES Wort einzeln bearbeiten
  for (let i = 0; i < words.length; i++) {
    let word = words[i];                    // z.B. "javascript"
    let firstLetter = word[0].toUpperCase(); // "J"
    let rest = word.slice(1);               // "avascript"
    let newWord = firstLetter + rest;       // "Javascript"
    result.push(newWord);                   // ins Ergebnis-Array
  }
  
  // 4. Array → String
  return result.join(" ");
}

// LIVE TESTS
console.log("Loop I:    ", capitLoopI(input));
console.log("forEach I: ", capitForEachI(input)); 
console.log("map I:     ", capitMapI(input));



// Ib. forEach() -> gleiche Logik
function capitForEachI(str) {
  // 1. String → Array (split nach Leerzeichen)
  let words = str.split(" ");
  
  // 2. Neues Array für Ergebnisse
  let result = [];
  
  // 3. JEDES Wort einzeln bearbeiten (forEach statt for)
  words.forEach((word, i) => {             // i optional, nur zur Orientierung
    let firstLetter = word[0].toUpperCase(); // "J"
    let rest = word.slice(1);              // "avascript"
    let newWord = firstLetter + rest;      // "Javascript"
    result.push(newWord);                  // ins Ergebnis-Array
  });
  
  // 4. Array → String
  return result.join(" ");
}
// Ic. for .. of -> gleiche Logik
function capitForOf(str) {
  // 1. String → Array (split nach Leerzeichen)
  let words = str.split(" ");
  

  
  // 3. JEDES Wort einzeln bearbeiten (for ... of statt forEach)

  for (let word of words) {  
    word[0].toUpperCase()
    word.slice(1);
     

  };
  
  // 4. Array → String
  return words.join(" ");
}

console.log("for ... of : ", capitForOf(input));


// Id. map() : Ein Schritt
function capitMapI(str) {
  // String → Array → Transformation → String (alles in EINEM map())
  return str.split(" ")
            .map(word => {
              let firstLetter = word[0].toUpperCase(); // "J"
              let rest = word.slice(1);               // "avascript"
              return firstLetter + rest;              // "Javascript"
            })
            .join(" ");
}


/// II. KOMPAKT (so kompakt wie möglich)
// IIa. for loop (Pseudocode → Code)
function capitLoop(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}

// IIb. arr.forEach()
function capitForEach(str) {
  let result = [];
  str.split(" ").forEach(word => {
    result.push(word[0].toUpperCase() + word.slice(1));
  });
  return result.join(" ");
}

// IIc. arr.map()  - ONELINER "split - map - join"
const capitMap = str => 
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

// LIVE TESTS
console.log("Loop II:    ", capitLoop(input));
console.log("forEach II: ", capitForEach(input)); 
console.log("map II:     ", capitMap(input));