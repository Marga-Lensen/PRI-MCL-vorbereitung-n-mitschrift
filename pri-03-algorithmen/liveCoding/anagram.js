function sindAnagramme2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charCount = {};
  
  // Zähle str1
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log('Nach Zählung str1:', charCount); 
  // Nach Zählung str1: { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
  
  // Dekrementiere str2
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!charCount[char]) return false;
    charCount[char]--;
    /* console.log('Nach', char, ':', charCount); */ // ← SCHRITTWEISE
    /* 
    Nach s : { l: 1, i: 1, s: 0, t: 1, e: 1, n: 1 }
    Nach i : { l: 1, i: 0, s: 0, t: 1, e: 1, n: 1 }
    Nach l : { l: 0, i: 0, s: 0, t: 1, e: 1, n: 1 }
    Nach e : { l: 0, i: 0, s: 0, t: 1, e: 0, n: 1 }
    Nach n : { l: 0, i: 0, s: 0, t: 1, e: 0, n: 0 }
    Nach t : { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 } 
    */
  }
  
  // Prüfe Rest
  for (let char in charCount) {
    if (charCount[char] !== 0) return false;
  }
  console.log('Final:', charCount); // ← ENDE : Final: { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 }
  return true;
}

/* sindAnagramme2("listen", "silent") */ // alle logs in der function
console.log(sindAnagramme2("listen", "silent"));  // alle logs und Endergebnis (true)

console.log("elbow", sindAnagramme2("elbow", "below"));  // true

console.log("dormitories", sindAnagramme2("dormitories", "dirty rooms"));  // false ; kein y
/* bricht frühzeitig ab!
Nach Zählung str1: { d: 1, o: 2, r: 2, m: 1, i: 2, t: 1, e: 1, s: 1 }
dormitories false
*/

console.log("dirty room", sindAnagramme2("dormitory", "dirty room"));  // false wegen Leerzeichen
/* bricht sofort vor str1 schon ab -> 9 vs 10 zeichen; length !=
dirty room false
*/

console.log("dirtyroom", sindAnagramme2("dormitory", "dirtyroom"));  // true
/* 
Nach Zählung str1: { d: 1, o: 2, r: 2, m: 1, i: 1, t: 1, y: 1 }
Final: { d: 0, o: 0, r: 0, m: 0, i: 0, t: 0, y: 0 }
dirtyroom true
*/