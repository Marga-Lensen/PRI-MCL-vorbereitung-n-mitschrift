// capitaliseInitials.ts
export{} // macht die Datei zu einem Modul

// INPUT
const input: string = "i love javascript";

// 1. for loop (Pseudocode → Code)
function capitaliseLoop(str: string): string {
  const words: string[] = str.split(" ");
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];
    const firstLetter: string = word[0]?.toUpperCase() ?? "";
    const rest: string = word.slice(1);
    result.push(firstLetter + rest);
  }

  return result.join(" ");
}

// 2. arr.forEach()
function capitaliseForEach(str: string): string {
  const result: string[] = [];

  str.split(" ").forEach((word: string) => {
    const firstLetter: string = word[0]?.toUpperCase() ?? "";
    const rest: string = word.slice(1);
    result.push(firstLetter + rest);
  });

  return result.join(" ");
}

// 3. arr.map()
const capitaliseMap = (str: string): string =>
  str
    .split(" ")
    .map((w: string) => {
      const firstLetter: string = w[0]?.toUpperCase() ?? "";
      const rest: string = w.slice(1);
      return firstLetter + rest;
    })
    .join(" ");

// LIVE TESTS
console.log("Loop:    ", capitaliseLoop(input));
console.log("forEach: ", capitaliseForEach(input));
console.log("map:     ", capitaliseMap(input));
