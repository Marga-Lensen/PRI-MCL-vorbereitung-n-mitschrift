## Erklärung .sort((a, b) => a - b)

```javascript
const arr = [5, 2, 8, 1, 9];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]

Was passiert in (a, b) => a - b:

    a und b sind zwei benachbarte Zahlen aus dem Array

    a - b gibt eine Zahl zurück:

        Negativ (-1): a kommt VOR b

        Positiv (1): b kommt VOR a

        0: Reihenfolge bleibt
```

#### Rechenbeispiele:


```txt
a=5, b=2 → 5-2 = 3 (>0) → 2 vor 5
a=2, b=8 → 2-8 = -6 (<0) → 2 vor 8  
a=1, b=1 → 1-1 = 0 → egal
```

---


**Genau!** `.sort((a, b) => a - b)` ist **Bubble Sort INTERN**!

## **Vergleich Bubble Sort mit .sort():**

### 1. Bubble Sort mit loops
```javascript
// MANUELL: 2 Loops (i, j)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {  // j = a, j+1 = b
    if (arr[j] > arr[j+1]) {                 // a > b ?
      // Tausche
    }
  }
}
```
### 2. arr.sort() Methode
```js
// AUTOMATISCH: 1 Zeile
arr.sort((a, b) => a - b);  // INTERN gleiche Logik!
```

**`.sort()` macht:**
```
1. Nimmt jedes Paar (a, b) 
2. Vergleicht a > b ? 
3. Tauscht wenn nötig
4. Wiederholt bis fertig
```

**Die **2 Loops** sind **unsichtbar** drin – JavaScript macht die **Arbeit für dich**!

```
for i, for j → (a, b) => a - b
Doppeltes Loop → sort() Callback
```

**Deshalb gleiches Ergebnis:**
```javascript
console.log(bubbleSort([5,2,8,1,9]));  // [1,2,5,8,9]
console.log([5,2,8,1,9].sort((a,b)=>a-b)); // [1,2,5,8,9]
```

**`.sort()` = **Bubble Sort als fertiges Werkzeug**!** 🎯