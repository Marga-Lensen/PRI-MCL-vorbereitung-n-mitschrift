`this` ist wie ein "Selbstverweis": Es zeigt immer auf das **aktuelle Objekt**, in dem die Methode läuft.[2]

## Warum `this.name` statt nur `name`?
```javascript
class Haustier {
  constructor(name) {
    this.name = name;  // ✅ Speichert name IM OBJEKT
    // name = name;   ❌ Lokale Variable, weg nach constructor!
  }
  
  vorstellen() {
    console.log(this.name);  // ✅ Greift auf OBJEKT-Zugriff zu
    // console.log(name);    ❌ undefined (lokale Variable weg!)
  }
}

const max = new Haustier("Max");
max.vorstellen();  // "Max" ✅
```
**Ohne `this`**: `name` ist nur temporär im `constructor` – wie eine lokale Variable in einer Funktion.[1][3]

**Mit `this`**: `this.name` wird **Eigenschaft des Objekts** – bleibt erhalten, auch in anderen Methoden.[2]

## Live-Demo für Studierende
```javascript
const max = new Haustier("Max");
console.log(max);        // {name: "Max"} ← this.name gespeichert!
console.log(max.name);   // "Max" direkt zugreifbar
```
**Frage:** "Was passiert ohne `this`? → `undefined`!"[7]

Merksatz: "`this` = 'mein eigenes Objekt' – wie 'ich' im Satz."[1]

[1](https://www.mediaevent.de/javascript/this.html)
[2](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this)
[3](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/OOP/Objektverf%C3%BCgbarkeit_und_this)
[4](https://www.a-coding-project.de/ratgeber/javascript/this)
[5](https://www.on-design.de/tutor/javascript/this.htm)
[6](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/OOP/Objekte_und_ihre_Eigenschaften)
[7](https://www.w3schools.com/js/js_this.asp)
[8](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Working_with_objects)
[9](https://web.dev/learn/javascript/functions/this)
[10](https://de.w3hmong.com/js/js_this.htm)