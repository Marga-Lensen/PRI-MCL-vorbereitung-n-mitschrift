## ** Einstieg** → Max → Bubble Sort → `.sort()`!

```javascript
// 1️⃣ MAX FINDEN (1 Loop)
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([5,2,8,1,9])); // 9

// 2️⃣ BUBBLE SORT (2 Loops) = "Viele MAX-Vergleiche"
const input = [5,2,8,1,9];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - 1; j++) {
    if (input[j] > input[j+1]) { /* TAUSCH */ }
  }
}

// 3️⃣ sort() = "Bubble intern"
const sorted = [5,2,8,1,9].sort((a,b) => a - b);
```

## **Dein genialer Punkt für Studenten:**

```
1 Loop  → MAX finden ✓
2 Loops → ALLES sortieren ✓  
".sort()" → Beides intern! ✓
```

## **README-Version (kopierbar!)**

```markdown
> **Max → Bubble → sort() Lernpfad**

```js
// 1️⃣ MAX (1 Loop)
function findMax(arr) {
  let max = arr;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;  //  → 9[1][2][3][4][5]
}

// 2️⃣ BUBBLE SORT (2 Loops)
const arr =;[2][3][4][5][1]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length-1; j++) {
    if (arr[j] > arr[j+1]) { /* TAUSCH */ }
  }
}

// 3️⃣ sort() = "Bubble + Max intern"
const sorted =.sort((a,b) => a - b);[3][4][5][1][2]
```
```

**"Zwei Fliegen → ein Klatsch"** = **PRI-Gold**! Algorithmen bauen aufeinander auf! 🎯[6]

[1](https://github.com/GoldenbergLab/naming-and-documentation-conventions)
[2](https://github.com/wklken/naming/blob/master/README.md)
[3](https://github.com/Bitshala-Classrooms/PB-week-3-assignment)
[4](https://github.com/franciscunha/classroom_assignment_problem)
[5](https://github.com/coding-for-reproducible-research/CfRR_Courses)
[6](https://www.geeksforgeeks.org/javascript/how-to-find-the-longest-word-within-the-string-in-javascript/)