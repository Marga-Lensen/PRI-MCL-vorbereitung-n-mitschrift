Here is a commented Bubble Sort you can literally read out while the visualizer runs; comments are phrased as “teacher narration”.[1][2]

```js
const arr = [5, 2, 8, 1, 9];
console.log("Start:", arr);

// Bubble Sort – compare neighbours j and j+1
for (let i = 0; i < arr.length; i++) {
  // TEACHER: "Outer loop – we do several passes over the array."
  console.log(`Pass ${i + 1}:`);

  for (let j = 0; j < arr.length - 1; j++) {
    // TEACHER: "Look at these two neighbours: index j and j+1."
    console.log(`  compare arr[${j}] = ${arr[j]} and arr[${j + 1}] = ${arr[j + 1]}`);

    if (arr[j] > arr[j + 1]) {
      // TEACHER: "Left is bigger than right → swap them. The bigger bar moves one step to the right."
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      console.log(`    swap → [${arr.join(", ")}]`);
    } else {
      // TEACHER: "They are already in the correct order → do nothing, just move on."
      console.log("    no swap");
    }
  }

  // TEACHER: "At the end of this pass, one of the largest values has bubbled to the right."
  console.log(`End of pass ${i + 1}: [${arr.join(", ")}]\n`);
}

console.log("Sorted:", arr);
```

Didactic structure:

- Outer `for (i...)`: “How many passes do we do?”  
- Inner `for (j...)`: “Walk from left to right, always looking at **two neighbours**.”  
- `if (arr[j] > arr[j+1])`: “If the left bar is taller than the right one, swap them → the taller bar **moves one step right**.”  
- After each pass: “The biggest not‑yet‑sorted value has reached the right side; repeat until everything is in order.”

This matches exactly what you see in the sort visualizer: a bar being compared with its right neighbour, sometimes swapping and slowly drifting to the right edge.

[1](https://www.programiz.com/dsa/bubble-sort)
[2](https://www.codecademy.com/resources/docs/general/algorithm/bubble-sort)
[3](https://learningc.org/chapters/chapter14-sorting/bubble-sort)
[4](https://visualgo.net/en/sorting)
[5](https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/)
[6](https://launchschool.com/books/dsa/read/bubble_sort)
[7](https://en.wikipedia.org/wiki/Bubble_sort)
[8](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)
[9](https://youcademy.org/bubble-sort-pseudocode/)
[10](https://nerchukoacademy.graphy.com/blog/bubble-sort-algorithm)
[11](https://www.acte.in/c-program-bubble-sort)
[12](https://www.youtube.com/watch?v=Dv4qLJcxus8)
[13](https://dev.to/icheka/a-gentle-introduction-to-computer-algorithms-implementing-the-bubble-sort-algorithm-in-six-languages-22dn)
[14](https://www.simplilearn.com/tutorials/data-structure-tutorial/bubble-sort-algorithm)
[15](https://www.reddit.com/r/cs50/comments/xvibfp/week_3_how_to_learn_sort_without_spoilers/)
[16](https://github.com/Mordekai66/bubble-sort-visualizer)
[17](https://dev.to/saptarshisarkar/a-beginners-guide-to-bubble-sort-algorithm-32i8)
[18](https://www.youtube.com/watch?v=Sr521jBTcto)
[19](https://www.linkedin.com/pulse/mastering-bubble-sort-comprehensive-step-by-step-guide-charles-dorner-pnwme)
[20](https://www.codecademy.com/learn/sorting-algorithms-python/modules/bubble-sort-python/cheatsheet)