## JS vs TS bei Algorithmen

- Die **Algorithmen selbst** (Bubble Sort, findMax, capitaliseInitials, filter, etc.) sind sprachunabhängig: es sind nur Schritte/Logik.  
- In der Praxis werden sie in Tutorials meist in **JavaScript** gezeigt, weil das die „kleinste Hürde“ ist.
- Für Unterricht und klares Denken sind sie in **TypeScript** oft angenehmer:
  - `str: string` vs `arr: number[]` macht sofort sichtbar, ob `.split()` oder `.map()` möglich ist.  
  - Fehler wie „aus Versehen `.map()` auf einem String“ fängt der Compiler ab.

Beispielvergleich:

```js
// JavaScript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

```ts
// TypeScript
function findMax(arr: number[]): number {
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

- In JS kannst du zufällig ein `string[]` oder gemischtes Array reinschieben, und der Fehler zeigt sich erst zur Laufzeit.  
- In TS siehst du am Typ `number[]` sofort: „Das ist ein numerischer Algorithmus.“

