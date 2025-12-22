Yes, reverse is a perfect example where you can contrast “use the built‑in” vs “build your own algorithm”.[1]

## 1. Core idea: reverse without `.reverse()`

For teaching, this is the cleanest from‑scratch version:

```js
// Reverse a string WITHOUT .reverse()
function reverseStringManual(str) {
  let result = "";
  // walk from last index down to 0
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];        // build new string
  }
  return result;
}

console.log(reverseStringManual("hello")); // "olleh"
```

Same idea for arrays:

```js
// Reverse an array WITHOUT .reverse()
function reverseArrayManual(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);     // push from back to front
  }
  return result;
}

console.log(reverseArrayManual([1,2,3])); // [3,2,1]
```

Didaktisch:  
- zeigt klar: „Algorithmus = definierte Schritte“,  
- benutzt nur `length`, Indexing und `for` – passt zu deinen anderen Algorithmen (max, bubbleSort).[2][1]

## 2. How to mirror the style of index.js / README

Der vorhandene `index.js` macht ja genau das Muster:  
- Challenge‑Text + Beschreibung  
- mehrere Lösungen: „built‑in“ (`split().reverse().join()`), „ninja“, etc.[1]

Du kannst in deinem README einen Abschnitt so gestalten:

```md
## CHALLENGE: REVERSE A STRING (from scratch)

**Problem:** Return a string in reverse, e.g. `"hello"` → `"olleh"`.

<details>
<summary>Lösung 1 – Eigener Algorithmus (ohne <code>.reverse()</code>)</summary>

```
function reverseStringManual(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseStringManual("hello")); // "olleh"
```

</details>

<details>
<summary>Lösung 2 – Built‑in Methoden (<code>split → reverse → join</code>)</summary>

```
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```

</details>
```

So bekommst du:

- eine **algorithmische** Lösung (Loop)  
- eine **praktische** Lösung (built‑in), analog zu deinen `bubbleSort` vs `.sort()` Beispielen.[3][1]

## 3. Einordnung für deine Algorithmen‑Sammlung

In deiner lokalen README‑Sammlung kannst du den neuen Eintrag einfach unter „Strings & Arrays“ einsortieren, z.B.:

```md
## Strings & Arrays

- `reverseStringManual(str)` – String umkehren (eigener Algorithmus)
- `reverseString(str)` – String umkehren (built‑in `.reverse()`)
- `capitaliseInitials(str)` – Anfangsbuchstaben groß
- `maxCharacter(str)` – häufigstes Zeichen
- …
```

Damit schließt sich der Kreis: das fremde `index.js`‑Material hat dir die Challenge‑Ideen geliefert, und du baust jetzt deine eigene, unabhängige, didaktische Version davon – inklusive „wir können `.reverse()` auch selber nachbauen“.

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/57637462/b31b402b-bed9-4521-91be-8ffa21c1b1d4/index.js)
[2](https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/)
[3](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)