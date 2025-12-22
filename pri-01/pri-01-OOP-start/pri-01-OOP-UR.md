OOP in JavaScript lässt sich super praxisnah erklären, indem du von Alltagsdingen ausgehst und direkt mit Klassen codest – perfekt für deine PRI-01-Studierenden, die schon Funktionen, DOM und Arrays beherrschen.[1][2]

## Warum OOP lernen?
Bisher habt ihr prozedural programmiert: Funktionen bearbeiten lose Daten wie Arrays oder DOM-Elemente. OOP gruppiert Daten und Funktionen in Klassen – wie Baupläne für Objekte (z.B. ein `User` mit Name und `login()`-Methode). Das hilft später bei PHP/Python/Java-Jobs und sogar in JS (z.B. bei APIs oder React-Komponenten).[3][4]

## Klasse einfach erklären
```javascript
// Bauplan für Haustiere
class Haustier {
  constructor(name, art) {  // Wird beim new() aufgerufen
    this.name = name;       // Eigenschaft speichern
    this.art = art;
  }
  
  vorstellen() {            // Methode (Funktion in der Klasse)
    console.log(`Hallo, ich bin ${this.name}, ein ${this.art}`);
  }
}

// Objekte bauen
const max = new Haustier("Max", "Hund");
const minka = new Haustier("Minka", "Katze");

max.vorstellen();  // "Hallo, ich bin Max, ein Hund"
```
Merksatz: `class` = Blaupause, `new` = fertiges Objekt, `this` = das aktuelle Objekt.[5][6]

## Live-Coding: TodoList anpassen
Starte mit deinem Pet-Beispiel, dann TodoList/TodoItem:
```javascript
class TodoItem {
  constructor(text) {
    this.text = text;
    this.erledigt = false;
  }
  
  toggle() {
    this.erledigt = !this.erledigt;
  }
}

class TodoList {
  constructor() {
    this.items = [];
  }
  
  hinzufuegen(text) {
    const item = new TodoItem(text);
    this.items.push(item);
  }
}

// Nutzen
const meineListe = new TodoList();
meineListe.hinzufuegen("Einkaufen");
```
Zeig im Browser: `meineListe.items[0].text` → Daten + Methoden zusammen![7]

## Bestes YT-Video
https://www.youtube.com/watch?v=bV1PG_LPegE (110 Min, Golo Roden) – Start bei 22:43 für `class`-Syntax, perfekt strukturiert mit `this`, Konstruktoren und Vererbung. Für Live-Coding: Ab 1:22:43 Klassen vs. Funktionen.[8]

[1](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
[2](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
[3](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/OOP/Klassen_und_Vererbung)
[4](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/OOP)
[5](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
[6](https://marc-borkowski.de/blog/2017/11/29/javascript-oop-klassen-methoden-und-vererbung/)
[7](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_classes)
[8](https://www.youtube.com/watch?v=bV1PG_LPegE)
[9](https://wiki.selfhtml.org/wiki/Super)
[10](https://www.youtube.com/watch?v=c2_920wGrxs)
[11](https://www.youtube.com/watch?v=gS0zSrBepsw)
[12](https://www.geeksforgeeks.org/javascript/introduction-object-oriented-programming-javascript/)
[13](https://www.youtube.com/watch?v=gmlxZAeKitU)
[14](https://www.youtube.com/watch?v=8Vogx4ps01U)
[15](https://www.youtube.com/watch?v=2pwvEtslrSw)
[16](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
[17](https://www.youtube.com/watch?v=kl3wTxXHYzM)
[18](https://www.youtube.com/watch?v=7aX6dYETgQM)
[19](https://www.freecodecamp.org/news/object-oriented-programming-javascript/)
[20](https://www.youtube.com/watch?v=6FWLZT0rgMs)