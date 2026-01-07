let numbers = [12, 16, 22, 20, 33, 99, 7, 40, 75];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

console.log("max in array: ", findMax(numbers));  // 99
