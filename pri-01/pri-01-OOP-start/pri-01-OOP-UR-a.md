45 Minuten reichen perfekt für OOP-Einstieg – starte praxisnah, baue schrittweise auf, ende mit TodoList-Live-Coding.[1][2]

## 0-5 Min: Einstieg & Motivation (5 Min)
**Ziel:** Neugier wecken, prozedural vs. OOP kontrastieren.  
- Frage: "Wer kennt Klassen aus anderen Sprachen? Oder 'Baupläne für Objekte'?"  
- Tafel: Prozedural (`funktion berechnePreis(product)`) vs. OOP (`product.preisBerechnen()`)  
- Merksatz: "Daten + Funktionen zusammen statt lose verteilt."[1]

## 5-15 Min: Klasse Haustier (10 Min)
**Ziel:** Syntax verstehen (constructor, this, new).  
```javascript
class Haustier {
  constructor(name, art) {
    this.name = name; this.art = art;
  }
  vorstellen() { console.log(`${this.name} (${this.art})`); }
}
const max = new Haustier("Max", "Hund"); max.vorstellen();
```
- Live coden, 3 Objekte bauen, `console.log(max)` → this-Effekt zeigen.  
- Frage: "Warum `this.name` statt nur `name`?"[3][4]

## 15-25 Min: TodoItem Klasse (10 Min)
**Ziel:** Methoden + Arrays mit Klassen füllen.  
```javascript
class TodoItem {
  constructor(text) { this.text = text; this.done = false; }
  toggle() { this.done = !this.done; }
}
const todos = [new TodoItem("Einkaufen"), new TodoItem("Lernen")];
todos[0].toggle(); console.table(todos);
```
- `console.table()` für Übersicht, `.map()`-Vergleich: `todos.map(t => t.text)`[2]

## 25-40 Min: TodoList + DOM (15 Min)
**Ziel:** Vollständige Klasse mit Array-Management.  
```javascript
class TodoList {
  constructor() { this.items = []; }
  add(text) { this.items.push(new TodoItem(text)); }
  render(container) {
    container.innerHTML = "";
    this.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.text + (item.done ? " ✓" : "");
      container.appendChild(li);
    });
  }
}
// Nutzen + button.addEventListener
```
- HTML-Template zeigen, Liste im Browser rendern.[4]

## 40-45 Min: Hausaufgabe & Ausblick (5 Min)
**Ziel:** Vertiefen, React-Brücke bauen.  
- Übung: https://github.com/DCI-Webdev/pri-01 → "Eigene Klasse bauen!"  
- Teaser: "React Components sind Klassen! Später mehr."  
- Frage: "Was würdet ihr als nächste Klasse bauen?"[5]

[1](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
[2](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
[3](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)
[4](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_classes)
[5](https://www.youtube.com/watch?v=bV1PG_LPegE)