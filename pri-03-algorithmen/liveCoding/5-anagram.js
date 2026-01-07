/*1. Sortieren und Vergleichen:

Sortiere die Buchstaben beider Strings alphabetisch.
Vergleiche die sortierten Strings. Sind sie identisch, sind die ursprünglichen Strings Anagramme.
*/
function sindAnagramme(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Unterschiedliche Länge, keine Anagramme
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  let str1 = "listen";
  let str2 = "silent";
  console.log(sindAnagramme(str1, str2)); // Gibt "true" aus, da sie Anagramme sind