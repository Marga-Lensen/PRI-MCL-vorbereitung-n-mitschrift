
## Challenges

### 1. "Capitalise Initials"-Algorithmus 


#### Problem:
"i love javascript" → "I Love Javascript"

**Eingabe:** String
**Ausgabe:** String mit großen Anfangsbuchstaben

#### Pseudocode
```
Pseudocode für capitaliseInitials:
Initialisiere leeres Ergebnis-Array
Für jedes Wort im String (getrennt durch Leerzeichen):
    Nimm erste Buchstabe → GROSS
    Nimm REST des Wortes
    Kombiniere → ins Ergebnis-Array
Array zu String mit Leerzeichen verbinden
```


**Stufe 1: Pure Loop (Pseudocode → Code)**
```
// code mit for loop
const input = "i love javascript";
const result = [];

console.log(result.join(" ")) // I Love Javascript
```

**Stufe 2: forEach()**

> Ersetze die for-Schleife durch forEach()


**Stufe 3: map() (Eleganz)**

> One-Liner Challenge : split - map - join



## Live-Coding 

```javascript
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
```

---
## Array Methoden als Sortier-Alternative

Nach Bubble Sort: "Es gibt fertige Methoden!"

```js
// Bubble Sort (wir haben es selbst gebaut)
const bubbleSort = (arr) => { /* Algorithmus */ };

// JavaScript's fertige Lösung
const sorted = arr.sort((a, b) => a - b);

// GLEiches Prinzip bei Strings:
const capitaliseMap = str => 
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
```




### Algorithmen-Verständnis → elegante Array-Methoden