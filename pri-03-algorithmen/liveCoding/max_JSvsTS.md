Typannotationen sind für Algorithmen tatsächlich ein Vorteil – dein Bauchgefühl ist da komplett richtig.[1]

## JS vs TS bei "findMax"-Algorithme



**Beispielvergleich**:

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
- In TS siehst du am Typ `number[]` sofort: „Das ist ein numerischer Algorithmus.“[1]

