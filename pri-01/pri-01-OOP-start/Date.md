Ja, das Date-Beispiel wirkt kompliziert – **aber es ist nur 2 Minuten Live-Coding**! Zeig es als Kontrast zu OOP: "Lose Funktionen vs. Klassen mit Methoden".[1]

## Warum das Date-Beispiel nach OOP?
**Vor OOP:** 10 lose Funktionen (`getFullYear()`, `getMonth()`...)
```typescript
const date = new Date();
date.getFullYear();  // 2025
date.getMonth() + 1; // Monat 0-11 → +1!
date.getHours();     // Lose Methoden-Aufrufe
```

**Nach OOP-Lektion:** Alles in einer Klasse kapseln!
```typescript
class Datum {
  constructor(date = new Date()) { this.date = date; }
  
  jahr() { return this.date.getFullYear(); }
  monat() { return this.date.getMonth() + 1; }  // Automatisch +1!
  uhrzeit() { 
    const d = this.date;
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }
  
  iso() { return this.date.toISOString(); }
}

const heute = new Datum();
heute.jahr();      // 2025
heute.uhrzeit();   // "22:25:30"
```

## 2-Min-Demo im Unterricht
```
1. Zeig Original (1 Min): "Seht ihr die 10 Funktionen?"
2. OOP-Version (1 Min): "Jetzt alles in EINER Klasse!"
```

**Merksatz:** "`Date` ist ein eingebaute OOP-Klasse – deshalb so viele `.getX()` Methoden!"[2][1]

**Übergang:** "Deshalb lernen wir Klassen: Damit unsere `TodoList` später genauso sauber ist!" → Direkt zu TodoList.[3]

Perfekte Brücke zwischen "kompliziertem Original" und eurem "einfachem OOP"! 🎯

[1](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this)
[2](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Working_with_objects)
[3](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes)