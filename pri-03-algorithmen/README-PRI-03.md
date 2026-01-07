## Frage nach PRI-04 - Montag

- Aufgaben... viel? schwierig?
- big O ?

in README PRI-04:

## Selbststudium

- Was ist "Big O Notation" https://www.youtube.com/watch?v=itn09C2ZB9Y

---

## Algorithmen

#### Wer hat schon einmal von Algorithmen gehört?
#### Was sind Algorithmen?

> Ein Algorithmus ist das abstrakte Konzept oder die Idee hinter der Lösung eines Problems

> Ein Algorithmus ist ein Satz reproduzierbarer Schritte zur Lösung einer Klasse von Problemen

> Normalerweise sind Algorithmen systematische Lösungen für kleine Probleme


**Wir wenden Algorithmen an wenn wir Übungsaufgaben lösen;**
- Problemstellung gut lesen
- zerlege das Problem in viele kleine Schritte (-> **"PseudoCode"**)
- welche Werkzeuge habe ich; welche Methoden kenne ich schon
- übersetze PseudoCode in echten Code
---

## **Werkzeugkasten & Mehrere Wege**

**Syntax = Werkzeugkasten:** Variablen, For-Schleifen, Bedingungen...

**Mehrere Wege zum Ziel:**

| for-Loop | forEach() | map() |
|----------|-----------|-------|
| `for (i=0; ...)` | `.forEach()` | `.map()` |
| via `result.push()` | via `result.push()` | direkt **NEUES Array!** |
| 📝 Aufbau | 📝 Aufbau | **Automatisch** |

---

> **Beispiel 1: Groß-/Kleinschreibung → `.map()`**  

> Beispiel: "i love javascript" -> "I love Javascript" 

```js
Pseudocode für capitaliseInitials:

Ausgangslage: string "i love javascript"

Initialisiere leeres Ergebnis-Array
Für jedes Wort im String (getrennt durch Leerzeichen):
    Nimm erste Buchstabe → GROSS
    Nimm REST des Wortes
    Kombiniere → ins Ergebnis-Array
Array zu String mit Leerzeichen verbinden

Ergebnis: neuer string "I Love Javascript"
```
> [liveCoding 1](./liveCoding/1-capitaliseInitials-mehrstufig.js)

```js
// SPLIT → MAP → JOIN (One-Liner)
const capitaliseInitials = str => 
  str
    .split(" ")                    //  1. str → ["i", "love", "javascript"]
    .map(w => w[0].toUpperCase() + w.slice(1))  //  2. arr → ["I", "Love", "Javascript"]
    .join(" ");                    // 3. arr → "I Love Javascript"

console.log(capitaliseInitials("i love javascript"));  // I Love Javascript

/*  3 Schritte String -1-> Array -2-> Array -3-> String
1. String Methode .split() : macht aus String ein Array
2. Array Methode .map() : ändert das Array (gleiche Länge)
3. Array Methode .join() : macht aus Array einen String
*/
```
---

> **Beispiel 2: Filtern → `.filter()`**  
**Problem:** `[6,4,5,8,52,9,1,6,11]` → ungerade Zahlen **unter 10** `[5,9,1]`

> Beispiel Filtern von Arrays

```js
    // Problem: Erstelle ein neues Array aller **ungeraden** Einträge unter 10
    const input = [6,4,5,8,52,9,1,6,11]

    // Pseudocode-Stil 1
    const results = []
    for (jede Zahl im Array) {
        if (Zahl ist ungeraden und unter 10) {
            füge Zahl zum Ergebnis-Array hinzu
        }
    }

    // Pseudocode-Stil 2
    Initialisiere ein leeres Array namens "results"
    Für jede Zahl im "input"-Array:
        Wenn die Zahl ungerade und unter 10 ist:
            Füge die Zahl zum "results"-Array hinzu
    Ende der Schleife
```

> [liveCoding 2](./liveCoding/2-filter.js)


```js
// Stufe 1: Pure Loop
const input =[6,4,5,8,52,9,1,6,11]
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
```

---
### Beispiel Sortieren von Zahlen
> 
- Problem: "Sortiere dieses Array von Zahlen von der kleinsten zur größten"
- 
> **Beispiel 3: Sortieren → `.sort()`**  

**Problem:** `[5,2,8,1,9]` → `[1,2,5,8,9]`

> [liveCoding 3](./liveCoding/3-sort.js)

```js
// Stufe 1: Pure Bubble Sort Loop (vereinfacht)
const input = [5,2,8,1,9]
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - 1; j++) {
    if (input[j] > input[j + 1]) {
      // Tausche
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
}
console.log("Bubble Sort: ", input)
```

#### .sort() ist eine vorprogrammierte JS Methode


```javascript
const arr = [5, 2, 8, 1, 9];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]
```
- was passiert bei `a - b` ? [arr.sort()](sort.md)
---

> Beispiel Anwendung von .sort() : [Anagram](./liveCoding/4-anagram.js)

---

**Viele Sortieralgorithmen existieren:**
- Bubble Sort, Quicksort, Merge Sort...
- [Wikipedia Tabelle](https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms)  

> big O notation

**Realität:** Informatiker lernen diese – **du lernst die Kernlogik**!
---

**Visuelle Sortieralgorithmen:**
- [Bubble Sort Animation](https://visualgo.net/en/sorting)
- [Sort Visualizer](https://sortvisualizer.com/)

