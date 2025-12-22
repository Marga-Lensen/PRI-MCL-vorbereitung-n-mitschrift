Spread Operator [...arr] – Kurze PRI-Erklärung

Was macht [...arr]?


```javascript
const original = [5,2,8,1,9];
const kopie = [...original];  // Neue Kopie! ✅

kopie.sort((a,b) => a - b);  // kopie wird verändert
console.log(original);  // [5,2,8,1,9] ← Original UNVERÄNDERT!
console.log(kopie);     // [1,2,5,8,9]
```

Ohne Kopie passiert das:

```javascript
const original = [5,2,8,1,9];
original.sort((a,b) => a - b);  // ❌ Original VERÄNDERT!
console.log(original);  // [1,2,5,8,9] ← kaputt!
```
