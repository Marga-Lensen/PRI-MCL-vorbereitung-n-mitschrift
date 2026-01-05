PRI - 04

HEUTE

- Teilweise Überprüfung: JavaScript-Konzepte und Begriffe

## JS Konzepte

### Ausdrücke, Operatoren und Anweisungen

- Ein **Ausdruck** ist ein Stück Code, das einen Wert produziert:

- - 5 + 3 (ergibt 8)
- - "Hallo" (ergibt den String "Hallo")
- - isActive (ergibt den Wert der Variablen)
#

- Ein **Operator** ist ein Symbol, das Operationen mit Werten durchführt:

- - Arithmetik: +, -, *, /
- - Vergleich: ==, ===, >, <
- - Logisch: &&, ||, !
#

- Eine **Anweisung** ist eine vollständige Anleitung, die eine Aktion ausführt:

- - Zuweisungen: let x = 5;
- - Bedingungen: if (Bedingung) { ... }
- - Schleifen: for (let i = 0; i < 10; i++) { ... }
- - Funktionsdeklarationen: function meineFunktion() { ... }
- - Funktionsaufrufe: meineFunktion();
#

### Scope

[Scope.md](scope.md)



### Callbacks


Ein Callback ist eine Funktion, die als Argument an eine andere Funktion übergeben wird

Die Funktion, die das Callback erhält, kann es dann zu einem späteren Zeitpunkt aufrufen

```javascript
function meineFunktion(action) {
    console.log('Hallo');
    action();  // hier wird die ÜBERGEBENE callback function aufgerufen
}
meineFunktion(function() {   // anonyme Funktion als Argument
    console.log('Welt');
});
// Hallo
// Welt
```

- Oben nimmt `meineFunktion` eine Callback-Funktion als Argument

- Sie protokolliert "Hallo" und ruft dann die Callback-Funktion auf

- Die Callback-Funktion hier ist eine anonyme Funktion, die "Welt" protokolliert

- ***Anonyme Funktion = eine Funktion ohne Namen***

Diese werden viel in JS verwendet

  - Event-Listener (`addEventListener`)
  - Promises, zum Beispiel mit `fetch` (.then())
  - Arrays (`forEach`, `map`, `filter`)

#
### Promises

- Das Promise-Objekt repräsentiert den letztendlichen Abschluss (oder Misserfolg) einer asynchronen Operation und ihren resultierenden Wert.
-  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

- Promises sind eine Möglichkeit, asynchrone Operationen in JavaScript zu handhaben

- Ein Promise stellt einen Wert dar, der zum Zeitpunkt der Erstellung des Promises noch nicht bekannt ist

**Promise-Zustände**

- Welche drei Zustände hat ein Promise?

  - **Pending**: Anfänglicher Zustand, weder erfüllt noch abgelehnt
  - **Erfüllt**: Operation erfolgreich abgeschlossen
  - **Abgelehnt**: Operation fehlgeschlagen

```
pending → waiting...
    ↓
fulfilled ✅ → .then()
oder
rejected ❌ → .catch()
```

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())  // Daten parsen
  .then(data => console.log(data))    // Nutzbare Daten
  .catch(error => console.error(error));

```
#
**Warum Promises?**

JS ist ***einzelthreadig*** → lange Operationen blockieren alles

> Promises verhindern das ***Blockieren*** des Hauptthreads

- Hauptthread = das Ausführen von JavaScript-Code 
- Blockieren = wenn eine lang andauernde Operation andere Codeausführungen verhindert

Wir wollen, dass unser Programm in der Lage ist, Dinge zu tun, während es auf ein Promise wartet

> Vorteil: JS bleibt flüssig, während fetch im Hintergrund läuft

#

### Rekursion

- **Rekursion** ist, wenn eine Funktion sich selbst aufruft

- [Live-Coding](./liveCoding/recursion.js)


### Selbststudium

- Was ist "**Big O Notation**" https://www.youtube.com/watch?v=itn09C2ZB9Y
- Recherchiere Dijkstras Algorithmus, ein klassischer Algorithmus


