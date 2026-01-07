
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
