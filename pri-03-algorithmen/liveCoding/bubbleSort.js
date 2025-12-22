// Option 1: Pure Bubble Sort Loop (vereinfacht)
// for loops direkt auf Array anwenden ✅ FUNKTIONIERT - Array wird MUTIERT (verändert)
const input = [5,2,8,1,9]  
console.log("Vorher:", input); // Vorher: [ 5, 2, 8, 1, 9 ]

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
console.log("Bubble Sort with double loop: ", input)  // [1, 2, 5, 8, 9] ✅


// Option 2 - in Funktion mit return
// KOPIE vom Array machen und ändern ✅ FUNKTIONIERT - NEUES Array zurückgeben
function bubbleSort(arr) {
  let sortedArr = [...arr];  // Kopie machen!
  console.log("Kopie von arr:", sortedArr); 
  // Kopie von arr: [ 5, 2, 8, 1, 9 ]
  
  
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;  // function with return
}

const arr = [5,2,8,1,9];
console.log("arr:", arr);  // arr: [ 5, 2, 8, 1, 9 ]
console.log("Bubble Sort with function:", bubbleSort(arr)); 
// Bubble Sort with function: [ 1, 2, 5, 8, 9 ]
