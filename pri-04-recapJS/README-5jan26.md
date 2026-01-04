PRI - 04

HEUTE

- Teilweise Überprüfung: JavaScript-Konzepte und Begriffe

## JS Konzepte

### Ausdrücke, Operatoren und Anweisungen

- Ein Ausdruck ist ein Stück Code, das einen Wert produziert:

- - 5 + 3 (ergibt 8)
- - "Hallo" (ergibt den String "Hallo")
- - isActive (ergibt den Wert der Variablen)
#

- Ein Operator ist ein Symbol, das Operationen mit Werten durchführt:

- - Arithmetik: +, -, *, /
- - Vergleich: ==, ===, >, <
- - Logisch: &&, ||, !
#

- Eine Anweisung ist eine vollständige Anleitung, die eine Aktion ausführt:

- - Zuweisungen: let x = 5;
- - Bedingungen: if (Bedingung) { ... }
- - Schleifen: for (let i = 0; i < 10; i++) { ... }
- - Funktionsdeklarationen: function meineFunktion() { ... }
- - Funktionsaufrufe: meineFunktion();
#

### Scope

- Scope bestimmt die Zugänglichkeit von Variablen und Funktionen

- Es gibt einige verschiedene Arten von Scopes in JavaScript
#

**Globaler Scope**

- - Variablen, die außerhalb einer Funktion oder eines Blocks deklariert werden, befinden sich im globalen Scope
- - Sie können von überall im Code zugegriffen werden
- - Dies wird in der Praxis nicht verwendet
#
**Funktions-Scope**

- Variablen, die innerhalb einer Funktion deklariert werden, befinden sich im Funktions-Scope
- Sie können nur innerhalb dieser Funktion zugegriffen werden

```javascript
function meineFunktion() {
    let x = 5;
    console.log(x); // 5
}
console.log(x); // ReferenceError: x is not defined
```
#
**Block-Scope**: Variablen, die mit `let` oder `const` innerhalb eines Blocks deklariert werden

- Ein Block bedeutet im Grunde innerhalb von `{}`
- Diese Variablen können nur innerhalb dieses Blocks zugegriffen werden
- Zum Beispiel sind Variablen, die in einer Schleife oder `if` deklariert werden, block-scoped

```javascript
if (true) {
    let x = 5;
}
console.log(x); // ReferenceError: x is not defined
```
#
**Modul-Scope**: Variablen, die in einer Moduldatei deklariert werden, befinden sich im Modul-Scope

- Sie können nur innerhalb dieses Moduls zugegriffen werden, es sei denn, sie werden ausdrücklich exportiert

```javascript
// module.js
let x = 5;
let y = 10;
export { y };

// main.js
import { y } from './module.js';
console.log(y); // 10
console.log(x); // ReferenceError: x is not defined
```
#
**Lexikalischer Scope**: Funktionen können auf Variablen aus ihrem übergeordneten Scope zugreifen

- Dies wird lexikalischer Scope oder Closure genannt
- Deshalb können Funktionen auf Variablen zugreifen, die außerhalb von ihnen deklariert wurden

```javascript
let x = 5;
function meineFunktion() {
    console.log(x); // 5
}
meineFunktion();
```
#

*Du brauchst sehr selten die tatsächlichen Namen dieser Scopes zu kennen*

*Aber zu verstehen, wie sie funktionieren, ist wichtig*

### Callbacks


Ein Callback ist eine Funktion, die als Argument an eine andere Funktion übergeben wird

Die Funktion, die das Callback erhält, kann es dann zu einem späteren Zeitpunkt aufrufen

```javascript
function meineFunktion(callback) {
    console.log('Hallo');
    callback();
}
meineFunktion(function() {
    console.log('Welt');
});
```

- Oben nimmt `meineFunktion` eine Callback-Funktion als Argument

- Sie protokolliert "Hallo" und ruft dann die Callback-Funktion auf

- Die Callback-Funktion hier ist eine anonyme Funktion, die "Welt" protokolliert

- ***Anonyme Funktion = eine Funktion ohne Namen***

Diese werden viel in JS verwendet

  - Event-Listener
  - Promises, zum Beispiel mit `fetch`
  - `forEach`, `map`, `filter`

#
### Promises

- Das Promise-Objekt repräsentiert den letztendlichen Abschluss (oder Misserfolg) einer asynchronen Operation und ihren resultierenden Wert. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

- Promises sind eine Möglichkeit, asynchrone Operationen in JavaScript zu handhaben

- Ein Promise stellt einen Wert dar, der zum Zeitpunkt der Erstellung des Promises noch nicht bekannt ist

- Welche drei Zustände hat ein Promise?

  - **Pending**: Anfänglicher Zustand, weder erfüllt noch abgelehnt
  - **Erfüllt**: Operation erfolgreich abgeschlossen
  - **Abgelehnt**: Operation fehlgeschlagen


```javascript
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
  promise.then(response => {
      console.log(response);
  }).catch(error => {
      console.error(error);
  });
```
#

Promises verhindern das ***Blockieren*** des Hauptthreads

- Hauptthread = das Ausführen von JavaScript-Code 
- Blockieren = wenn eine lang andauernde Operation andere Codeausführungen verhindert

Wir wollen, dass unser Programm in der Lage ist, Dinge zu tun, während es auf ein Promise wartet

#

### Selbststudium

- Was ist "**Big O Notation**" https://www.youtube.com/watch?v=itn09C2ZB9Y
- Recherchiere Dijkstras Algorithmus, ein klassischer Algorithmus


