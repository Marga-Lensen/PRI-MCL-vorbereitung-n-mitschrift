Here’s a first pass at an inventory and a Markdown skeleton you can extend. It’s based on the snippets you showed from Sep 2024 plus the new PRI‑03 material.

GitHub repo list of 14 common challenges; referring to Leetcode : [1]

## 1. Inventar der Algorithmen / Methoden

Logisch gruppiert, alphabetisch innerhalb der Gruppe:

- **Strings & Arrays**
  - `capitaliseInitials` – erstes Wortzeichen groß machen (Loop / forEach / map)
  - `wordLengths` – Wortlängen in einem Satz (Loop / map)
- **Zählen & Maximum**
  - `maxCharacter` – häufigstes Zeichen in einem String (Counting-Objekt)
  - `findMax` – größte Zahl im Array (ein Loop)
- **Filtern**
  - `filterOddUnderTen` – ungerade Zahlen < 10 (Loop / filter)
- **Sortieren**
  - `bubbleSort` – Zahlen sortieren mit doppeltem Loop (j, j+1)
  - `.sort((a,b)=>a-b)` – eingebaute Sortiermethode für Zahlen
  - `.sort()` mit Objekten – Users nach `age`, `role` sortieren
- **Sonstige aus der alten Datei**
  - eventuell „longest word in string“ (falls du die Recap‑Version noch reinnehmen willst)[2]

Du kannst pro Eintrag die konkreten Dateipfade im Repo ergänzen, z.B. `./PRI-03/Assets/...` oder `./challenges/240919-...`.

## 2. Markdown-Struktur mit `<details><summary>`

Hier ein Gerüst mit einklappbaren Bereichen, Code jeweils als JS‑Version (für TS kannst du je einen zweiten Block ergänzen).

```md
# Algorithmus-Challenges – Überblick

## Strings & Arrays

<details>
<summary><code>capitaliseInitials(str)</code> – Anfangsbuchstaben groß</summary>

Pfad: `./PRI-03/Assets/capitalise-challenge.js`

```js
// 1. for loop
function capitaliseLoop(str) {
  const words = str.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const first = word?.toUpperCase() ?? "";
    const rest = word.slice(1);
    result.push(first + rest);
  }
  return result.join(" ");
}

// 2. forEach
function capitaliseForEach(str) {
  const result = [];
  str.split(" ").forEach(word => {
    const first = word?.toUpperCase() ?? "";
    const rest = word.slice(1);
    result.push(first + rest);
  });
  return result.join(" ");
}

// 3. map (Split → Map → Join)
const capitaliseMap = str =>
  str
    .split(" ")
    .map(w => (w?.toUpperCase() ?? "") + w.slice(1))
    .join(" ");

console.log(capitaliseMap("i love javascript")); // "I Love Javascript"
```

</details>

---

<details>
<summary><code>wordLengths(str)</code> – Wortlängen eines Satzes</summary>

Pfad: `./PRI-03/Assets/capitalise-challenge.js` (Challenge 7)

```
// Loop-Version
function wordLengthsLoop(str) {
  const words = str.split(" ");
  const lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  return lengths;
}

// map-Version
const wordLengths = str => str.split(" ").map(w => w.length);

console.log(wordLengths("Hi there, my name is Brad")); //[3]
```

</details>

## Zählen & Maximum

<details>
<summary><code>findMax(arr)</code> – größte Zahl im Array</summary>

```
function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];      // nur wenn neue, größere Zahl gefunden wird
    }
  }
  return max;
}

console.log(findMax()); // 30
```

</details>

<details>
<summary><code>maxCharacter(str)</code> – häufigstes Zeichen</summary>

Pfad: z.B. `./240919-pb-challenger-algorithms/max-char.js`

```
function maxCharacter(str) {
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;
  for (const char in counts) {
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter("Javascript")); // "a"
```

</details>

## Filtern

<details>
<summary><code>filterOddUnderTen(arr)</code> – ungerade &lt; 10</summary>

```
// Loop
function filterOddUnderTenLoop(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n % 2 === 1 && n < 10) {
      result.push(n);
    }
  }
  return result;
}

// filter
const filterOddUnderTen = arr =>
  arr.filter(n => n % 2 === 1 && n < 10);

console.log(filterOddUnderTen()); //[4]
```

</details>

## Sortieren

<details>
<summary><code>bubbleSort(arr)</code> – Nachbarn vergleichen</summary>

Pfad: `./PRI-03/Assets/PRI-03-sort.js`

```
function bubbleSort(arr) {
  const a = [...arr]; // Kopie, Original bleibt unverändert
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a;
}

const input =;[3][4]
console.log("Bubble Sort:", bubbleSort(input)); //[4][3]
```

</details>

<details>
<summary><code>arr.sort((a, b) =&gt; a - b)</code> – eingebaute Sortiermethode</summary>

```
const numbers =;[3][4]
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted); //[4][3]

// Objekte sortieren
const users = [
  { age: 29, role: "user",  name: "Martina" },
  { age: 34, role: "user",  name: "John" },
  { age: 24, role: "user",  name: "Amy" },
  { age: 29, role: "admin", name: "Mohammad" },
  { age: 41, role: "user",  name: "Sari" },
];

// nach Alter
users.sort((a, b) => a.age - b.age);

// Admins zuerst, dann Alter
users.sort((a, b) => {
  if (a.role === "admin") return -1;
  if (b.role === "admin") return 1;
  return a.age - b.age;
});

console.log(users.map(u => u.name));
```

</details>
```

Das ist bewusst knapp und neutral gehalten; du kannst:

- die Pfade zu deinen tatsächlichen Dateien (Sep 2024 / Jan 2026) ergänzen,  
- pro Block noch „Didaktik‑Hinweise“ einbauen (z.B. kurze Kommentare für Loop → map),  
- bei Bedarf eine TS‑Version direkt unter die JS‑Version setzen.

Wenn du möchtest, kannst du im nächsten Schritt deine tatsächlichen Dateinamen / Pfade aus dem Repo hier posten; dann lässt sich diese Liste exakt auf dein Org‑Layout anpassen.
