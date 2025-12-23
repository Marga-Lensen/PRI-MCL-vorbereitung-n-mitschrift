aus Aufgabe sep 2024 - anagram

```js
/*
Um zu überprüfen, ob zwei Strings Anagramme sind, kannst du verschiedene Methoden anwenden. Hier sind zwei gängige Ansätze:

1. Sortieren und Vergleichen:

Sortiere die Buchstaben beider Strings alphabetisch.
Vergleiche die sortierten Strings. Sind sie identisch, sind die ursprünglichen Strings Anagramme.
*/
function sindAnagramme1(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Unterschiedliche Länge, keine Anagramme
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  let str1 = "listen";
  let str2 = "silent";
  console.log(sindAnagramme1(str1, str2)); // Gibt "true" aus, da sie Anagramme sind
  
  /*
  2. Häufigkeitszählung:

Erstelle ein Objekt, das die Häufigkeit jedes Buchstabens im ersten String speichert.
Gehe den zweiten String durch und reduziere die Häufigkeit jedes Buchstabens im Objekt.
Wenn alle Häufigkeiten im Objekt 0 sind, sind die Strings Anagramme.
  */

function sindAnagramme2(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Unterschiedliche Länge, keine Anagramme
    }
    let charCount = {};
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
      let char = str2[i];
      if (!charCount[char]) {
        return false; // Buchstabe im zweiten String fehlt im ersten
      }
      charCount[char]--;
    }
    for (let char in charCount) {
      if (charCount[char] !== 0) {
        return false; // Nicht alle Buchstaben haben gleiche Häufigkeit
      }
    }
    return true; // Alle Buchstaben haben gleiche Häufigkeit, Anagramme
  }
  
  //let str1 = "listen";
  //let str2 = "silent";
  console.log(sindAnagramme2(str1, str2)); // Gibt "true" aus, da sie Anagramme sind

// unsere strings austesten:
  console.log(sindAnagramme2("elbow", "below"));  // true
  console.log(sindAnagramme1("dormitories", "dirty rooms"));  // false
  console.log(sindAnagramme1("dormitory", "dirty room"));  // false wegen Leerzeichen
  console.log(sindAnagramme2("dormitory", "dirtyroom"));  // true


  /*
  Wähle die Methode, die für deine Situation am besten geeignet ist. Die erste Methode ist einfacher zu verstehen, aber die zweite Methode kann effizienter sein, insbesondere für längere Strings.
  */

```
### erste methode super einfach und to-the-point

❔  localeCompare() nicht nötig für sortieren von Buchstaben?

### zweite methode ziemlich aufwendig

❔  wird da ein leeres Object erstellt? Wozu?


## Erklärung Vorteile zweiter Methode - bei sehr langen Strings ; wegen bigO

Die Sortier-Methode mit `str1.split('').sort().join('')` ist eine elegante, kurze Lösung für Anagramm-Checks in JavaScript.

## Sortierung und localeCompare

JavaScript's `sort()` ohne Parameter sortiert Strings standardmäßig **lexicografisch nach Unicode-Codepoints**, was für ASCII-Buchstaben (a-z) korrekt alphabetisch ist. 

Du brauchst kein explizites `localeCompare('de')` oder `(a,b) => a.localeCompare(b, 'de')`, da JS für einfache lateinische Buchstaben schlau genug ist und Umlaute/ß nur bei internationalen Texten problematisch werden. 
Bei deutschen Texten mit Umlauten (ä=ä, ö=ö) kann `localeCompare` präziser sortieren, aber für reine Anagramme reicht `sort()` meist aus.

## Häufigkeitszählung erklärt

Ja, `let charCount = {};` initialisiert ein **leeres Objekt als Häufigkeitszähler** (HashMap-Äquivalent). 
Der Code zählt zuerst ***Vorkommen jedes Zeichens*** in `str1` (z. B. `charCount['e'] = 2`), dann ***dekrementiert*** er für jedes Zeichen in `str2` und prüft am Ende, ob alle Zähler null sind – so sind die Zeichenverteilungen identisch.

## Vorteile der zweiten Methode

- **Effizienz**: 

**O(n) Zeitkomplexität statt O(n log n) beim Sortieren**, ideal für sehr lange Strings (z. B. 10.000+ Zeichen).[1]

- **Frühes Abbrechen**: 

Stoppt sofort bei fehlenden Zeichen, ohne vollständige Verarbeitung.

- **Case/Zeichen-sensitiv**: 

Berücksichtigt Groß-/Kleinschreibung und Nicht-Buchstaben exakt, ohne Vorverarbeitung; anpassbar für Ignore-Case via `toLowerCase()`.

Für Lernzwecke ist sie aufwendiger, lehrt aber Objekte als Counter und Schleifenlogik besser als die "One-Liner"-Sortierung.

[1](https://www.schreiben.net/artikel/anagramm-7156/)
[2](https://www.schuelerhilfe.de/online-lernen/2-deutsch/3167-deutsch-anagramm)
[3](https://studyflix.de/deutsch/anagramm-3416)
[4](https://www.sofatutor.com/deutsch/videos/mit-woertern-spielen-und-gestalten-anagramme)
[5](https://www.studysmarter.de/schule/deutsch/rhetorische-stilmittel/anagramm/)
[6](https://www.java-forum.org/thema/anagramm-mit-strings-und-methode.186513/)
[7](https://www.izmb.de/anagramm-loeser/)
[8](https://www.java-forum.org/thema/kann-mir-jemand-dieses-programm-erklaeren.179664/)
[9](https://www.wort-suchen.de/anagramm-generator/)
[10](https://www.c-plusplus.net/forum/topic/202306/pr%C3%BCfungsfrage-anagramm)
[11](https://de.wikipedia.org/wiki/Anagramm)
[12](https://www.reddit.com/r/math/comments/6hb0xk/clever_algorithm_to_determine_whether_or_not_two/?tl=de)
[13](https://www.youtube.com/watch?v=96XELQrf-v4)
[14](https://python.19633.com/de/Python/1003013161.html)
[15](https://mal-alt-werden.de/anagramm/)
[16](https://de.denizatm.com/pages/49155-how-to-check-if-two-strings-are-anagrams-of-each-other)
[17](https://hackschule.de/task/anagramm)
[18](https://ichlese.at/an-easy-way-implement-anagram-program-java)
[19](https://www.reddit.com/r/cpp_questions/comments/4kr4u2/string_check_for_anagram/)
[20](https://www.reddit.com/r/VFIO/comments/uqwljl/anyone_out_there_still_playing_battleye_protected/?tl=es)