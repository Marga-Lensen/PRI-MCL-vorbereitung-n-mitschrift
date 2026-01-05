### Scope in JavaScript

- Scope bestimmt die **Zugänglichkeit** von Variablen und Funktionen im Code.  
- JavaScript verwendet **lexikalen Scope** als Prinzip: Variablen werden immer im **nächstliegenden Scope** gesucht, wo sie deklariert wurden – vom innersten zum äußersten Bereich.
- **Tipp für Debugging**: Beim Fehler „x is not defined“ → prüfe Scopes von innen nach außen!
- Es gibt vier Hauptarten von Scopes. Der Schlüssel: **Verstehe, wie sie funktionieren – die Namen sind zweitrangig.**

### 1. Block-Scope (engster Bereich)

Variablen mit `let` oder `const` innerhalb von `{}` (z. B. `if`, Schleifen) sind nur **innerhalb dieses Blocks** sichtbar.  

`var` ignoriert Block-Scope und „leckt“ nach außen – daher `let/const` bevorzugen.

```javascript
if (true) {
    let x = 5;
    console.log(x); // 5
}
console.log(x); // ReferenceError: x is not defined
```

### 2. Funktions-Scope

Variablen innerhalb einer Funktion sind nur **in dieser Funktion** zugänglich – unabhängig von Blöcken darin.  

Das gilt für `var`, `let` und `const` gleichermaßen.

```javascript
function meineFunktion() {
    let x = 5;
    console.log(x); // 5
}
meineFunktion();
console.log(x); // ReferenceError: x is not defined
```

### 3. Globaler Scope (äußerster Bereich)

Variablen ***außerhalb von Funktionen/Blöcken*** sind **überall** zugänglich – aber **in der Praxis vermeiden** wegen Kollisionsrisiken.

```javascript
let globalX = 10;
function test() {
    console.log(globalX); // 10 (lexikaler Scope!)
}
test();
```

### 4. Modul-Scope (moderne Isolation)

In ES6-Modulen sind Variablen **pro Datei** isoliert, es sei denn, sie werden ausdrücklich exportiert.  

Ideal für saubere Architektur.

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

### Lexikalischer Scope: ("Closure"-Prinzip)

- **Lexikalischer Scope ist kein *zusätzlicher* Scope-Typ**, sondern **wie JS Variablen auflöst**: Nach **Quelltext-Position** (wo deklariert), nicht Aufrufort.  

- Funktionen „erinnern“ sich an ihren Ursprungs-Scope (Closure-Effekt). 
  Deshalb können Funktionen
  - auf Variablen aus ihrem übergeordneten Scope zugreifen.
  - auf Variablen zugreifen, die außerhalb von ihnen deklariert wurden

Das unterscheidet sich vom Global-Scope, da es **verschachtelte Zugriffe** ermöglicht.

```javascript
let globalX = 5
function outer() {
    console.log(globalX); // 5 (global scope)
    let outerY = 10;
    function inner() {
        console.log(outerY); // 10 (lexikalischer Zugriff)
    }
    return inner;
}
const fn = outer();
fn(); // 10, ruft inner() auf; verschachtelter Zugriff auf outerY
```

