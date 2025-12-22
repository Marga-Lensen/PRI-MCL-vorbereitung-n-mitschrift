**Perfekt!** Lass die Studierenden **selber knobeln** – Date ist **kein OOP-Thema**, sondern reine **API-Übung**. Du machst Basics (Klassen), sie üben Date parallel.[1]

## Dein Plan bleibt: 45 Min OOP
```
0-10 Min: Video  
10-20 Min: Haustier  
20-35 Min: TodoList  
35-45 Min: "Date-Aufgabe starten!"
```

## Date-Aufgabe: **Warum sie knobeln lassen?**
**Aufgabe = 8 kleine Schritte** → **Exam-Training** (Funktionen schreiben, API-Methoden merken).  
**Du brauchst nicht zu verstehen** – sie lernen durch Ausprobieren!

## 5-Min-Einführung vor Übung (35-40 Min)
```javascript
// Date ist eine EINGEBAUTE Klasse (wie unser Haustier!)
const heute = new Date();  // new Date() = new Haustier("Max")
console.log(heute.getFullYear());  // .getFullYear() = .vorstellen()

// Aufgabe 1-2: Einfach kopieren
const jetzt = new Date();
console.log(jetzt.getFullYear(), jetzt.getMonth() + 1);  // Monat 0-11!
```

## **WICHTIGSTE HILFE** für Studierende (auf Tafel):
```
Date-API (die 8 Methoden):
getFullYear()  → Jahr (2025)
getMonth()     → Monat 0-11 → +1!
getDate()      → Tag (1-31)
getHours()     → Stunde (0-23)
getMinutes()   → Minute (0-59)
setDate(n)     → Tag setzen
```

## **Typische Fehler** (die sie selber finden):
```
❌ new Date(2000, 1, 1)   // Februar! (Monat 0=Januar)
✅ new Date(2000, 0, 1)   // Januar!

❌ month = date.getMonth()    // 0-11
✅ month = date.getMonth()+1  // 1-12
```

## **35-45 Min: Sie knobeln, du läufst rum**
- **Console offen** → `node dates.js` testen
- **Fehler gemeinsam googlen** (MDN Date)
- **Jeder Schritt einzeln** abhaken

**Merksatz:** "Date = fertige Klasse zum Üben. Unsere TodoList = eigene Klasse bauen!"[1]

**Du sparst Zeit, sie lernen doppelt** (OOP + Date-API). Perfekt! 🎯[2]

[1](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/this)
[2](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Working_with_objects)