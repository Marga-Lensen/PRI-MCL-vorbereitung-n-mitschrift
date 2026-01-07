## I. AUSFÜHRLICH – Schritt-für-Schritt

### 1a. **Pure for-Loop** (Grundlogik)
```javascript
function capitaliseInitials(str) {
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
```

### 1b. **forEach() – EXAKT gleiche Logik**
```javascript
function capitaliseInitials(str) {
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
```

### 1c. **map() – EIN SCHRITT**
```javascript
function capitaliseInitials(str) {
  // String → Array → Transformation → String (alles in EINEM map())
  return str.split(" ")
            .map(word => {
              let firstLetter = word[0].toUpperCase(); // "J"
              let rest = word.slice(1);               // "avascript"
              return firstLetter + rest;              // "Javascript"
            })
            .join(" ");
}
```

***

## II. KOMPAKT (so kompakt wie möglich)

### 2a. **for-Loop** (kaum kompakter möglich)
```javascript
const capitaliseInitials = str => {
  let result = [];
  for(let i = 0; i < str.split(" ").length; i++) {
    result.push(str.split(" ")[i][0].toUpperCase() + str.split(" ")[i].slice(1));
  }
  return result.join(" ");
};
```

### 2b. **forEach()**
```javascript
const capitaliseInitials = str => {
  let result = [];
  str.split(" ").forEach(w => result.push(w[0].toUpperCase() + w.slice(1)));
  return result.join(" ");
};
```

### 2c. **map()** (One-Liner) **"split - map - join"** 
```javascript
const capitaliseInitials = str => 
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
```

***


```
for-Loop        →  forEach()       →  map()
📝 Aufbau       →  📝 Aufbau       →  Automatisch
result.push()   →  result.push()   →  KEIN result[] nötig
```

