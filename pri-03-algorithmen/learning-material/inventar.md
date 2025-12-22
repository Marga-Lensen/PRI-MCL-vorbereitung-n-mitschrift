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

[1](https://github.com/TVATDCI/Algorithm-challenge)
[2](https://stackoverflow.com/questions/69162741/get-the-longest-word-from-sentence-algorithm-problem-with-javascript)
[3](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/57637462/24bac0d1-fe9e-4a6c-b038-31fb151979b2/Bildschirmfoto-vom-2025-12-22-10-10-23.jpg)
[4](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/57637462/5a0a1e11-2dab-4c8f-8901-9113c627d596/Bildschirmfoto-vom-2025-12-22-10-10-00.jpg)
[5](https://gist.github.com/scmx/eca72d44afee0113ceb0349dd54a84a2)
[6](https://stackoverflow.com/questions/57808378/how-to-put-code-chunks-in-details-summary)
[7](https://forum.obsidian.md/t/parse-markdown-inside-details-summary-tags/23764)
[8](https://www.markdownguide.org/extended-syntax/)
[9](https://spinningnumbers.org/a/details.html)
[10](https://dev.to/dpc/daily-javascript-challenge-js-153-detect-capital-use-in-a-word-1alk)
[11](https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab)
[12](https://handbook.gitlab.com/docs/markdown-guide/)
[13](https://gist.github.com/joyrexus/16041f2426450e73f5df9391f7f7ae5f)
[14](https://discourse.joplinapp.org/t/cant-use-detail-and-summary-tags-in-markdown/42558)
[15](https://codex.so/collapsed-block-for-github-markdown)
[16](https://www.markdownguide.org/basic-syntax/)
[17](https://www.youtube.com/watch?v=j9cAav7VIv4)
[18](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections)
[19](https://codepo8.github.io/details-summary-github-pages/)
[20](https://www.youtube.com/watch?v=a7dQ51sgZzA)
[21](https://github.com/dear-github/dear-github/issues/166)
[22](https://www.jetbrains.com/help/youtrack/server/youtrack-markdown-syntax-issues.html)